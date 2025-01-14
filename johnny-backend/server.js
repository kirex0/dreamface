import 'dotenv/config';
import express, { json } from 'express';
import { connect } from 'mongoose';

// importing routes for the robot data
import robotRoutes from './api/robots/robots_routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:27017/johnny-db';

async function connectToMongoDB() {
    try {
        await connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

connectToMongoDB();

// Routes
app.use('/robots', robotRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
