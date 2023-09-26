import mongoose from "mongoose";

console.log(process.env.COOKIE_SECRET, process.env.DB_URL);
mongoose.connect(process.env.DB_URL
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB 💻");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

