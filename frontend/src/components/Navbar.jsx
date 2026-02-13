import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                padding: '15px 0',
                transition: 'all 0.4s ease',
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                top: 0,
                borderBottom: scrolled ? '1px solid var(--border-color)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/" className="logo" style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: 'var(--text-light)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        💪 FITNESS<span style={{ color: 'var(--primary)' }}> PRO 🏋️</span>
                    </Link>
                </motion.div>

                {/* Desktop Links - Centered */}
                <div className="nav-links desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {['/', '/workouts', '/calculator', '/contact'].map((path) => {
                        const label = path === '/' ? 'HOME' : path.slice(1).toUpperCase();
                        const isActive = location.pathname === path;
                        return (
                            <motion.div key={path} whileHover={{ y: -2 }}>
                                <Link
                                    to={path}
                                    style={{
                                        color: 'var(--text-light)',
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        letterSpacing: '1px',
                                        position: 'relative',
                                        opacity: isActive ? 1 : 0.7,
                                        transition: 'opacity 0.3s'
                                    }}
                                >
                                    {label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-5px',
                                                left: 0,
                                                width: '100%',
                                                height: '2px',
                                                background: 'var(--primary)'
                                            }}
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* Theme Toggle Button (Desktop) */}
                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--text-light)',
                            boxShadow: 'var(--shadow)',
                            marginLeft: '10px'
                        }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>

                    <Link to="/contact" className="btn btn-primary" style={{
                        padding: '10px 25px',
                        fontSize: '0.85rem',
                        marginLeft: '10px'
                    }}>
                        BECOME A MEMBER
                    </Link>
                </div>

                {/* Mobile Icons Wrapper */}
                <div className="hamburger">
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-light)',
                            marginRight: '15px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        {isMobileMenuOpen ? <X size={28} color="var(--text-light)" /> : <Menu size={28} color="var(--text-light)" />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg-darker)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                            zIndex: 999
                        }}
                    >
                        <div style={{ position: 'absolute', top: '25px', right: '20px', cursor: 'pointer', zIndex: 1001 }} onClick={() => setIsMobileMenuOpen(false)}>
                            <X size={32} color="var(--text-light)" />
                        </div>
                        {['/', '/workouts', '/calculator', '/contact'].map((path) => (
                            <Link key={path} to={path} onClick={() => setIsMobileMenuOpen(false)}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                                    {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
