import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { userModel } from "../user/user.model";
import { TBlog } from "./blog.interface";
import { blogModel } from "./blog.model";

const createBlog = async (blogData: Partial<TBlog>) => {
    return await blogModel.create(blogData);
};

const findBlogById = async (blogId: string) => {
    return blogModel.findById(blogId);

}
const updateBlogById = async (blogId: string, updateData: { title?: string; content?: string }) => {
    return blogModel.findByIdAndUpdate(blogId, updateData, { new: true }).populate('author', 'name email');
}

const deleteBlogById = async (blogId: string) => {
    return blogModel.findByIdAndDelete(blogId);
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllBlogs = async (filters: any, sort: any) => {
    const { search, filter } = filters;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    // Search by title or content
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { content: { $regex: search, $options: 'i' } },
        ];
    }
    if (filter) {
        query.author = filter;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sortConfig: any = {};
    if (sort.sortBy) {
        sortConfig[sort.sortBy] = sort.sortOrder === 'desc' ? -1 : 1;
    } else {
        sortConfig.createdAt = -1;
    }

    return blogModel.find(query).populate('author', 'name email').sort(sortConfig);
};

const blockUser = async (userId: string) => {
    const user = await userModel.findById(userId);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }
    user.isBlocked = true;
    await user.save();
    return user;
}

const deleteBlog = async (blogId: string) => {
    const blog = await blogModel.findByIdAndDelete(blogId);
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }
};


export const blogService = {
    createBlog,
    updateBlogById,
    findBlogById,
    deleteBlogById,
    getAllBlogs,
    blockUser,
    deleteBlog
}