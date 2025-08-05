"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MetadataSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    description: { type: String },
    image: { type: String }
});
exports.MetadataModel = mongoose_1.default.model("metadatas", MetadataSchema);
//# sourceMappingURL=db.js.map