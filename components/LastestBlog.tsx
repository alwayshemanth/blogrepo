import prisma from "@/db";
import Link from "next/link";

async function getLatestBlog() {
    const databasefetch = await prisma.blogs.findFirst({
        orderBy: {
            id: "desc"
        },
        select : {
            id:true,
            imageUrl : true,
            entireBlog : true,
            blogHeading: true,
            blogDescription : true
        }
    })
    return databasefetch;

}

export async function LatestBlog() {
    const fetchLatestBlog = await getLatestBlog();

    return (
        <div className="w-1/2 pr-5 h-full flex flex-col justify-between pt-2.5">
            <Link href = {`blog/${fetchLatestBlog?.id}`}>
            <div>
                <img className="h-[300px] w-[90%] rounded-xl hover:brightness-110" src={fetchLatestBlog?.imageUrl} />
                <div className="pt-4 w-11/12">
                    <h1 className="font-bold hover:underline"> {fetchLatestBlog?.blogHeading} </h1>
                    <br />
                    <h1 className="font-normal pt-4"> {fetchLatestBlog?.blogDescription}
                    </h1>
                </div>
            </div>
            </Link>
        </div>
    )
}