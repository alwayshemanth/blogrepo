import prisma from "@/db"

async function getBlogById(blogId: any) {
    const fetchBlogById = await prisma.blogs.findFirst({
        where : {
            id : blogId
        },
        select: {
            imageUrl: true,
            entireBlog:true,
            blogDescription:true,
            blogHeading:true
        }
    })

    return fetchBlogById;
}

export default async function(props : any){
    const {params} = props 
    const {blogId} = params
    const blogById = await getBlogById(parseInt(blogId)) 
    
    
    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{blogById?.blogHeading}</h1>
            <img src={blogById?.imageUrl}
                alt="Blog Image"
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">{blogById?.blogDescription}</p>
            <p className="text-gray-600 leading-relaxed">{blogById?.entireBlog}</p>
        </div>

    )
}