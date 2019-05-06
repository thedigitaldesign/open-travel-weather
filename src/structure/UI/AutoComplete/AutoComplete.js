import React, { Component } from 'react'
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

// CSS
import css from './AutoComplete.module.scss'

export default class AutoComplete extends Component {
    state = {
        address: '',
        latlng: {}
    }

    changeHandler = address => {
        this.setState({
            address
        })
    }

    selectHandler = address => {
        geocodeByAddress(address)
            .then(results => {
                getLatLng(results[0])
                    .then(latlng => {
                        this.setState(() => {
                            return {
                                latlng
                            }
                        })
                    })

                this.setState(() => {
                    return {
                        address: results[0].formatted_address
                    }
                })
            })
            .then(() => {
                const place = {
                    address: this.state.address,
                    latlng: this.state.latlng
                }
                this.props.place(place)
            })
            .catch(error => console.error('Error: ', error))
    }

    render() {
        return (
            <PlacesAutoComplete
                value={this.state.address}
                onChange={this.changeHandler}
                onSelect={this.selectHandler}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <>
                        <input 
                            {...getInputProps({
                                placeholder: this.props.placeholder, 
                                className: css.location_search_input
                            })}
                        />
                        <div className={css.autocomplete_dropdown_container}>
                            {loading && <div>Loading...</div>}

                            {
                                suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? css.suggestion_item__active
                                        : css.suggestion_item

                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' }

                                    return (
                                        <ul className="list-unstyled"
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <li>{suggestion.description}</li>
                                        </ul>
                                    )
                            })}
                        </div>
                    </>
                )}
            </PlacesAutoComplete>
        )
    }
}