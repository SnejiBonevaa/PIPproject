

import {promises} from "fs";
import {User} from "../types/User";

export class UserModel {
    getNewId(users: User[]): number{
        return users[users.length - 1].id + 1;
    }
    async getAll(): Promise<User[]>{
        console.log(__dirname + "/db.json");
        const data = await promises.readFile(__dirname + "/db.json", "utf-8");
        return JSON.parse(data);
    }

    async getUserById(id: number): Promise<User | undefined>  {
        const data = await promises.readFile(__dirname + "/db.json", "utf-8");
        const formatedData = JSON.parse(data) as User[];
        return formatedData.find(user => user.id === id);
    }

    static async getUserById(id: number) {
        
    }

    async updateUserList(users: User[]): Promise<boolean> {
        await promises.writeFile(__dirname + "/db.json", JSON.stringify(users));
        return true;
    }
}

