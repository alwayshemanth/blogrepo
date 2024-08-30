import prisma from "@/db";
import Link from "next/link";

async function getRecentBlogs() {
    const fetchrecentBlogsData = await prisma.blogs.findMany({
        skip:1,
        take: 3,
        orderBy: {
            id: "desc"
        },
        select : {
            id: true,
            imageUrl : true,
            blogHeading: true,
            blogDescription: true
        }
    })

    return fetchrecentBlogsData;
}

export async function RecentBlogs() {
    const RecentBlogs = await getRecentBlogs();


    return (
        <div className="flex flex-col w-1/2 h-full space-y-4">

            {RecentBlogs.map(function(eachBlog) {

                return (
                    <Link href = {`blog/${eachBlog.id}`}>
                        <div className="flex flex-row text-lg h-1/3 p-1">
                            <img className="h-44 w-[70%] pr-5 rounded-lg hover:brightness-110" src={eachBlog.imageUrl} />
                            <div className="pl-4">
                                <h1 className="font-bold hover:underline"> {eachBlog.blogHeading} </h1>
                                <br />
                                <p className="font-normal">
                                    {eachBlog.blogDescription}
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>
)}