import { z } from "zod";

export function addnewblogSchema() {
    return (
        z.object({
            blogTitle: z.string().min(1, "Title is required"),
            blogDescription: z.string().min(1, "Description is required"),
            blogPostContent: z.string().min(1, "Content is required"),
            blogPostImageUrl: z.string().url("Invalid URL").optional()
        })
    )
}