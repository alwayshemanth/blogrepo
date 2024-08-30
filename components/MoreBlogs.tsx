import prisma from "@/db";
import Link from "next/link";

async function moreBlogs() {
    const fetchMoreBlogs = await prisma.blogs.findMany({
        skip: 4,
        orderBy: {
            id: "desc"
        },
        select : {
            id:true,
            imageUrl : true,
            blogDescription:true,
            blogHeading:true
        }

    })
    return fetchMoreBlogs;
}

export async function MoreBlogs(props :any) {
    const MoreBlogs = await moreBlogs();

    return (

        <div className="pt-12 pb-12">
            <h1 className="font-bold text-lg"> More Blogs </h1>
                <div className="grid grid-cols-3 gap-12 pt-8">
                    {MoreBlogs.map(function(eachItem) {

                        return (
                            <Link href = {`blog/${eachItem.id}`}>
                                <div className="flex flex-col w-full h-full">
                                    <img className="h-48 rounded-lg" src = {eachItem.imageUrl}/>
                                    <h1> {eachItem.blogHeading} </h1>
                                    <p>{ eachItem.blogDescription}</p>
                                </div>
                            </Link>

                        )
                        
                    })}
                </div>
        </div>
        
    )
}