import httpStatus from "http-status";
import catchAsync from "../../utilitis/catchAsync";
import sendResponse from "../../utilitis/sendResponse";
import { blogService } from "./blog.service";
import { blogModel } from "./blog.model";

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

export const blogController = {
    createBlogPost,
};