import React, { Component } from 'react'

// Packages
import GoogleMapReact from 'google-map-react'

// CSS
import css from './GoogleMap.module.scss'

export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 39.63,
            lng: -111.61
        },
        zoom: 8
    };

    // handleGoogleMapApi = (google) => {
    //     let directionsService = new google.maps.DirectionsService()
    //     let directionsDisplay = new google.maps.DirectionsRenderer()
        
    //     directionsDisplay.setMap(google.map)
    //     directionsService.route(
    //         {
    //             travelMode: 'DRIVING',
    //             origin: "Lehi, Utah",
    //             //destination: "Boise, Idaho",
    //             destination: "Ontario, Oregon",
    //             //destination: "Portland, Oregon",
    //         },
    //         (DirectionsResult, DirectionsStatus) => {
                
    //             console.log('DirectionsResult', DirectionsResult)
    //             console.log('DirectionsStatus', DirectionsStatus)
    //             if (DirectionsStatus === 'OK') {
    //                 directionsDisplay.setDirections(DirectionsResult);
    //             }
    //         }
    //     )
    // }

    render() {
        console.log('[Map]')

        return (
            <div className={css.google_map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    yesIWantToUseGoogleMapApiInternals
                    {...this.props}>
                    {this.props.children}
                </GoogleMapReact>
            </div>

            // <>
            //     {/* Important! Always set the container height explicitly */}
            //     <div style={{ height: '100vh', width: '100%', backgroundColor: 'red' }}>
            //         <GoogleMapReact
            //             bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            //             defaultCenter={this.props.center}
            //             defaultZoom={this.props.zoom}
            //             yesIWantToUseGoogleMapApiInternals
            //             onGoogleApiLoaded={this.handleGoogleMapApi}
            //         />
            //     </div>
            // </>
        );
    }
}

//export default TravelMap
