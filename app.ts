// @ts-ignore

import {Application} from "express";
import {Request} from "express";
import {Response} from "express";
import express = require ("express")
import {User} from "./types/User";
import {LoginQueryParams} from "./types/LoginQueryParams";


const app: Application  = express()


app.get("/users", (req:Request, res:Response) => {
    let users: User[] = [
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
    res.send(users)

})

app.get("/login", (req: Request, res: Response) => {
        const queryParams: LoginQueryParams = req.query;
        if (!queryParams.username) res.send ({status: 400, message: "Invalid username"})
        if (!queryParams.password) res.send ({status: 200, message: "Invalid password"})

        res.send({
            status: 200,
            autoToken: "123-abd-463-acd"


        })
    })

app.listen(8080, () =>{

    console.log("Connected")
})