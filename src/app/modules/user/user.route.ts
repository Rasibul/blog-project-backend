import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';


const router = express.Router();

// User Registration
router.post('/', validateRequest(userValidation.userValidaitionSchema), userController.registerUser);



export const userRoutes = router;