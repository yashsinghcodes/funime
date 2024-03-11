import InputBox from "@/components/input";
import Header from "@/components/header";

export default async function Home() {

    // const respone = await getEmbedding('https://gogoanime3.co/category/one-punch-man');
    //console.log(respone)
    return (
        <div className="flex h-screen w-full flex-col">
            <Header />
            <div className="flex flex-1 flex-col items-center justify-center mt-[-8%]">
                <h1 className="text-center text-6xl font-bold bg-clip-text">
                    Watch Your Faviourt Anime<br />
                    <div className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">With Friends</div>
                </h1>
                <InputBox />
            </div>
        </div>
    );
}
