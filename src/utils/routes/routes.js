import React, {  } from 'react'

// Packages
import { Route, Switch } from 'react-router-dom'

// Components
// import Map from '../../components/MapWeather/Map/Map';
import MapWeather from '../../components/TravelWeather/TravelWeather';


const Routes = () => {
    console.log('[Routes]')

    return (
        <>
            <Route path="/" exact component={MapWeather} />
        </>
        // <Switch>
            
        // </Switch>
    )
}

export default Routes
