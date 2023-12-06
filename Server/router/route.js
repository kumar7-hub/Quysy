import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/questions')
    .get(controller.getQuestions) /** GET request */
    .post(controller.insertQuestions) /** POST request */
    .delete(controller.dropQuestions) /** DELETE request */

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult)

export default router;