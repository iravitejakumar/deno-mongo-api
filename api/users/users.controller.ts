import { User } from './users.model.ts';
import db from '../../db/database.ts';
import { Request, Response } from "https://deno.land/x/oak/mod.ts";

const client = db.getDatabase;
const users = client.collection("users");


const createUser = async ({ request, response }: any) => {
    const user = await request.body();
    response.body = await users.insertOne(new User(user.value));
};

const getUsers = async ({ response }: any) => {
    response.body = await users.find();
};

export default {
    getUsers,
    createUser
};

