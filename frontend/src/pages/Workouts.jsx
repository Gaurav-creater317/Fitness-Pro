import React, { useState } from 'react';
import { Clock, Flame, Dumbbell, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Workouts = () => {
    const workoutsData = [
        {
            id: 1,
            name: 'Full Body Strength',
            category: 'Strength',
            difficulty: 'Intermediate',
            duration: '45-60 min',
            calories: '400-500',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
            description: 'Build overall muscle mass and strength with compound movements targeting all major muscle groups.',
            exercises: ['Squats', 'Deadlifts', 'Bench Press', 'Rows', 'Overhead Press'],
            sets: '4-5 sets',
            reps: '6-12 reps',
            focus: 'Muscle Building'
        },
        {
            id: 2,
            name: 'HIIT Cardio Blast',
            category: 'HIIT',
            difficulty: 'Advanced',
            duration: '30-40 min',
            calories: '500-700',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
            description: 'High-intensity intervals designed to maximize fat burn and improve cardiovascular endurance.',
            exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees', 'Box Jumps'],
            sets: '5-6 rounds',
            reps: '30-45 sec',
            focus: 'Fat Loss'
        },
        {
            id: 3,
            name: 'Upper Body Power',
            category: 'Strength',
            difficulty: 'Advanced',
            duration: '50-65 min',
            calories: '350-450',
            image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
            description: 'Intense upper body workout focusing on chest, back, shoulders, and arms for maximum strength gains.',
            exercises: ['Bench Press', 'Pull-ups', 'Dips', 'Shoulder Press', 'Barbell Rows'],
            sets: '4-6 sets',
            reps: '5-10 reps',
            focus: 'Strength & Power'
        },
        {
            id: 4,
            name: 'Yoga Flow & Flexibility',
            category: 'Yoga',
            difficulty: 'Beginner',
            duration: '45-60 min',
            calories: '150-250',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
            description: 'Gentle yoga flow to improve flexibility, balance, and mental clarity through mindful movement.',
            exercises: ['Sun Salutation', 'Warrior Poses', 'Downward Dog', 'Tree Pose', 'Child\'s Pose'],
            sets: '3-4 flows',
            reps: '5-10 breaths',
            focus: 'Flexibility & Mindfulness'
        },
        {
            id: 5,
            name: 'Leg Day Destroyer',
            category: 'Strength',
            difficulty: 'Advanced',
            duration: '60-75 min',
            calories: '450-600',
            image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80',
            description: 'Comprehensive leg workout targeting quads, hamstrings, glutes, and calves for explosive lower body power.',
            exercises: ['Back Squats', 'Romanian Deadlifts', 'Leg Press', 'Lunges', 'Calf Raises'],
            sets: '5-6 sets',
            reps: '8-15 reps',
            focus: 'Lower Body Mass'
        },
        {
            id: 6,
            name: 'CrossFit WOD',
            category: 'CrossFit',
            difficulty: 'Advanced',
            duration: '40-50 min',
            calories: '600-800',
            image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80',
            description: 'Workout of the Day combining Olympic lifts, gymnastics, and metabolic conditioning for elite fitness.',
            exercises: ['Clean & Jerk', 'Thrusters', 'Toes-to-Bar', 'Double Unders', 'Wall Balls'],
            sets: 'AMRAP 20min',
            reps: 'Varied',
            focus: 'Functional Fitness'
        },
        {
            id: 7,
            name: 'Core & Abs Sculptor',
            category: 'Core',
            difficulty: 'Intermediate',
            duration: '25-35 min',
            calories: '200-300',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
            description: 'Targeted core workout to build a strong, defined midsection and improve overall stability.',
            exercises: ['Planks', 'Russian Twists', 'Leg Raises', 'Ab Wheel', 'Cable Crunches'],
            sets: '4-5 sets',
            reps: '15-25 reps',
            focus: 'Core Strength'
        },
        {
            id: 8,
            name: 'Cardio Endurance Run',
            category: 'Cardio',
            difficulty: 'Intermediate',
            duration: '40-60 min',
            calories: '400-600',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
            description: 'Steady-state cardio session to build aerobic capacity and improve cardiovascular health.',
            exercises: ['Treadmill Run', 'Rowing', 'Cycling', 'Elliptical', 'Stair Climber'],
            sets: 'Continuous',
            reps: '40-60 min',
            focus: 'Endurance'
        },
        {
            id: 9,
            name: 'Powerlifting Basics',
            category: 'Powerlifting',
            difficulty: 'Advanced',
            duration: '75-90 min',
            calories: '350-500',
            image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80',
            description: 'Focus on the big three lifts to build maximum strength and compete in powerlifting.',
            exercises: ['Squat', 'Bench Press', 'Deadlift', 'Accessories', 'Mobility Work'],
            sets: '5-8 sets',
            reps: '1-5 reps',
            focus: 'Max Strength'
        },
        {
            id: 10,
            name: 'Calisthenics Mastery',
            category: 'Calisthenics',
            difficulty: 'Intermediate',
            duration: '45-55 min',
            calories: '300-450',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
            description: 'Bodyweight training to build strength, control, and impressive skills using only your body.',
            exercises: ['Pull-ups', 'Dips', 'Push-ups', 'Handstands', 'L-sits'],
            sets: '4-5 sets',
            reps: '8-15 reps',
            focus: 'Bodyweight Strength'
        },
        {
            id: 11,
            name: 'Athletic Performance',
            category: 'Functional',
            difficulty: 'Advanced',
            duration: '50-60 min',
            calories: '450-550',
            image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
            description: 'Sport-specific training to enhance athletic performance, speed, agility, and explosive power.',
            exercises: ['Box Jumps', 'Sprints', 'Agility Drills', 'Medicine Ball Throws', 'Sled Pushes'],
            sets: '4-6 sets',
            reps: 'Varied',
            focus: 'Athletic Performance'
        },
        {
            id: 12,
            name: 'Recovery & Mobility',
            category: 'Recovery',
            difficulty: 'Beginner',
            duration: '30-45 min',
            calories: '100-150',
            image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
            description: 'Active recovery session focusing on mobility, stretching, and muscle recovery for optimal performance.',
            exercises: ['Foam Rolling', 'Dynamic Stretching', 'Yoga Poses', 'Breathing Exercises', 'Light Cardio'],
            sets: '2-3 rounds',
            reps: '10-15 min',
            focus: 'Recovery & Flexibility'
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Strength', 'HIIT', 'Cardio', 'Yoga', 'CrossFit', 'Powerlifting', 'Calisthenics', 'Functional', 'Core', 'Recovery'];

    const filteredWorkouts = selectedCategory === 'All'
        ? workoutsData
        : workoutsData.filter(w => w.category === selectedCategory);

    return (
        <section className="workouts-page" style={{ minHeight: '100vh', paddingBottom: '80px', background: 'var(--bg-dark)' }}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span className="section-subtitle" style={{ color: 'var(--primary)' }}>
                        TRANSFORM YOUR BODY
                    </span>
                    <h1 className="section-title" style={{ color: 'var(--text-light)', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        Workout <span style={{ color: 'var(--primary)' }}>Programs</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                        Choose from our expertly designed workout programs tailored to your fitness goals
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        justifyContent: 'center',
                        marginBottom: '3rem'
                    }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '25px',
                                background: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                                color: selectedCategory === cat ? 'white' : 'var(--text-light)',
                                border: selectedCategory === cat ? 'none' : '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow)',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="workouts-grid-responsive" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 100%, 350px), 1fr))',
                    gap: 'clamp(15px, 3vw, 25px)',
                    marginTop: '2rem'
                }}>
                    {filteredWorkouts.map((workout, index) => (
                        <WorkoutCard key={workout.id} workout={workout} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const WorkoutCard = ({ workout, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return '#00e676';
            case 'Intermediate': return '#ffa726';
            case 'Advanced': return '#ff3e3e';
            default: return '#888';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{
                y: -25,
                scale: 1.08,
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                zIndex: 10,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="workout-card"
            style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
            }}
        >
            {/* Image Section */}
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: 'var(--bg-darker)' }}>
                {/* Skeleton Loader */}
                {!imageLoaded && (
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--bg-dark), var(--bg-card), var(--bg-dark))',
                            backgroundSize: '200% 100%',
                            zIndex: 1
                        }}
                    />
                )}

                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    onLoad={() => setImageLoaded(true)}
                    whileHover={{ scale: 1.1 }}
                    src={workout.image}
                    alt={workout.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative',
                        zIndex: 0,
                        transition: 'transform 0.5s ease'
                    }}
                />

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    zIndex: 1
                }} />

                {/* Difficulty Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, type: 'spring' }}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: getDifficultyColor(workout.difficulty),
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        zIndex: 2,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                    }}
                >
                    {workout.difficulty}
                </motion.div>

                {/* Category Badge */}
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    zIndex: 2,
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    {workout.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="workout-content" style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '12px' }}>
                    {workout.name}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '20px', flex: 1 }}>
                    {workout.description}
                </p>

                <div className="workout-stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                    marginBottom: '20px'
                }}>
                    <div style={{
                        background: 'rgba(255,62,62,0.1)',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,62,62,0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Clock size={16} color="var(--primary)" />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Duration</span>
                        </div>
                        <div style={{ color: 'var(--text-light)', fontWeight: '600', fontSize: '0.9rem' }}>{workout.duration}</div>
                    </div>

                    <div style={{
                        background: 'rgba(255,62,62,0.1)',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,62,62,0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Flame size={16} color="var(--primary)" />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Calories</span>
                        </div>
                        <div style={{ color: 'var(--text-light)', fontWeight: '600', fontSize: '0.9rem' }}>{workout.calories}</div>
                    </div>

                    <div style={{
                        background: 'var(--bg-dark)',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Dumbbell size={16} color="var(--text-muted)" />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Sets</span>
                        </div>
                        <div style={{ color: 'var(--text-light)', fontWeight: '600', fontSize: '0.9rem' }}>{workout.sets}</div>
                    </div>

                    <div style={{
                        background: 'var(--bg-dark)',
                        padding: '12px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <Target size={16} color="var(--text-muted)" />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Reps</span>
                        </div>
                        <div style={{ color: 'var(--text-light)', fontWeight: '600', fontSize: '0.9rem' }}>{workout.reps}</div>
                    </div>
                </div>

                {/* Focus Badge */}
                <div style={{
                    background: 'rgba(255,62,62,0.05)',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255,62,62,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <TrendingUp size={16} color="var(--primary)" />
                    <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>
                        Focus: {workout.focus}
                    </span>
                </div>

                {/* Exercises Section */}
                <div style={{ marginTop: 'auto' }}>
                    <h4 style={{
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        marginBottom: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontWeight: '700'
                    }}>
                        Key Exercises
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {workout.exercises.map((exc, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + idx * 0.05 }}
                                whileHover={{ scale: 1.05, background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}
                                style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    background: 'var(--bg-dark)',
                                    padding: '6px 12px',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border-color)',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {exc}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Workouts;
