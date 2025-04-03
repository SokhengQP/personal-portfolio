import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export default function LocationFinder() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!fullName.trim() || !email.trim() || !message.trim()) {
            setStatus("Please fill in all fields.");
            return;
        }

        setLoading(true);
        setStatus('');

        const templateParams = {
            from_name: fullName,
            from_email: email,
            message: message,
        };

        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('SUCCESS!', response.status, response.text);
            setStatus('Message sent successfully!');
            setFullName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('FAILED...', error);
            setStatus('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Form</h2>
            <form onSubmit={sendEmail}>
                <div className="form-row">
                    <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit" className="send-button" disabled={loading}>
                    {loading ? 'Sending...' : '✈️ Send Message'}
                </button>
            </form>
            {status && <p className="status-message">{status}</p>}
        </div>
    );
}
