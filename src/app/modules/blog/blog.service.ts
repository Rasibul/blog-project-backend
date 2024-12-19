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

export const blogService = {
    createBlog,
    updateBlogById,
    findBlogById,
    deleteBlogById
}