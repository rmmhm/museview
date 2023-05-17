import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
    console.log("invalid URI");
}

export async function connectToDatabase() {
    console.log("attempting connection");
    const client = new MongoClient(process.env.MONGODB_URI ?? "");
    await client.connect();
    console.log("successful connection");
    return client.db(process.env.MONGODB_DB);
}



