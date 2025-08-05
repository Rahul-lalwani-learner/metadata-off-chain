"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.configDotenv)();
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    res.json({
        message: "Give a post request to /metadata endpoint and give name, symbol, description, image",
    });
});
app.post("/metadata", async (req, res) => {
    const { name, symbol, description, image } = req.body;
    try {
        const data = await db_1.MetadataModel.create({
            name: name,
            symbol: symbol,
            description: description,
            image: image
        });
        res.json({
            message: "Metadata Created successfully",
            metadataurl: process.env.BACKEND_URL + "metadata/" + data._id + ".json"
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Some error creating metadata",
            error: e
        });
    }
});
app.get("/metadata/:metadataid.json", async (req, res) => {
    try {
        const { metadataid } = req.params;
        const metadata = await db_1.MetadataModel.findById(metadataid);
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
    }
    catch (e) {
        res.status(500).json({
            message: "Error fetching metadata",
            error: e
        });
    }
});
async function main() {
    await mongoose_1.default.connect(process.env.MONGO_CONNECTION_STRING);
    app.listen(PORT, () => {
        console.log("app is listening to port " + PORT);
    });
}
main();
//# sourceMappingURL=index.js.map