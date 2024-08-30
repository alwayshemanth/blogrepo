"use server"

import prisma from "@/db"

export default async function searchBar(searchField: any) {
    const fetchMatch = await prisma.blogs.findMany({
        where : {
            blogDescription : {
                contains: searchField
            }
        }

    })
    console.log(fetchMatch)
    return (
        fetchMatch
    )
}