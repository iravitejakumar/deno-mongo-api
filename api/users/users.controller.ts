import { User } from './users.model.ts';
import db from '../../db/database.ts';

const client = db.getDatabase;
const users = client.collection("users");

const createUser = async ({ request, response }: { request: any, response: any }) => {
    const user = await request.body();
    const createdUser = await users.insertOne(new User(user.value));
    if (createdUser) {
        response.status = 200;
        response.body = {
            success: true,
            data: createdUser
        }
    }
};

const getUsers = async ({ response }: { response: any }) => {
    const usersList = await users.find();
    if (usersList) {
        response.status = 200;
        response.body = {
            success: true,
            data: usersList
        }
    }
};

const getUser = async ({ params, response }: { params: any, response: any }) => {
    console.log(params);
    const userId = params.id;
    try {
        const user = await users.findOne({ _id: { "$oid": userId } });
        if (user) {
            response.status = 200;
            response.body = {
                success: true,
                data: user
            }
        } else {
            response.status = 400;
            response.body = {
                success: false,
                msg: "User Not Found"
            }
        }
    } catch (e) {
        response.body = { msg: e };
    }
}

const deleteUser = async ({ params, response }: { params: any, response: any }) => {
    const userId = params.id;
    const deletedUser = await users.deleteOne({ _id: { "$oid": userId } });
    if (deletedUser) {
        response.status = 204;
        response.body = {
            success: true,
            message: 'User deleted'
        }
    }
}

export default {
    createUser,
    getUser,
    getUsers,
    deleteUser
};

