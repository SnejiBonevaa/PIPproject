import { Router} from "express";
import *as userController from  "../Controllers/UserControllers"

export const UserRouter = Router();
UserRouter.get("/user/:id", userController.getUser)
UserRouter.post("/user", userController.createUser)
UserRouter.get("/users", userController.getUser)
UserRouter.get("/login", userController.login)

