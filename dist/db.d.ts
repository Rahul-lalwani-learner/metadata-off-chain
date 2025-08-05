import mongoose from "mongoose";
export declare const MetadataModel: mongoose.Model<{
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    symbol: string;
    name: string;
    description?: string | null;
    image?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map