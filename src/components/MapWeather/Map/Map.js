import React, { Component } from 'react'

// Packages
import GoogleMapReact from 'google-map-react'
import Axios from 'axios'


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

        Axios.get('https://api.flip.lease/graphql/sendJobApplication')
            .then((response) => {
                console.log('[Axios] response: ', response)
            })

        return (
            <></>
            // Important! Always set the container height explicitly
            // <div style={{ height: '100vh', width: '100%', backgroundColor: 'red' }}>
            //     <GoogleMapReact
            //         bootstrapURLKeys={{ key: '' }}
            //         defaultCenter={this.props.center}
            //         defaultZoom={this.props.zoom}
            //     />
            // </div>
        );
    }
}

//export default TravelMap
