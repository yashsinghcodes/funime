"use client"
import Header from "@/components/header";
import { PrismaClient } from "@prisma/client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Maximize } from "lucide-react";
import { Power } from "lucide-react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { handler } from "tailwindcss-animate";

const prisma = new PrismaClient();

// TODO: MAKE different component for the card thing and make it so client component.
// Refactor the code one more time clean it


export default function Page({ params }: { params: { id: string } }) {
    /*
    const value = await prisma.vM.findMany({
        where: {
            session_id: {
                contains: params.id,
            },
        },
    });
    const link = value[0].embed_url
*/

    const handle = useFullScreenHandle();
    return (
        <div className="h-screen justify-center items-center">
            <Header />
            <div className="flex justify-center">
                <Card className="w-[96%] flex flex-col">
                    <CardHeader>
                    </CardHeader>
                    <CardContent>
                        <FullScreen handle={handle}>
                            <iframe src={""} className="w-full h-full"></iframe>
                        </FullScreen>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="destructive">
                            <Power className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" onClick={handle.enter}>
                            <Maximize className="h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
