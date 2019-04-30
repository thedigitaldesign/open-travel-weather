import React, { Component } from 'react'

// Components
import Header from './Header/Header'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="container" style={{ width: '800px', height: '800px', backgroundColor: 'green' }}>
                    {this.props.children}
                </main>
            </>
        )
    }
}
