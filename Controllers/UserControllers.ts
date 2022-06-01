import {Request, Response} from "express";
import {User} from "../types/User";
import {LoginQueryParams} from "../types/LoginQueryParams";
import {UserModel} from "../models/UserModel";
import {CreateUserRequest} from "../types/CreateUserRequest";

//export let login = undefined;//


export const getUser = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const userModel = new UserModel();
    const user = await UserModel.getUserById(id);

    // @ts-ignore
    if (!user) {
        return res.send({
            status: 404,
            message: "User not found!"
        })

    }
    return res.send(user);
}

export const createUser = async (req: Request, res: Response) => {
    const userModel = new UserModel();
    const createUserData: CreateUserRequest = req.body;
    if (!createUserData.username) {
        return res.send({
            status: 400,
            message: "Username hasn't been provided"

        })
    }

        if (!createUserData.password) {
            return res.send({
                status: 400,
                message: "Password hasn't been provided"

            })
        }
        const users = await userModel.getAll();
        // @ts-ignore
    const user: User = {
            id: userModel.getNewId(users),
            username: createUserData.username,
            password: createUserData.password,

        }
        //console.log({user});//
        users.push(user);
        await userModel.updateUserList(users)
        res.send({
            status: 200,
            message: "User added successfully "
        })
    }

    /*let user: User[] = [
        {
            id: 1,
            username: "rali",
            password: "1"
        },
        {
            id: 2,
            username: "hrisi",
            password: "2"
        },
        {
            id: 3,
            username: "sneji",
            password: "3"
        }

    ]
    res.send(user)

}
*/

export const getUsers = async (req:Request, res:Response) => {
    const userModel = new UserModel();
    const users = await userModel.getAll();
    return res.send(users)

}

export const login = (req: Request, res: Response) => {
    const queryParams: LoginQueryParams = req.query;
    if (!queryParams.username) res.send ({status: 400, message: "Invalid username"})
    if (!queryParams.password) res.send ({status: 300, message: "Invalid password"})

        return res.send({
        status: 200,
        message: "Login successful"

    })
}