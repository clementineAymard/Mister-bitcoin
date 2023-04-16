import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'

export class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
        } catch (error) {
            console.error('error:', error)
        }
    }

    // onBack = () => {
    //     this.props.history.push('/contact')
    // }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details'>
                <h3>Name: {contact.name}</h3>
                <h3>Email: {contact.email}</h3>
                <h3>Phone: {contact.phone}</h3>
                {/* <button onClick={this.onBack}>Back</button> */}

                <Link to={`/contact/edit/${contact._id}`}>
                    <img src={require('../assets/imgs/edit.png')} />
                </Link>

                
            </div>
        )
    }
}
