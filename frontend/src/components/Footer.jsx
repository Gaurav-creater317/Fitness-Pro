import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Instagram, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/gaurav-mehra-a41220299/', color: '#0077b5' },
        { icon: <Instagram size={18} />, url: 'https://www.instagram.com/authentic_gaurav1/#', color: '#e4405f' },
        { icon: <Twitter size={18} />, url: 'https://x.com/Gaurav27Spark?t=dkS_wamMH6byuaslgA5rgg&s=08', color: '#1da1f2' },
        { icon: <Github size={18} />, url: 'https://github.com/Gaurav-creater317', color: '#ffffff' }
    ];

    return (
        <footer style={{
            background: 'linear-gradient(to bottom, #0a0a0a, #000)',
            padding: '80px 0 0',
            borderTop: '1px solid #1a1a1a',
            marginTop: 'auto',
            color: '#fff'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '4rem',
                marginBottom: '60px'
            }}>
                {/* Brand Section */}
                <div>
                    <Link to="/" className="logo" style={{
                        fontSize: '2rem',
                        fontWeight: '900',
                        display: 'block',
                        marginBottom: '1.5rem',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        💪 FITNESS <span style={{ color: 'var(--primary)' }}>PRO 🏋️</span>
                    </Link>
                    <p style={{
                        color: '#aaa',
                        marginBottom: '2rem',
                        lineHeight: '1.8',
                        fontSize: '1rem',
                        maxWidth: '350px'
                    }}>
                        Empowering your fitness journey with state-of-the-art equipment, expert trainers, and a community that pushes you to be your best version.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.1, y: -5 }}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    border: '1px solid #333',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--primary)';
                                    e.currentTarget.style.color = 'var(--primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#333';
                                    e.currentTarget.style.color = '#fff';
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{
                        marginBottom: '2rem',
                        color: '#fff',
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        position: 'relative',
                        paddingBottom: '10px'
                    }}>
                        Quick Links
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '40px',
                            height: '3px',
                            background: 'var(--primary)'
                        }}></span>
                    </h4>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        listStyle: 'none',
                        padding: 0
                    }}>
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/workouts', label: 'Workouts' },
                            { to: '/calculator', label: 'BMI Calculator' },
                            { to: '/contact', label: 'Contact' }
                        ].map((link, idx) => (
                            <li key={idx}>
                                <Link
                                    to={link.to}
                                    style={{
                                        color: '#888',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--primary)';
                                        e.target.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#888';
                                        e.target.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>•</span> {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{
                        marginBottom: '2rem',
                        color: '#fff',
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        position: 'relative',
                        paddingBottom: '10px'
                    }}>
                        Contact Info
                        <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '40px',
                            height: '3px',
                            background: 'var(--primary)'
                        }}></span>
                    </h4>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        color: '#aaa',
                        listStyle: 'none',
                        padding: 0,
                        fontSize: '1rem'
                    }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--primary)' }}><MapPin size={20} /></div>
                            <span>Haldwani, Uttarakhand, India</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--primary)' }}><Mail size={20} /></div>
                            <span>gauravmehra26337@gmail.com</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ color: 'var(--primary)' }}><Phone size={20} /></div>
                            <span>+91 7983680756</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div style={{
                background: 'rgba(255,255,255,0.02)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                padding: '30px 0'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <p style={{
                        color: '#fff',
                        margin: 0,
                        fontSize: '1rem',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                    }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700' }}>© 2026 Copyright Reserved</span>
                        <span style={{ margin: '0 10px', color: '#444' }}>|</span>
                        This premium template is crafted with
                        <Heart size={16} fill="var(--primary)" color="var(--primary)" style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            margin: '0 8px',
                            animation: 'pulse 1.5s ease-in-out infinite'
                        }} />
                        by <strong style={{ color: 'var(--primary)', fontWeight: '800' }}>Gaurav Mehra</strong>
                    </p>
                    <p style={{
                        color: '#666',
                        margin: '10px 0 0',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Elevate Your Fitness Experience | Full-Stack Developer
                    </p>
                </div>
            </div>

            {/* Heart Beat Animation */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
