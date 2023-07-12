import express from "express";

const userRouter = express.Router();

const handleEdit = (req, res) => res.send("<h1>Edit User</h1>");
const handleDelete = (req, res) => res.send("<h1>Delete User</h1>");

userRouter.get("/edit", handleEdit);
userRouter.get("/delete", handleDelete);


export default userRouter;