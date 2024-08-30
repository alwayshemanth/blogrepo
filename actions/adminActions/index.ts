"use server"

import prisma from "@/db"
import { addnewblogSchema } from "@/zodSchemas"

export default async function addNewBlog(blogTitle : string ,blogDescription :string,blogPostContent :string,blogPostImageUrl :string) {
    const schema = addnewblogSchema()
    const validateInputs = schema.safeParse({
            blogHeading:blogTitle,
            blogDescription:blogDescription,
            entireBlog:blogPostContent,
            imageUrl:blogPostImageUrl
    })

    if (!validateInputs.success) {
        console.log("Error in input validation")
    }

    const addBlogLogic = await prisma.blogs.create({
        data : {
            blogHeading:blogTitle,
            blogDescription:blogDescription,
            entireBlog:blogPostContent,
            imageUrl:blogPostImageUrl
        }
    })
    return (
        "Blog Created"
    )
}
