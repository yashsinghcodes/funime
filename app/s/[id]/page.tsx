import Screen from "@/components/screen";
import MakeQuery from "@/lib/db";

type DataTuple = [{ embed_url: string }];


export default async function Page({ params }: { params: { id: string } }) {

    await MakeQuery({
        query: "START TRANSACTION;",
        values: []
    })

    await MakeQuery({
        query: "SET TRANSACTION ISOLATION LEVEL READ COMMITTED;",
        values: []
    })

    const [value, _] = await MakeQuery({
        query: "SELECT embed_url FROM `VM` WHERE `session_id` = ? LIMIT 1;",
        values: [params.id]
    });

    await MakeQuery({
        query: "COMMIT;",
        values: []
    })


    const link = (value as DataTuple)[0].embed_url;

    return (
        <div className="flex justify-center">
            <Screen link={link}></Screen>
        </div>
    )
}
