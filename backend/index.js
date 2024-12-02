import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import router from "./routes/routes.dalle.js";

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json({limit: "50mb"}));

app.use("/api/v1/dalle", router);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(8080, ()=> {
    console.log("Server listening at 8080");
});