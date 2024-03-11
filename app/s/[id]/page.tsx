import Header from "@/components/header";
import { PrismaClient } from "@prisma/client"
import Screen from "@/components/screen";

// TODO: Remove Primsa and shift to raw SQL


const prisma = new PrismaClient();

export default async function Page({ params }: { params: { id: string } }) {

    const value = await prisma.vM.findMany({
        where: {
            session_id: {
                contains: params.id,
            },
        },
    });

    const link = value[0].embed_url;

    return (
        <div className="h-screen justify-center items-center">
            <Header />
            <div className="flex justify-center">
                <Screen link={link}></Screen>
            </div>
        </div>
    )
}
