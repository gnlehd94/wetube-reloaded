import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("<h1>Home</h1>");
const handleJoin = (req, res) => res.send("<h1>Join</h1>");

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;