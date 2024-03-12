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
import { usePathname, useRouter } from "next/navigation";




export default function Screen(props: {
    link: string,
}) {

    const handle = useFullScreenHandle();
    const pathname = usePathname()
    const router = useRouter()
    function poweroff() {
        console.log(pathname)
        fetch(`/api/del/${pathname.slice(3)}`)
        router.push('/')
    }

    return (
        <Card className="w-[96%] flex flex-col">
            <CardHeader className="flex flex-row justify-between space-y-0 p-2">
                <Button variant="destructive" onClick={poweroff}>
                    <Power className="h-4 w-4" />
                </Button>
                <Button variant="ghost" onClick={handle.enter}>
                    <Maximize className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="p-0">
                <FullScreen handle={handle}>
                    <iframe src={props.link} className="w-full h-[100vh]"></iframe>
                </FullScreen>
            </CardContent>
        </Card>
    )
}
