import Robot from './robot_data_model.js';
import { HttpStatusCode } from 'axios';

/**
 * Get all robots in the database
 * Returns an array of Robots
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * 
 * @returns {Promise<void>} - A promise that resolves with the array of Robots or an error.
 */
export async function getRobots(req, res){
    try{
        const robots = await Robot.find({}).exec();
        return res.status(HttpStatusCode.Ok).json(robots);
    } catch (error) {
        return res.sendStatus(HttpStatusCode.InternalServerError);
    }
}

/**
 * Gets a single robot based on the MongoDB _id
 * Returns a single robot object
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * 
 * @returns {Promise<void>} - A promist that resolves with a single Robot or an arror.
 */
export async function getRobotById(req, res){
    try{
        const robot = await Robot.findById(req.params.id);

        if(!robot){
            return res.sendStatus(HttpStatusCode.NotFound);
        }

        return res.status(HttpStatusCode.Ok).json(robot);
    } catch (error) {
        return res.sendStatus(HttpStatusCode.InternalServerError);
    }
}


/**
 * Get all robots in the database
 * Returns an array of Robots
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * 
 * @returns {Promise<void>} - A promise that resolves with the created Robot or an error message.
 */
export async function createRobot(req, res){
    const robot = new Robot({
        name: req.body.name,
        status: req.body.status,
        lastUpdated: req.body.lastUpdated,
        firmwareVersion: req.body.firmwareVersion
    });

    try{
        await robot.save();
        return res.status(HttpStatusCode.Created).json(robot);
    } catch (error) {
        return res.sendStatus(HttpStatusCode.InternalServerError);
    }
}