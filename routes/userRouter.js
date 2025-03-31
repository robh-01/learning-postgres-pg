import { Router } from "express";
const userRouter = Router();

import * as userController from "../controllers/userController.js";

userRouter.get("/", userController.userListGet);

userRouter.get("/new", userController.userAddGet);
userRouter.post("/new", userController.userAddPost);
userRouter.get("/delete", userController.deleteAllUserGet);

export default userRouter;
