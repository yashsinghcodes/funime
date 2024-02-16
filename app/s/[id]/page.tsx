import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {

    const value = await prisma.vM.findMany({
        where: {
            session_id: {
                contains: params.id,
            },
        },
    });

    const link = value[0].embed_url

    return (
        <div className="h-screen justify-center items-center w-screen">
            <iframe src={link} className="w-screen h-screen" width={720} height={720}></iframe>
        </div>
    )
}
