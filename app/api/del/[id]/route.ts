import { NextResponse } from "next/server";
import MakeQuery from "@/lib/db";


export default async function GET(request: Request, { params }: { params: { id: string } }) {
    MakeQuery({
        query: "DELET FROM VM WHERE `id` = ?;",
        values: [params.id]
    })

    return NextResponse.json({ status: "OK" })
}
