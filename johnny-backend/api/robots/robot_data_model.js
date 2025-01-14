/*
Example schema for robots:
o {
o "id": "1",
o "name": "Ryan1",
o "status": "Active",
o "lastUpdated": "2025-01-12T14:30:00Z",
o "firmwareVersion": "1.2.0"
}*/

import mongoose, { Schema } from 'mongoose';

let RobotData = new Schema({
 
    name: {
        type: String,
        required: true,
        unique: true,
     },
     status:{
        type: String,
        default: 'Inactive',
        enum: {
            values: ['Active', 'Inactive', 'Error'],
            message: '{VALUE} is not supported. The status can be Active, Inactive, Error. Please use on of these values.',
        },
        required: true,
     },
     lastUpdated: {
        type: Date,
        required: true,
     },
     firmwareVersion: {
        type: String,
        required: true,
     },
});

export default mongoose.model('Robots', RobotData)
