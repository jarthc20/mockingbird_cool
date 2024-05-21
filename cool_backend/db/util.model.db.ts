import mongoose from "mongoose";


const DB_URL = "mongodb://127.0.0.1:27017/mystationsdb"

export const initMongoConnect = async () => {
    await mongoose.connect(DB_URL);
}