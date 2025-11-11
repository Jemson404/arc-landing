'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({ role: '', name: '', email: '', message: '', license: false });
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: 'e850ec97-ac7d-4aff-aed0-aa2f1059ecf4',
                ...formState,
            }),
        });

        if (response.ok) {
            setSubmissionStatus('Success! Your message has been sent.');
            setFormState({ role: '', name: '', email: '', message: '', license: false });
        } else {
            setSubmissionStatus('Error! There was a problem submitting your message.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='your-form-class'>
            <input type='text' value={formState.role} onChange={(e) => setFormState({ ...formState, role: e.target.value })} required />
            <input type='text' value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required />
            <input type='email' value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required />
            <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required></textarea>
            <label>
                <input type='checkbox' checked={formState.license} onChange={(e) => setFormState({ ...formState, license: e.target.checked })} required />
                I agree to the license
            </label>
            <button type='submit'>Submit</button>
            <div className='form-status'>{submissionStatus}</div>
        </form>
    );
};

export default ContactForm;