import mysql from 'mysql2/promise'

interface QueryData {
    query: string,
    values: any[],
};

export default async function MakeQuery(vals: QueryData) {
    const db = await mysql.createConnection(process.env.DATABASE_URL as string);

    try {
        const results = await db.query(vals.query, vals.values);
        await db.end();
        return results;
    } catch (err) {
        console.log(err)
        return [];
    }
}
