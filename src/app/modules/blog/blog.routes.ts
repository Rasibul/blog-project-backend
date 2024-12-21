import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
import { blogController } from './blog.controller';
import authenticateUser from '../../middlewares/authenticate';
import isAdmin from '../../middlewares/isAdmin';



const router = express.Router();


router.post('/blogs', authenticateUser, validateRequest(blogValidation.blogValidationSchema), blogController.createBlogPost);
router.put('/blogs/:id', authenticateUser, validateRequest(blogValidation.blogValidationSchema), blogController.updateBlog);
router.delete('/blogs/:id', authenticateUser, blogController.deleteBlog);
router.get('/blogs', blogController.fetchBlogs);
router.patch('/admin/users/:userId/block', authenticateUser, isAdmin, blogController.blockUserController);
router.delete('/admin/blogs/:id', authenticateUser, isAdmin, blogController.deleteBlogController);


export const blogRoutes = router;