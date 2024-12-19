import { TBlog } from "./blog.interface";
import { blogModel } from "./blog.model";

const createBlog = async (blogData: Partial<TBlog>) => {
    return await blogModel.create(blogData);
};

export const blogService = {
    createBlog,
}