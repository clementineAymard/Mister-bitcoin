import React, { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        filterBy: null
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }
    
    render() {
        return (
            <input type="text" className='contact-filter' onChange={this.props.onSearch} placeholder="Search" />
        )
    }
}

