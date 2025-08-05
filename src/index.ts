import express from 'express';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import { MetadataModel } from './db';
import cors from 'cors'
configDotenv();

const PORT = 3000;
const app = express(); 
app.use(cors()); 
app.use(express.json());

app.get("/",async (req, res)=>{
    res.json({
        message: "Give a post request to /metadata endpoint and give name, symbol, description, image", 
    })
})

interface metadataInterface{
    name: string, 
    symbol: string, 
    description: string, 
    image: string
}
app.post("/metadata",async (req, res)=>{
    const {name, symbol, description, image}: metadataInterface = req.body;
    try{
         const data = await MetadataModel.create({
            name: name, 
            symbol: symbol ,
            description: description, 
            image: image       
        })
        res.json({
            message: "Metadata Created successfully",
            metadataurl: process.env.BACKEND_URL! + "metadata/" + data._id + ".json"

        })
    }
    catch(e){
        res.status(500).json({
            message: "Some error creating metadata", 
            error: e
        })
    }
})

app.get("/metadata/:metadataid.json", async (req, res) => {
    try {
        const { metadataid } = req.params;
        const metadata = await MetadataModel.findById(metadataid);
        
        if (!metadata) {
            return res.status(404).json({
                message: "Metadata not found"
            });
        }

        // Return only the metadata fields (exclude MongoDB _id and __v)
        res.json({
            name: metadata.name,
            symbol: metadata.symbol,
            description: metadata.description,
            image: metadata.image
        });
    } catch (e) {
        res.status(500).json({
            message: "Error fetching metadata",
            error: e
        });
    }
});

async function main(){
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    app.listen(PORT, ()=>{
        console.log("app is listening to port "+PORT)
    })   
}

main();
