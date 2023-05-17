import { connectToDatabase } from "../mongo";

export async function GET( {url} ) {
    const collection = (await connectToDatabase()).collection(process.env.MONGODB_USERS ?? "");
    const users = await collection.find().toArray();
    return new Response(JSON.stringify(users), {
        headers: {'Content-type': 'application/json'},
        status: 200,
    });
}