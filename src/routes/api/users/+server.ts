import { connectToDatabase } from "../mongo";

export async function GET( {url}: {url: URL} ) {
    const collection = (await connectToDatabase()).collection(process.env.MONGODB_USERS ?? "");
    const username = url.searchParams.get('username') ?? "";
    let users = null;
    if (username) {
        users = await collection.find({username}).toArray();
    } else {
        const projection = {password: 0};
        users = await collection.find().project(projection).toArray();
    }
    return new Response(JSON.stringify(users), {
        headers: {'Content-type': 'application/json'},
        status: 200,
    });
}


export async function POST( {request}: {request: any} ) {
    const collection = (await connectToDatabase()).collection(process.env.MONGODB_USERS ?? "");
    const {newUser} = await request.json();
    return await collection.insertOne(newUser);
}