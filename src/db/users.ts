import { FindCursor } from 'mongodb';
import db from './mongo'

const users = db.collection('users');

interface User {
    username: string;
    password: string;
}

export async function getUser(request: string) {
    const cursor = users.find({
        username: request,
    });
    const result = await cursor.next();
    if (result) {
        if (result.ok) {
            if (result.username) {
                return {
                    status: 200,
                    body: result,
                };
            }
            return {
                status: 404,
                body: "",
            }
        }
        return {
            status: 400,
        }
    }
}

export async function createUser(request: User) {

}

export async function authUser(request: User) {

}

export async function delUser(request: User) {

}