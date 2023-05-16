import {MongoClient} from 'mongodb';
import {MONGODB_URI} from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

export function connectDB(): Promise<MongoClient> {
    console.log("Attempting connection...");
    return client.connect();
}

export default client.db();