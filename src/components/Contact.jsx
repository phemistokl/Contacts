import React from 'react';

import './Contact.css';

const Contact = React.createClass({
    getInitialState() {
        return {
            isOpened: false
        }
    },

    toggleBox(event) {
        this.setState({ isOpened: !this.state.isOpened });
    },

    render() {
        return <li className="contact" onClick={ this.toggleBox }>
                    <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                    <div className="contact-info">
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.phoneNumber} </div>
                    <div  className={this.state.isOpened == false ? "list" : "list show" }>
                    <div className="contact-number"> {this.props.adress} </div>
                    <div className="contact-number"> {this.props.email} </div>
                    </div>
                    </div>
                </li>
    }
});

export default Contact;
