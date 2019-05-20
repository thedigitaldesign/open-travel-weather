import React from 'react'

// Packages
import GoogleMapReact from 'google-map-react'

// CSS
import css from './GoogleMap.module.scss'

const GoogleMap = (props) => {
    console.log('[GoogleMaps]')

    return (
        <div className={css.google_map}>
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                    libraries: ['places', 'geometry']
                }}
                {...props}
            >
                {props.children}
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap