import * as mongoose from "mongoose";
import {IStation} from "../src/common/IStation";


export const StationSchema = new mongoose.Schema<IStation>(
    {
        kategorie: String,
        name: String,
        temperaturen: [Number]
    }
);

export const Station = mongoose.model('Station', StationSchema);