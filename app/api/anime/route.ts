import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const value = await request.text()
    if (value.length > 3) {
        const results = await fetch(`https://api1.anime-dex.workers.dev/search/${value}`,
            {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
        if (results.status == 200) {
            const r = await results.json()
            return NextResponse.json(r)
        }
    }
    return NextResponse.json({ results: [] })
}


