import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DATABASE;
function initDB() {
    mongoose.connect('mongodb+srv://Nabha123:Nabha123@cluster0.iafkk.mongodb.net/srjewelry?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        // useCreateIndex: true,
        // useFindAndModify: false
    }).then(() => {
        console.log("connected to Db")
    }).catch((err) => {
        console.log("connection failed", err)
    })
}

export default initDB