import InputBox from "@/components/input";
import Header from "@/components/header";

export default async function Home() {

    return (
        <div className="flex h-screen w-full justify-center items-center">
            <div className="flex flex-col items-center justify-center mt-[-8%]">
                <h1 className="text-center text-6xl font-bold bg-clip-text">
                    Watch Your Favourite Anime<br />
                    <div className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">With Friends</div>
                </h1>
                <InputBox />
            </div>
        </div>
    );
}
