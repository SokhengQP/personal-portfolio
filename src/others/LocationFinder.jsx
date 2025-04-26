import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { MdOutlineMessage } from "react-icons/md";
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
        <div className="contact-form-container bg-[#202022]">
            <form
                onSubmit={sendEmail}
                className="flex flex-col gap-8"
            >
                <div className="form-row grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    
                    <input
                        className="flex-grow h-10 p-7 rounded-lg outline-none custom-shadow-outer bg-transparent placeholder:text-sm placeholder:text-white"
                        type="text"
                        placeholder="Your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <input
                        className="flex-grow h-10 p-7 rounded-lg outline-none custom-shadow-outer bg-transparent placeholder:text-sm placeholder:text-white"
                        type="email"
                        placeholder="Email address"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <textarea
                    className="bg-transparent outline-none custom-shadow-outer p-7 rounded-lg placeholder:text-sm placeholder:text-white"
                    placeholder={`Write your message here...`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className='flex justify-center'>
                    <button
                        className="border-none hover:bg-blue-500 duration-250 bg-blue-600 w-32 px-6 py-4 rounded-lg"
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </div>

            </form>
            
        </div>
    );
}
