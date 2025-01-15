import Robot from '../robots/robot_data_model.js';

export default async function seedDatabase(){

    // import the robots from the seed data json file
    const robots = require('../seed/robot_data.json');

    try{
        // attempt to insert the json seed data into mongo
        await Robot.insertMany(robots);
        
        console.log('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting buildings:', err);
    }

}