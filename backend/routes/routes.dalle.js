import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router=express.Router();

const openAi=new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.route("/").get((req, res)=> {
    return res.status(200).send("Welcome to DALL-E routes");
});

router.route("/").post(async (req, res)=> {
    try{
        const {prompt}=req.body;
        console.log("Received prompt:", prompt);

        const response=await openAi.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json"
        });
        console.log("Response:", response);

        const image=response.data[0].b64_json;
        console.log(image);

        return res.status(200).json({
            photo: image
        });
    }catch(error){
        console.log(error.message);
        return res.status(400).json({message: "Something went wrong"});
    }
})

export default router;