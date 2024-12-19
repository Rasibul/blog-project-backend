import httpStatus from "http-status";
import catchAsync from "../../utilitis/catchAsync";
import sendResponse from "../../utilitis/sendResponse";
import { blogService } from "./blog.service";
import { blogModel } from "./blog.model";
import AppError from "../../errors/AppError";

const createBlogPost = catchAsync(async (req, res) => {
    const { title, content } = req.body;
    const author = req?.user?.id;
    const blog = await blogService.createBlog({ title, content, author });
    const populatedBlog = await blogModel.findById(blog._id).populate('author', 'name email');

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog created successfully',
        data: populatedBlog,
    });
});


const updateBlog = catchAsync(async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id;
    const updateData = req.body;

    // Find the blog
    const blog = await blogService.findBlogById(blogId);
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }

    // Ensure the blog belongs to the logged-in user
    if (blog.author.toString() !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, 'You can only update your own blog');
    }

    // Update the blog
    const updatedBlog = await blogService.updateBlogById(blogId, updateData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog updated successfully',
        data: updatedBlog,
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id; // Logged-in user ID

    // Find the blog
    const blog = await blogService.findBlogById(blogId);
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }

    // Ensure the blog belongs to the logged-in user
    if (blog.author.toString() !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, 'You can only delete your own blog');
    }

    // Delete the blog
    await blogService.deleteBlogById(blogId);

    res.status(200).json({
        success: true,
        message: 'Blog deleted successfully',
    });
});

export const blogController = {
    createBlogPost,
    updateBlog,
    deleteBlog
};