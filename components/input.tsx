"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { makeSearch } from "@/lib/api"


export default function InputBox() {

    const [options, setOptions] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function handelInput(value: string) {
        const search = await makeSearch(value)
        setOptions(search['results'].slice(0, 4))
    }

    async function handelClick(link: string) {
        setLoading(true)
        const value = await fetch('/api/build/',
            {
                method: 'POST',
                body: link
            })
        const result = await value.json()
        router.push('/s/' + result['session_id'])
    }

    return (
        <div className="w-full items-center justify-center flex flex-col"   >
            {!loading ? (
                <div className="w-full items-center justify-center flex flex-col" >
                    <input className="mt-10 p-4 rounded-3xl w-1/3 text-left text-black pl-6 font-semibold border-purple-900" placeholder="Search" onChange={e => handelInput(e.target.value)} />
                    {
                        options.map((option) => {
                            return (
                                <button className="flex px-4 py-2 space-x-4 rounded-lg w-1/3 h-fit mt-2 hover:bg-white hover:text-black leading-none tracking-tight" onClick={() => handelClick(option['link'])} key={option['id']}>
                                    <img
                                        alt="Cover"
                                        className="rounded-lg"
                                        height={40}
                                        src={option["img"]}
                                        style={{
                                            aspectRatio: "40/40",
                                            objectFit: "cover",
                                        }}
                                        width={40}
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-md">{option["title"]}</span>
                                        <p className="text-sm text-gray-500">{option['releaseDate']}</p>
                                    </div>
                                </button>
                            )
                        })
                    }
                </div >
            ) :
                (
                    <div className="w-full items-center justify-center flex flex-col">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-white mt-7" />
                    </div>
                )
            }
        </div>
    )
}
