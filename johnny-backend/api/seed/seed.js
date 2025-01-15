import mongoose from 'mongoose';
import Robot from '../robots/robot_data_model.js';
import dotenv from 'dotenv';

async function seedDatabase() {
    // Connect to MongoDB
    dotenv.config();

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        // Clear existing data
        await Robot.deleteMany({});

        // Seed data
        const robots = [
            {
              "name": "Ryan1",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan2",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan3",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan4",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan5",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan6",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan7",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan8",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan9",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan10",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan11",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan12",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan13",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan14",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan15",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan16",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan17",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan18",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan19",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan20",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan21",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan22",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan23",
              "status": "Error",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan24",
              "status": "Inactive",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            },
            {
              "name": "Ryan25",
              "status": "Active",
              "lastUpdated": "2025-01-12T14:30:00Z",
              "firmwareVersion": "1.2.0"
            }
        ];        

        // Insert the JSON seed data into MongoDB
        await Robot.insertMany(robots);
        
        console.log('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting robots:', err);
    }
}

export default seedDatabase;
