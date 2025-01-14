import { Router } from 'express';
import * as controller from '../robots/robots_controller.js';

let router = Router();

router.route('/')
    .get(controller.getRobots)
    .post(controller.createRobot);

router.route('/:id')
    .get(controller.getRobotById);

export default router;