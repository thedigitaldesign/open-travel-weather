import React, { Component } from 'react'

// CSS
import css from './Sidebar.module.scss'

export default class Sidebar extends Component {
    // state = {
    //     show: true
    // }

    render() {
        const classes = [
            css.sidebar, 
            //this.props.show ? css.open : css.close,
            this.props.left ? css.left : '',
            this.props.right ? css.right : '',
        ].join(' ')

        const right_caret = this.props.right 
            ? ( this.props.show 
                    ? <i className="fas fa-caret-right"></i> 
                    : <i className="fas fa-caret-left"></i> ) 
            : null
        const left_caret = this.props.left 
            ? ( this.props.show 
                    ? <i className="fas fa-caret-left"></i> 
                    : <i className="fas fa-caret-right"></i> ) 
            : null

        return (
            <aside className={classes}>
                <section className={``}>
                    <header>
                        <h3>
                            { this.props.title }
                        </h3>
                    </header>
                    
                    { this.props.children }
                </section>

                { this.props.left 
                    ? (
                        <div className={`${ css.sidebar_toggle } ${ css.left }`}>
                            { this.props.left ? left_caret : null }
                        </div>
                    )
                    : null }
                
                { this.props.right 
                    ? (
                        <div className={`${ css.sidebar_toggle } ${ css.right }`}>
                            { this.props.right ? right_caret : null }
                        </div>
                    )
                    : null }
            </aside>
        )
    }
}
