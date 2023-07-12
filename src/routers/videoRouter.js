import express from "express";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("<h1>Watch Video</h1>");
const handleEdit = (req, res) => res.send("<h1>Edit Video</h1>");

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);


export default videoRouter;