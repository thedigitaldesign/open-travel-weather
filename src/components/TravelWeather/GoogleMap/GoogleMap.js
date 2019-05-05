import React, { Component } from 'react'

// Packages
import GoogleMapReact from 'google-map-react'

// UI
import Sidebar from '../../../structure/UI/Sidebar/Sidebar'
import AutoComplete from '../../../structure/UI/AutoComplete/AutoComplete'

// CSS
import css from './GoogleMap.module.scss'

export default class GoogleMap extends Component {
    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        places: [],
        origin: '',
        destination: ''
    }

    static defaultProps = {
        center: {
            lat: 39.63,
            lng: -111.61
        },
        zoom: 8
    }

    RouteOriginHandler = origin => {
        this.setState({
            origin
        })

        console.log('[RouteOriginHandler] this.state: ', this.state)
    }

    RouteDestinationHandler = destination => {
        this.setState({
            destination
        })

        console.log('[RouteDestinationHandler] this.state: ', this.state)
    }

    GoogleMapApiHandler = (google) => {
        console.log('[GoogleMaps] google: ', google)
        let directionsService = new google.maps.DirectionsService()
        let directionsDisplay = new google.maps.DirectionsRenderer()
        
        directionsDisplay.setMap(google.map)
        directionsService.route(
            {
                travelMode: 'DRIVING',
                origin: this.state.origin,
                destination: this.state.destination
            },
            (DirectionsResult, DirectionsStatus) => {        
                console.log('DirectionsResult', DirectionsResult)
                console.log('DirectionsStatus', DirectionsStatus)
                if (DirectionsStatus === 'OK') {
                    directionsDisplay.setDirections(DirectionsResult);
                }
            }
        )
    }

    ApiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        })
    }

    AddPlace = (place) => {
        this.setState({ places: [place] });
    }

    render() {
        console.log('[Map]')
        return (
            <div className={css.google_map}>
                <Sidebar title="Directions" left show>
                    <AutoComplete placeholder="Choose starting point" place={this.RouteOriginHandler} />
                    <AutoComplete placeholder="Choose destination" place={(place) => this.RouteDestinationHandler(place)} />
                </Sidebar>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    yesIWantToUseGoogleMapApiInternals
                    // onGoogleApiLoaded={({ map, maps }) => this.ApiHasLoaded(map, maps)}
                    onGoogleApiLoaded={this.GoogleMapApiHandler}
                    {...this.props}>
                    {this.props.children}
                </GoogleMapReact>

                <Sidebar title="Weather" right show={false}>

                </Sidebar>
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
