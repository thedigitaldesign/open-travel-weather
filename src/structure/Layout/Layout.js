import React, { Component } from 'react'

// Components
import Header from './Header/Header'

// CSS
import css from './Layout.module.scss'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className={`container-fluid h-100 mx-0 px-0`}>
                    <div className={`row`}>
                        {this.props.children}
                    </div>
                </main>
            </>
        )
    }
}
