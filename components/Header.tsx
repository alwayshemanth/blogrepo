"use client"

import searchBar from "@/actions/searchBarActions"
import { useState } from "react"

export default function Header() : any {
    const [searchField, setSearchField] = useState("")

    function onChangeTextField(event:any) {
        setSearchField(event.target.value)
    }

    async function handler(event :any) {
        event.preventDefault()
        await searchBar(searchField)
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div>
                    <h1 className="max-w-md mx-auto pt-5"> my blogs </h1>
                    <form className="max-w-md mx-auto pt-3" onSubmit={handler}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                onChange={onChangeTextField}
                                type="search"
                                id="default-search"
                                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="search blogs.. "
                                required
                            />
                            
                             
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}