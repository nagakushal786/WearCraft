import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes/routes.dalle.js";

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use("/api/v1/dalle", router);

app.get("/", (req, res)=> {
    return res.status(200).send("Welcome to DALL-E");
});

app.listen(8080, ()=> {
    console.log("Server listening at 8080");
});