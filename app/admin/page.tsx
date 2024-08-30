"use client"

import addNewBlog from "@/actions/adminActions"
import { useState } from "react"

export default function BlogForm() {
    const [blogTitle, setBlogTitle] = useState("")
    const [blogDescription, setBlogDescription] = useState("")
    const [blogPostContent, setBlogPostContent] = useState("")
    const [blogPostImageUrl, setBlogPostImageUrl] = useState("") 

    function onChangeTitle(event: any) {
        setBlogTitle(event.target.value)
    }

    function onChangeDescription(event: any) {
        setBlogDescription(event.target.value)
    }

    function onChangePostContent(event: any) {
        setBlogPostContent(event.target.value)
    }

    function onChangeImageUrl(event: any) {
        setBlogPostImageUrl(event.target.value)
    }

    async function handler(event: any) {
        event.preventDefault()
        await addNewBlog(blogTitle, blogDescription, blogPostContent, blogPostImageUrl)
        console.log("Blog Added into database")
    }

    return (
        <div>
            <form onSubmit={handler}>
                <input onChange={onChangeTitle} placeholder="blog title" value={blogTitle} />
                <br />
                <input onChange={onChangeDescription} placeholder="blog description" value={blogDescription} />
                <br/>
                <input onChange={onChangePostContent} placeholder="blog post content" value={blogPostContent} />
                <br/>
                <input onChange={onChangeImageUrl} placeholder="blog image url" value={blogPostImageUrl} />
                <br/>
                <button type="submit">Create Blog</button>
            </form>
        </div>
    )
}
