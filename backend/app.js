import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

const allowedOrigin = process.env.FRONTEND_URL ?
    (process.env.FRONTEND_URL.endsWith('/') ? process.env.FRONTEND_URL.slice(0, -1) : process.env.FRONTEND_URL)
    : "*";

app.use(
    cors({
        origin: [allowedOrigin],
        methods: ["POST", "GET"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res, next) => {
    const { name, email, phone, message } = req.body;

    // Basic presence check
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required details (Name, Email, Message)",
        });
    }

    // Exclusively allow only major trusted providers
    const emailRegex = /^(?!(hi|test|admin|hello|user|guest|mail)@)[a-zA-Z0-9._%+-]{3,}@(gmail|yahoo|outlook|hotmail|icloud)\.com$/i;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "We only accept emails from Gmail, Yahoo, Outlook, or iCloud (e.g., user@gmail.com).",
        });
    }

    // Phone Validation (if provided, check format: at least 10 digits)
    if (phone) {
        const phoneRegex = /^\+?[0-9]{10,14}$/;
        if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid phone number (at least 10 digits)",
            });
        }
    }

    try {
        await sendEmail({
            email: process.env.SMTP_MAIL,
            subject: "GYM WEBSITE CONTACT MESSAGE",
            message: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

router.get("/workouts", (req, res) => {
    const workouts = [
        { id: 1, name: "Body Pump", duration: "60 mins", difficulty: "Intermediate", description: "Get lean, tone muscle, and get fit." },
        { id: 2, name: "Yoga", duration: "45 mins", difficulty: "Beginner", description: "Improve flexibility and reduce stress." },
        { id: 3, name: "HIIT", duration: "30 mins", difficulty: "Advanced", description: "High intensity interval training for maximum calorie burn." },
        { id: 4, name: "Pilates", duration: "50 mins", difficulty: "Beginner", description: "Core strength and stability." },
        { id: 5, name: "Zumba", duration: "45 mins", difficulty: "All Levels", description: "Dance fitness party." },
        { id: 6, name: "CrossFit", duration: "60 mins", difficulty: "Advanced", description: "Functional fitness at high intensity." }
    ];
    res.status(200).json({
        success: true,
        workouts
    })
});

app.use("/api/v1", router);

// Add a root route for testing
app.get("/", (req, res) => {
    res.json({ message: "Gym Backend is running!" });
});

// Only listen if not in a serverless environment
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(process.env.PORT || 4001, () => {
        console.log(`Server listening at port ${process.env.PORT || 4001}`);
    });
}

export default app;
