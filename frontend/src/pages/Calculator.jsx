import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Ruler, Weight, CheckCircle, RotateCcw } from 'lucide-react';

const Calculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (height && weight && gender) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            if (bmiValue < 18.5) setStatus('Underweight');
            else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus('Normal Weight');
            else if (bmiValue >= 25 && bmiValue < 29.9) setStatus('Overweight');
            else setStatus('Obese');
        }
    };

    const resetCalculator = () => {
        setHeight('');
        setWeight('');
        setGender('');
        setBmi(null);
        setStatus('');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Normal Weight': return '#00e676';
            case 'Underweight': return '#2979ff';
            case 'Overweight': return '#ffea00';
            case 'Obese': return '#ff1744';
            default: return '#fff';
        }
    };

    return (
        <section className="calculator-page" style={{
            minHeight: '100vh',
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80") center/cover fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0'
        }}>
            <div className="container" style={{ maxWidth: '1000px', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
                        transition: { duration: 0.5, ease: "easeOut" }
                    }}
                    transition={{ duration: 0.5 }}
                    className="calculator-grid"
                    style={{
                        background: 'var(--bg-card)',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow)',
                        border: '1px solid var(--border-color)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        cursor: 'default',
                        width: '100%'
                    }}
                >
                    {/* Left Side: Form */}
                    <div style={{ padding: 'clamp(20px, 5vw, 40px)' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-light)' }}>BMI <span style={{ color: 'var(--primary)' }}>Calculator</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Enter your height and weight to calculate your Body Mass Index and check your health status.
                        </p>

                        <form onSubmit={calculateBMI}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontWeight: '600' }}>Gender</label>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <button
                                        type="button"
                                        onClick={() => setGender('male')}
                                        style={{
                                            flex: 1,
                                            padding: '12px',
                                            borderRadius: '8px',
                                            background: gender === 'male' ? 'var(--primary)' : 'var(--bg-dark)',
                                            color: gender === 'male' ? 'white' : 'var(--text-light)',
                                            border: '1px solid var(--border-color)',
                                            transition: 'all 0.3s',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Male
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setGender('female')}
                                        style={{
                                            flex: 1,
                                            padding: '12px',
                                            borderRadius: '8px',
                                            background: gender === 'female' ? 'var(--primary)' : 'var(--bg-dark)',
                                            color: gender === 'female' ? 'white' : 'var(--text-light)',
                                            border: '1px solid var(--border-color)',
                                            transition: 'all 0.3s',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '20px',
                                marginBottom: '30px'
                            }}>
                                <div>
                                    <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: 'var(--text-muted)', fontWeight: '600' }}>
                                        <Ruler size={16} style={{ marginRight: '8px', color: 'var(--primary)' }} /> Height (cm)
                                    </label>
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder="175"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'var(--bg-dark)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '8px',
                                            color: 'var(--text-light)',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: 'var(--text-muted)', fontWeight: '600' }}>
                                        <Weight size={16} style={{ marginRight: '8px', color: 'var(--primary)' }} /> Weight (kg)
                                    </label>
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        placeholder="70"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'var(--bg-dark)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '8px',
                                            color: 'var(--text-light)',
                                            fontSize: '1rem'
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Calculate BMI</button>
                                <button
                                    type="button"
                                    onClick={resetCalculator}
                                    style={{
                                        flex: 1,
                                        background: 'var(--bg-dark)',
                                        color: 'var(--text-light)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <RotateCcw size={20} />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Result */}
                    <div style={{
                        background: 'rgba(255, 62, 62, 0.03)',
                        padding: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderLeft: '1px solid var(--border-color)'
                    }}>
                        <AnimatePresence mode="wait">
                            {bmi ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ textAlign: 'center', width: '100%' }}
                                >
                                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Your BMI Result</h3>
                                    <div style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        border: `8px solid ${getStatusColor(status)}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        boxShadow: `0 0 30px ${getStatusColor(status)}40`
                                    }}>
                                        <span style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-light)' }}>{bmi}</span>
                                    </div>
                                    <h4 style={{ fontSize: '1.8rem', color: getStatusColor(status), marginBottom: '10px' }}>{status}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        {status === 'Normal Weight'
                                            ? "Great job! Keep maintaining your healthy lifestyle."
                                            : "Consider consulting a fitness expert for a personalized plan."}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{ textAlign: 'center', color: 'var(--text-muted)', opacity: 0.6 }}
                                >
                                    <Activity size={60} style={{ marginBottom: '20px' }} />
                                    <p>Enter your details to see the result</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Calculator;
