import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import authenticateUser from '../../middlewares/authenticate';



const router = express.Router();


router.post('/blogs', authenticateUser, validateRequest(blogValidation.blogValidationSchema), blogController.createBlogPost);





export const blogRoutes = router;