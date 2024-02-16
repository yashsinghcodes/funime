import { getEmbedding, Session } from "@/lib/api";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
    const param: string = await req.text()
    const id: number = Date.now()

    const values: Session = await getEmbedding(param, id.toString())
    console.log('hit')
    await prisma.vM.create({
        data: {
            id: id.toString(),
            session_id: values.session_id,
            embed_url: values.embed_url,
            admin_token: values.admin_token,
        }
    })
    return NextResponse.json(values)
}
