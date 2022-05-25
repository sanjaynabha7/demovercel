import mongoose from "mongoose";
const DB = process.env.DATABASE;
function initDB() {
    mongoose.connect(DB, {
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