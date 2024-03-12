import { getEmbedding, Session } from "@/lib/api";
import { NextResponse } from "next/server";
import MakeQuery from "@/lib/db";
import rateLimiterMiddleware from "@/lib/ratelimiter";

export async function POST(req: Request) {
    /*
    const ip = req.headers.get('x-real-ip') as string;


    if (!rateLimiterMiddleware(ip)) {
        console.log('we are here')
        return NextResponse.json({});
    }
*/
    const param: string = await req.text()
    const id: number = Date.now()

    const values: Session = await getEmbedding(param, id.toString())

    await MakeQuery({
        query: "BEGIN",
        values: []
    })

    await MakeQuery({
        query: "INSERT INTO VM(id, session_id, embed_url, admin_token) VALUES(?, ?, ?, ?)",
        values: [id.toString(), values.session_id, values.embed_url, values.admin_token]
    });

    await MakeQuery({
        query: "COMMIT",
        values: []
    })

    return NextResponse.json(values)
}
