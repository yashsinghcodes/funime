import { getEmbedding } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import InputBox from "@/components/input";
import logo from "@/public/logo.png"


export default async function Home() {

    // const respone = await getEmbedding('https://gogoanime3.co/category/one-punch-man');
    //console.log(respone)
    return (
        <div className="h-full w-screen">
            <div className="h-0">
                <Image src={logo} width={210} height={0} alt="hyperbeam" />
            </div>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-center text-6xl font-bold bg-clip-text">
                    Watch Your Faviourt Anime<br />
                    <div className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">With Friends</div>
                </h1>
                <InputBox />
            </div>
        </div>
    );
}
