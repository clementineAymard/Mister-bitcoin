import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactDetailsPage } from './ContactDetailsPage'
import { contactService } from '../services/contact.service'

export class ContactPage extends Component {

    state = {
        selectedContactId: null,
        selectedContact: null,
        contacts: null,
        filterBy: { term: '' },
    }

    async loadContacts() {
        let contactList = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts: contactList })
    }

    async componentDidMount() {
        this.loadContacts()
    }

    onSelectContact = (contactId) => {
        console.log('selected contact id:', contactId)
        this.setState({ selectedContactId: contactId })
    }

    onSearch = (ev) => {
        const keyword = ev.target.value
        console.log(keyword)
        this.setState({ filterBy: { term: keyword } })
        this.loadContacts()
    }

    onBackToList = () => {
        this.props.history.push('/contact')
    }

    render() {
        if (!this.state.contacts) return <div>Loading...</div>

        return (
            <section className='contact-page flex column'>
                <ContactFilter onSearch={this.onSearch} filterBy={this.state.filterBy} />
                <ContactList contacts={this.state.contacts} onSelectContact={this.onSelectContact} onBack={this.onBackToList}/>
                <Link to={`/contact/edit/`} className='btn-add'>
                    <img src={require('../assets/imgs/plus.png')}/>
                </Link>
            </section>
        )
    }
}
