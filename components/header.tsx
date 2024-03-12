import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
        <div className="black py-4 flex flex-row">
            <div className="container flex flex-row justify-between">
                <Link href={"/"}>
                    <h1 className="tracking-wide font-extrabold text-2xl animate-text bg-gradient-to-r from-[#a788ff] to-[#9733EE] bg-clip-text text-transparent font-sans">funime</h1>
                </Link>
                <Link href={"https://watch.hyperbeam.com/"}>
                    <Button variant={"outline"} className="text-[#a788ff]">
                        Explore Hyperbeam
                    </Button>
                </Link>
            </div>
        </div>

    )
}
