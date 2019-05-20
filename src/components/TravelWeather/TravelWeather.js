import React, { Component } from 'react'

// Components
import GoogleMap from './GoogleMap/GoogleMap'
import AutoComplete from './GoogleMap/AutoComplete/AutoComplete'
import Marker from './GoogleMap/Marker/Marker'
//import { start } from 'repl';

// UI
import Sidebar from '../../structure/UI/Sidebar/Sidebar'

export default class TravelWeather extends Component {
    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        places: [],
    }

    apiHasLoaded = (map, maps) => {
        console.log('====================================');
        console.log('[TravelWeather] apiHasLoaded map: ', map);
        console.log('[TravelWeather] apiHasLoaded maps: ', maps);
        console.log('====================================');

        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        })
    }

    addPlace = (place) => {
        this.setState({ places: [place] })
    }

    render() {
        console.log('[TravelWeather]')
        // const {
        //     places, mapApiLoaded, mapInstance, mapApi,
        // } = this.state

        return (
            <>
                <Sidebar title="Directions" left show={!this.state.show} toggle={this.SidebarToggle}>
                    { this.state.mapApiLoaded && (
                        <>
                            <AutoComplete map={this.state.mapInstance} mapApi={this.state.mapApi} addplace={this.addPlace} />
                            <AutoComplete map={this.state.mapInstance} mapApi={this.state.mapApi} addplace={this.addPlace} />
                        </>
                    )}
                    <button className="btn btn-success" onClick={this.SearchHandler}>Search</button>
                </Sidebar>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={[34.0522, -118.2437]}
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >
                    {
                        this.state.places.map(place => {
                            console.log('[place]: ', place)
                            
                            return (
                                <Marker
                                    key={place.id}
                                    text={place.name}
                                    lat={place.geometry.location.lat()}
                                    lng={place.geometry.location.lng()}
                                />
                            )
                    })
                    }
                </GoogleMap>
            </>
        )
    }
}
