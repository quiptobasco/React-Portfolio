import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (!value) {
            return setError(`${name} field cannot be empty`);
        } else {
            if (name === 'name') {
                return setName(value);
            }
            if (name === 'email') {
                return setEmail(value);
            }
            if (name === 'message') {
                return setMessage(value);
            }
        }

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form">
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}

export default Contact