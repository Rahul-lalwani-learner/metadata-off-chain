import mongoose from "mongoose";

const MetadataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    description: { type: String },
    image: { type: String }
});

export const MetadataModel = mongoose.model("metadatas", MetadataSchema);