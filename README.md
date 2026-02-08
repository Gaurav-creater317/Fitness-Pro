# FITNESS PRO 🏋️
## A Premium Full-Stack Fitness Experience

Fitness Pro is a modern, high-performance web application designed for fitness enthusiasts and gym owners. It features a cinematic user interface, smooth 3D animations, and a robust full-stack architecture to provide a seamless user experience.

🔗 **Live Demo:** [fitness-pro-services.vercel.app](https://fitness-pro-services.vercel.app/)

---

## ✨ Key Features

- **🚀 Cinematic Hero Section:** Realistic typing animations and staggered reveals for a high-end feel.
- **🔥 Dynamic 3D Pop-up Cards:** Interactive workout and feature cards that lift and scale on hover with deep shadows.
- **⚖️ BMI Calculator:** An integrated tool for users to calculate their body mass index instantly.
- **🛡️ Smart Contact System:** 
    - Real-time frontend and backend validation.
    - Exclusively supports major providers (Gmail, iCloud, Yahoo, Outlook).
    - Blocks generic test emails and invalid phone formats.
- **🌓 Adaptive Design:** Fully responsive layout with a premium dark-themed aesthetic.
- **📧 Seamless Communication:** Automated email handling via Node.js, Express, and Nodemailer.

---

## 🛠️ Technology Stack

### Frontend:
- **React.js** (Vite)
- **Framer Motion** (Cinematic Animations)
- **Lucide React** (Modern Icons)
- **Axios** (API Requests)
- **Vanilla CSS** (Custom Premium Styling)

### Backend:
- **Node.js**
- **Express.js**
- **Nodemailer** (Email Services)
- **CORS** (Security)
- **Dotenv** (Config Management)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Gaurav-creater317/Fitness-Pro.git
cd Fitness-Pro
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `config.env` file in the `backend` folder and add:
```env
PORT=4001
FRONTEND_URL=your_frontend_url
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_MAIL=your_email@gmail.com
SMTP_PASSWORD=your_google_app_password
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` folder and add:
```env
VITE_API_URL=your_backend_url
```

### 4. Run Locally
- **Backend:** `npm start` (in backend folder)
- **Frontend:** `npm run dev` (in frontend folder)

---

## 🌐 Deployment

This project is optimized for deployment on **Vercel**.

- **Backend:** Setup as a serverless function using `vercel.json`.
- **Frontend:** Deploy as a Vite project, ensuring Environment Variables (`VITE_API_URL`) are set in the Vercel dashboard.

---

## 👤 Author

Developed with ❤️ by **Gaurav Mehra**.

Connect with me:
- **GitHub:** [@Gaurav-creater317](https://github.com/Gaurav-creater317)
- **LinkedIn:** [Gaurav Mehra](https://www.linkedin.com/in/gaurav-mehra-a41220299/)
- **Instagram:** [@authentic_gaurav1](https://www.instagram.com/authentic_gaurav1/)

---
© 2026 Gaurav Mehra. All rights reserved.