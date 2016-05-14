import React from 'react';

import Contact from './Contact.jsx';

import contacts from '../contacts.json';

import './ContactsList.css';

const ContactsList = React.createClass({
    getInitialState() {
        return {
            displayedContacts: contacts
        };
    },

    handleSearch(event) {
        const searchQuery = event.target.value.toLowerCase();
        const displayedContacts = contacts.filter(function(el) {
            const searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        });
    },

    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                adress={el.adress}
                                email={el.email}
                            />;
                        })
                    }
                </ul>
            </div>
            );
        }
    });

export default ContactsList;
