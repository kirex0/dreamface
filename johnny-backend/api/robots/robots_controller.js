import Robot from './robot_data_model.js';
import { HttpStatusCode } from 'axios';

export async function getRobots(req, res){
    try{
        const robots = await Robot.find({}).exec();
        return res.status(HttpStatusCode.Ok).json(robots);
    } catch (error) {
        return res.sendStatus(HttpStatusCode.InternalServerError);
    }
}

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