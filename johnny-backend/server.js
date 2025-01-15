import 'dotenv/config';
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';  // Add this import

// importing routes for the robot data
import robotRoutes from './api/robots/robots_routes.js';
import seedDatabase from './api/seed/seed.js';

const app = express();

// setup to handle env ports instead of hard coding values
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:80', 'http://localhost'], // Add your frontend URLs
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));  // Add CORS middleware before other middleware
app.use(json());

// MongoDB Connection setup using ENV, since this will be ran locally only, included the docker mongo URI
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/johnny-db';

// Connecting to mongo
async function connectToMongoDB() {
    try {
        await connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

connectToMongoDB();

await seedDatabase();

// Routes
app.use('/robots', robotRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});