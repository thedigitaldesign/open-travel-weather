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
            this.props.show ? css.open : css.close,
            this.props.left ? css.left : '',
            this.props.right ? css.right : '',
        ].join(' ')

        return (
            <section className={classes}>
                <header>
                    <h3>
                        { this.props.title }
                    </h3>
                </header>
                { this.props.children }
            </section>
        )
    }
}
