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

export const blogService = {
    createBlog,
    updateBlogById,
    findBlogById,
    deleteBlogById,
    getAllBlogs
}