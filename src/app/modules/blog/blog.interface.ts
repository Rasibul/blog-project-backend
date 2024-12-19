import mongoose from "mongoose";

export interface TBlog {
    title: string;
    content: string;
    author: mongoose.Schema.Types.ObjectId;
    isPublished: boolean;
}