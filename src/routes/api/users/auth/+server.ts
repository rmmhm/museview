import { connectToDatabase } from "../../mongo";

export async function GET( {url}: {url: URL} ) {
    const collection = (await connectToDatabase()).collection(process.env.MONGODB_USERS ?? "");
    const username = url.searchParams.get('username') ?? "";
    const password = url.searchParams.get('password') ?? ""; // hash here
    let auth = false;
    const user = await collection.find({username}).toArray();
    if (password === user[0].password) { // should be hashed in db
        auth = true;
    } 
    return new Response(JSON.stringify(auth), {
        headers: {'Content-type': 'application/json'},
        status: 200,
    });
}
