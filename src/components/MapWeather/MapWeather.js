import React, { Component } from 'react'

// Components
import Map from './Map/Map';

export default class MapWeather extends Component {
    render() {
        console.log('[MapWeather]')

        return (
            <div>
                <Map />
            </div>
        )
    }
}
