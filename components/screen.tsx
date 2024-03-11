"use client"

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



export default function Screen(props: {
    link: string,
}) {

    const handle = useFullScreenHandle();

    return (
        <Card className="w-[96%] flex flex-col">
            <CardHeader>
            </CardHeader>
            <CardContent>
                <FullScreen handle={handle}>
                    <iframe src={props.link} className="w-full h-screen" width={720} height={1280}></iframe>
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
    )
}
