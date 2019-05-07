import React, { Component } from 'react'

// CSS
import css from './Sidebar.module.scss'

export default class Sidebar extends Component {
    RenderRightCaret = (toggle) => {
        let element = (
            this.props.right 
                ? ( toggle 
                        ? <i className={`fas fa-caret-right`}></i> 
                        : <i className={`fas fa-caret-left`}></i> ) 
                : null
        )

        return element
    }

    RenderLeftCaret = (toggle) => {
        console.log('[RenderLeftCaret] toggle: ', toggle)

        let element = (
            this.props.left 
                ? ( toggle
                        ? <i className={`fas fa-caret-left`}></i> 
                        : <i className={`fas fa-caret-right`}></i> ) 
                : null
        )

        console.log('[RenderLeftCaret] element: ', element)

        return element
    }

    render() {
        console.log('[Sidebar]')

        const classes = [
            css.sidebar,
            this.props.show ? css.open : css.close,
            this.props.left ? css.left : '',
            this.props.right ? css.right : ''
        ].join(' ')

        const right_caret = this.RenderRightCaret(this.props.show)
        let left_caret = this.RenderLeftCaret(this.props.show)

        return (
            <aside className={classes}>
                <section>
                    <header>
                        <h3>
                            { this.props.title }
                        </h3>
                    </header>
                    
                    { this.props.children }
                </section>

                { this.props.left 
                    ? (
                        <div className={`${ css.sidebar_toggle } ${ css.left }`} onClick={ this.props.toggle }>
                            { left_caret }
                        </div>
                    )
                    : null }
                
                { this.props.right 
                    ? (
                        <div className={`${ css.sidebar_toggle } ${ css.right }`} onClick={ this.props.toggle }>
                            { right_caret }
                        </div>
                    )
                    : null }
            </aside>
        )
    }
}
