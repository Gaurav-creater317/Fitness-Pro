import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Heart, Zap, Clock, Users, Trophy } from 'lucide-react';
import HeroImage from '../assets/roman_reigns.jpg';
import CTABackground from '../assets/cta_background.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};


const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start', // Align left as per typical modern gym templates or centered if preferred
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${HeroImage}) center/contain no-repeat`,
                backgroundColor: '#000', // Add black background color to fill empty space
                textAlign: 'left', // Left aligned text usually looks better with this template
                padding: '0 5%'
            }}>
                <motion.div
                    className="container"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}
                >


                    <motion.h1 style={{
                        fontSize: 'clamp(3.5rem, 3vw, 6rem)',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        lineHeight: '1.1',
                        marginBottom: '2rem',
                        color: 'white',
                        textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        overflow: 'hidden'
                    }}>
                        {["Build Perfect", "Body Shape", "For Good and", "Healthy Life."].map((line, lineIndex) => (
                            <div key={lineIndex} style={{ display: 'block', overflow: 'hidden' }}>
                                {line.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.1,
                                            delay: (lineIndex * 15 + charIndex) * 0.04,
                                            ease: "easeIn"
                                        }}
                                        style={{
                                            display: 'inline-block',
                                            color: (line === "Body Shape" && charIndex > 4) ? 'var(--primary)' : 'inherit',
                                            whiteSpace: char === " " ? "pre" : "normal"
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            color: '#ccc',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            lineHeight: '1.8'
                        }}
                    >
                        Transform your body and mind with our expert-designed workout programs.
                        Start your fitness journey today!
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <Link
                            to="/workouts"
                            className="btn btn-primary"
                            style={{
                                padding: '18px 48px',
                                fontSize: '1.1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Dumbbell size={20} />
                            Get Started
                        </Link>

                    </motion.div>

                </motion.div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Why Choose Us</span>
                        <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Push Your <span>Limits</span></h2>
                    </div>

                    <motion.div
                        className="grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {[
                            { icon: <Dumbbell size={40} />, title: "Modern Equipment", desc: "Access to the latest fitness technology and premium gym gear." },
                            { icon: <Users size={40} />, title: "Expert Trainers", desc: "Certified professionals to guide you through every step of your journey." },
                            { icon: <Heart size={40} />, title: "Healthy Nutrition", desc: "Nutritional guidance to fuel your workouts and maximize results." },
                            { icon: <Zap size={40} />, title: "High Intensity", desc: "Specialized HIIT zones for maximum calorie burn in minimum time." },
                            { icon: <Clock size={40} />, title: "24/7 Access", desc: "Train on your schedule with round-the-clock gym access." },
                            { icon: <Trophy size={40} />, title: "Proven Results", desc: "Thousands of success stories from people just like you." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{
                                    y: -20,
                                    scale: 1.1,
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '2.5rem',
                                    borderRadius: '20px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow)',
                                    textAlign: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: 'rgba(255, 62, 62, 0.1)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    color: 'var(--primary)'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: 'var(--text-light)' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '120px 0',
                background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${CTABackground}) fixed center/cover`,
                textAlign: 'center',
                color: 'white' // Keep CTA text white for contrast against dark background
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: '900', color: 'white' }}>
                            Ready to <span className="text-gradient">Transform?</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', color: '#ccc' }}>
                            Don't wait for tomorrow. The perfect time to start is now. Join our community and achieve your fitness goals.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 48px', fontSize: '1.1rem' }}>
                            Join Membership Now
                        </Link>
                    </motion.div>
                </div>
            </section>

        </>
    );
};

export default Home;
