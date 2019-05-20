import React, { Component } from 'react'

// Packages
import GoogleMapReact from 'google-map-react'

// Components
import AutoComplete from './AutoComplete/AutoComplete'

// UI
import Sidebar from '../../../structure/UI/Sidebar/Sidebar'

// CSS
import css from './GoogleMap.module.scss'

export default class GoogleMap extends Component {
    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        places: [],
        center: {
            lat: 39.63,
            lng: -111.61
        },
        zoom: 8,
        show: false
    }

    // GoogleMapApiHandler = (google) => {
    //     console.log('[GoogleMaps] google: ', google)
    //     let directionsService = new google.maps.DirectionsService()
    //     let directionsDisplay = new google.maps.DirectionsRenderer()

    //     directionsDisplay.setMap(google.map)

    //     console.log('this.state.places: ', this.state.places.length)

    //     directionsService.route(
    //         {
    //             travelMode: 'DRIVING',
    //             origin: 80, //this.state.places[0].address,
    //             destination: -111 //this.state.places[1].address
    //         },
    //         (DirectionsResult, DirectionsStatus) => {
    //             if (DirectionsStatus === 'OK') {
    //                 directionsDisplay.setDirections(DirectionsResult);
    //             }
    //         }
    //     )

    //     if (this.state.places.length) {
            
    //     }
    // }

    ApiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        })
    }

    AddPlace = (place) => {
        this.setState((prevState) => {
            return {
                places: prevState.places.concat(place)
            }
        });
    }

    SearchHandler = () => {
        console.log('[SearchHandler] places: ', this.state.places)
    }

    SidebarToggle = () => {
        this.setState((prevState) => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        console.log('[Map]')

        const {
            places, mapApiLoaded, mapInstance, mapApi,
          } = this.state;

        return (
            <div className={css.google_map}>
                <Sidebar title="Directions" left show={!this.state.show} toggle={this.SidebarToggle}>
                    { mapApiLoaded && (
                        <>
                            <AutoComplete placeholder="Choose starting point" place={this.AddPlace} />
                            <AutoComplete placeholder="Choose destination" place={this.AddPlace} />
                        </>
                    )}
                    <button className="btn btn-success" onClick={this.SearchHandler}>Search</button>
                </Sidebar>

                <GoogleMapReact
                    bootstrapURLKeys={{ 
                        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        libraries: ['places', 'geometry']
                    }}
                    defaultZoom={this.state.zoom}
                    defaultCenter={this.state.center}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.ApiHasLoaded(map, maps)}
                    {...this.props}
                >
                    
                </GoogleMapReact>

                {/* <Sidebar title="Weather" right show={this.state.show} toggle={this.SidebarToggle}>

                </Sidebar> */}
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
