import React, { Component } from 'react'

// Packages
import { BrowserRouter } from 'react-router-dom'

// Components
import Layout from './structure/Layout/Layout'
import Routes from './utils/routes/routes'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        )
    }
}
