// @ts-ignore
import express = require ("express")
import {Application, json} from "express";
import {UserRouter} from "./routers/UserRouter";




const app: Application  = express();
app.use(json());
app.use("/api/", UserRouter);
app.listen(8080, () =>{

    console.log("Connected")
})

