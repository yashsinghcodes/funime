import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()

async function GET(request: Request, { params }: { params: { id: string } }) {
    prisma.vM.delete({
        where: {
            id: params.id
        }
    })
    return NextResponse.json({ status: "OK" })
}
