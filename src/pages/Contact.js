import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderme işlemi yapılabilir
        alert('Mesaj gönderildi!');
        // Verileri sıfırlamak için
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-group-name-email">
                <div className="form-group">
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınızı ve Soyadınızı girin"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-posta adresinizi girin"
                        required
                    />
                </div>
                </div>
                <div className="form-group-message">
                    <label htmlFor="message">Mesaj</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mesajınızı buraya yazın"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    Gönder
                </button>
            </form>

            <div className="social-links">
                <h3>Sosyal Medya</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/zynpsylr" target="_blank" rel="noopener noreferrer">
                            <span>🔗 LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/zynpsylr" target="_blank" rel="noopener noreferrer">
                            <span>🐙 GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>✉️ E-posta : </span> zsoyler80@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
