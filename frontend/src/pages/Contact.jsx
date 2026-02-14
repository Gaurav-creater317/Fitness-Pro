import React, { useState } from 'react';
import axios from 'axios';
import { Send, MapPin, Phone, Mail, Clock, Loader, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        // Super Strict Frontend Validation
        const newErrors = {};
        const emailRegex = /^(?!(hi|test|admin|hello|user|guest|mail)@)[a-zA-Z0-9._%+-]{3,}@(gmail|yahoo|outlook|hotmail|icloud)\.com$/i;

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Use Gmail, Yahoo, Outlook, or iCloud only";
        }

        if (formData.phone && formData.phone.replace(/\s+/g, "").length < 10) {
            newErrors.phone = "Minimum 10 digits required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const rawApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4001';
            const apiUrl = rawApiUrl.endsWith('/') ? rawApiUrl.slice(0, -1) : rawApiUrl;
            await axios.post(`${apiUrl}/api/v1/send/mail`, formData);
            setSuccess("Message sent successfully! We'll get back to you soon.");
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSuccess(null), 5000);
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Failed to send message. Please try again.";
            setSuccess(errorMsg);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <MapPin size={28} />,
            title: 'Visit Us',
            info: 'Haldwani , Uttrakhand , India',
            subInfo: 'Fathepur , Lamachaur',
            color: '#ff3e3e'
        },
        {
            icon: <Phone size={28} />,
            title: 'Call Us',
            info: '+91 7983680756',
            subInfo: 'Mon-Sat 6AM-10PM',
            color: '#ff3e3e'
        },
        {
            icon: <Mail size={28} />,
            title: 'Email Us',
            info: 'gauravmehra26337@gmail.com',
            subInfo: 'We reply within 24hrs',
            color: '#ff3e3e'
        },
        {
            icon: <Clock size={28} />,
            title: 'Working Hours',
            info: 'Mon-Fri: 6AM - 10PM',
            subInfo: 'Sat-Sun: 7AM - 9PM',
            color: '#ff3e3e'
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            {/* Hero Header Section */}
            <section style={{
                paddingTop: '60px',
                paddingBottom: '80px',
                background: 'var(--bg-darker)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(255,62,62,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-30%',
                    left: '-5%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(255,62,62,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 20px' }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <motion.span
                            variants={fadeInUp}
                            style={{
                                color: 'var(--primary)',
                                fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                                letterSpacing: '3px',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '1rem'
                            }}
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                fontWeight: '900',
                                marginBottom: '1.5rem',
                                color: 'var(--text-light)',
                                lineHeight: '1.2'
                            }}
                        >
                            Let's Start Your <span style={{ color: 'var(--primary)' }}>Journey</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(1rem, 3vw, 1.15rem)',
                                color: 'var(--text-muted)',
                                lineHeight: '1.8',
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}
                        >
                            Have questions? Want to join our community? We're here to help you achieve your fitness goals. Reach out to us today!
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section style={{
                padding: '0 0 80px 0',
                background: 'var(--bg-dark)',
                marginTop: '-40px'
            }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '25px',
                            marginBottom: '80px'
                        }}
                    >
                        {contactInfo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -25,
                                    scale: 1.12,
                                    boxShadow: "0 30px 60px rgba(255,62,62,0.15)",
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '35px 25px',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow)',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Hover Glow Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                                    opacity: 0.6
                                }} />

                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    color: item.color,
                                    border: `2px solid ${item.color}30`
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    color: 'var(--text-light)',
                                    marginBottom: '12px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '5px', fontWeight: '500' }}>
                                    {item.info}
                                </p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                    {item.subInfo}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main Contact Section */}
                    <div className="contact-main-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 100%, 500px), 1fr))',
                        gap: 'clamp(20px, 5vw, 40px)',
                        alignItems: 'start'
                    }}>
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0 50px 100px rgba(0,0,0,0.6)",
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: 'clamp(25px, 5vw, 50px) clamp(20px, 4vw, 40px)',
                                borderRadius: '20px',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow)',
                                zIndex: 1
                            }}
                        >
                            <div style={{ marginBottom: '35px' }}>
                                <h2 style={{
                                    fontSize: '2.2rem',
                                    fontWeight: '800',
                                    color: 'var(--text-light)',
                                    marginBottom: '10px'
                                }}>
                                    Send Us a <span style={{ color: 'var(--primary)' }}>Message</span>
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            color: '#aaa',
                                            fontWeight: '600',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                background: 'var(--bg-dark)',
                                                border: '2px solid var(--border-color)',
                                                borderRadius: '10px',
                                                color: 'var(--text-light)',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            placeholder="John Doe"
                                            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '8px',
                                            color: '#aaa',
                                            fontWeight: '600',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            onBlur={(e) => e.target.style.borderColor = errors.phone ? '#ff3e3e' : 'var(--border-color)'}
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                background: 'var(--bg-dark)',
                                                border: `2px solid ${errors.phone ? '#ff3e3e' : 'var(--border-color)'}`,
                                                borderRadius: '10px',
                                                color: 'var(--text-light)',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                        {errors.phone && (
                                            <span style={{ color: '#ff3e3e', fontSize: '0.75rem', marginTop: '5px', display: 'block' }}>
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#aaa',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        onBlur={(e) => e.target.style.borderColor = errors.email ? '#ff3e3e' : 'var(--border-color)'}
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            background: 'var(--bg-dark)',
                                            border: `2px solid ${errors.email ? '#ff3e3e' : 'var(--border-color)'}`,
                                            borderRadius: '10px',
                                            color: 'var(--text-light)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                    {errors.email && (
                                        <span style={{ color: '#ff3e3e', fontSize: '0.75rem', marginTop: '5px', display: 'block' }}>
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#aaa',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            background: 'var(--bg-dark)',
                                            border: '2px solid var(--border-color)',
                                            borderRadius: '10px',
                                            color: 'var(--text-light)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                        placeholder="Membership Inquiry"
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>

                                <div style={{ marginBottom: '30px' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#aaa',
                                        fontWeight: '600',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Your Message *
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows="5"
                                        style={{
                                            width: '100%',
                                            padding: '14px 18px',
                                            background: 'var(--bg-dark)',
                                            border: '2px solid var(--border-color)',
                                            borderRadius: '10px',
                                            color: 'var(--text-light)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            transition: 'all 0.3s ease',
                                            resize: 'vertical',
                                            fontFamily: 'inherit'
                                        }}
                                        placeholder="Tell us about your fitness goals..."
                                        onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        borderRadius: '12px'
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <Loader className="animate-spin" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>

                                <AnimatePresence>
                                    {success && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            style={{
                                                marginTop: '20px',
                                                padding: '15px 20px',
                                                borderRadius: '10px',
                                                background: success.includes('success')
                                                    ? 'rgba(0, 230, 118, 0.1)'
                                                    : 'rgba(255, 23, 68, 0.1)',
                                                border: `1px solid ${success.includes('success') ? '#00e676' : '#ff1744'}`,
                                                color: success.includes('success') ? '#00e676' : '#ff1744',
                                                fontSize: '0.95rem',
                                                fontWeight: '600',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {success}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Google Map */}
                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    y: -15,
                                    boxShadow: "0 60px 120px rgba(0,0,0,0.7)",
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                style={{
                                    background: 'var(--bg-card)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow)',
                                    marginBottom: '30px',
                                    height: '350px',
                                    zIndex: 1
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55334.89999999999!2d79.4800!3d29.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86e7%3A0x20d1c0f8e7c4c3e!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1707395234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: document.documentElement.getAttribute('data-theme') === 'light' ? 'none' : 'grayscale(1) invert(0.9) contrast(0.9)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Haldwani, Uttarakhand Location"
                                />
                            </motion.div>

                            {/* Social Media & CTA */}
                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    y: -15,
                                    boxShadow: "0 60px 120px rgba(0,0,0,0.7)",
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '40px 35px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow)',
                                    zIndex: 1
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.6rem',
                                    fontWeight: '800',
                                    color: 'var(--text-light)',
                                    marginBottom: '15px'
                                }}>
                                    Connect With Us
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '25px', lineHeight: '1.7' }}>
                                    Connect with me on professional platforms and follow my development journey!
                                </p>

                                <div className="social-links-grid" style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {[
                                        { icon: <Linkedin size={20} />, color: '#0077b5', name: 'LinkedIn', url: 'https://www.linkedin.com/in/gaurav-mehra-a41220299/' },
                                        { icon: <Instagram size={20} />, color: '#e4405f', name: 'Instagram', url: 'https://www.instagram.com/authentic_gaurav1/#' },
                                        { icon: <Twitter size={20} />, color: '#1da1f2', name: 'Twitter', url: 'https://x.com/Gaurav27Spark?t=dkS_wamMH6byuaslgA5rgg&s=08' },
                                        { icon: <Github size={20} />, color: 'var(--text-light)', name: 'GitHub', url: 'https://github.com/Gaurav-creater317' },
                                        {
                                            icon: (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                                                </svg>
                                            ),
                                            color: 'var(--text-light)',
                                            name: 'Dev.to',
                                            url: 'https://dev.to/i_am_gaurav'
                                        }
                                    ].map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                background: social.color.includes('var') ? `rgba(128,128,128,0.15)` : `${social.color}15`,
                                                border: `2px solid ${social.color.includes('var') ? 'var(--border-color)' : social.color + '30'}`,
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: social.color,
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = social.color.includes('var') ? 'var(--text-light)' : social.color;
                                                e.currentTarget.style.color = (social.color === '#ffffff' || social.color === 'white' || social.color.includes('var')) ? 'var(--bg-dark)' : 'white';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = social.color.includes('var') ? `rgba(128,128,128,0.15)` : `${social.color}15`;
                                                e.currentTarget.style.color = social.color;
                                            }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>

                                <div style={{
                                    background: 'rgba(255, 62, 62, 0.05)',
                                    padding: '25px',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,62,62,0.1)'
                                }}>
                                    <h4 style={{
                                        color: 'var(--primary)',
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        marginBottom: '10px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        🚀 Full-Stack Gym Management Website
                                    </h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                        A complete end-to-end gym management web application designed and developed by
                                        <strong style={{ color: 'var(--primary)' }}> Gaurav Mehra </strong>
                                        to showcase real-world full-stack development skills using modern web technologies.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
