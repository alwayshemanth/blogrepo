import { Footer } from "./Footer"
import { LatestBlog } from "./LastestBlog"
import { MoreBlogs } from "./MoreBlogs"
import { RecentBlogs } from "./RecentBlogs"

export default function Blogs() {
    return (
        <div className="pl-12 pr-12 pt-9 pb-9">
            <div className="flex flex-row space-y-2"> 
                <LatestBlog/>
                <RecentBlogs/>
            </div>

            <MoreBlogs/>
            <Footer/>
            
        </div>

    )
}