import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <div className="border-black py-4">
            <div className="text-xl container font-bold text-[#a788ff] flex flex-row justify-between">
                <h1 className="tracking-wide font-extrabold text-2xl animate-text bg-gradient-to-r from-[#a788ff] to-[#9733EE] bg-clip-text text-transparent font-sans">funime</h1>
                <Button variant="outline">Explore Hyperbeam</Button>
            </div>
        </div>

    )
}
