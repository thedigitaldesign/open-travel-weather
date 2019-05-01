import React, { Component } from 'react'

// Components
import GoogleMap from './GoogleMap/GoogleMap';

export default class TravelWeather extends Component {
    render() {
        console.log('[TravelWeather]')

        return (
            <>
                <GoogleMap />
            </>
        )
    }
}
