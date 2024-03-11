import { getEmbedding, Session } from "@/lib/api";
import { NextResponse } from "next/server";
import MakeQuery from "@/lib/db";


export async function POST(req: Request) {
    const param: string = await req.text()
    const id: number = Date.now()

    const values: Session = await getEmbedding(param, id.toString())

    MakeQuery({
        query: "INSERT INTO VM(id, session_id, embed_url, admin_token) VALUES(?, ?, ?, ?)",
        values: [id.toString(), values.session_id, values.embed_url, values.admin_token]
    });

    return NextResponse.json(values)
}
