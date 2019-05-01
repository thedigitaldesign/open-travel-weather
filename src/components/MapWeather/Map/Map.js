import React, { Component } from 'react'

// Packages
import GoogleMapReact from 'google-map-react'


export default class Map extends Component {
    static defaultProps = {
        center: {
            lat: 39.63,
            lng: -111.61
        },
        zoom: 8
    };

    render() {
        console.log('[Map]')

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%', backgroundColor: 'red' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                />
            </div>
        );
    }
}

//export default TravelMap
