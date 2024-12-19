import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import authenticateUser from '../../middlewares/authenticate';



const router = express.Router();


router.post('/', authenticateUser, validateRequest(blogValidation.blogValidationSchema), blogController.createBlogPost);
router.put('/:id', authenticateUser, validateRequest(blogValidation.blogValidationSchema), blogController.updateBlog);





export const blogRoutes = router;