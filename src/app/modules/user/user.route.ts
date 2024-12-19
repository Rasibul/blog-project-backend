import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';


const router = express.Router();

// User Registration
router.post('/register', validateRequest(userValidation.userValidaitionSchema), userController.registerUser);

// User Login
router.post('/login', validateRequest(userValidation.loginValidationSchema), userController.loginUser);



export const userRoutes = router;