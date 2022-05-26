import mongoose from "mongoose";
const emailsSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: Number},
    subject: { type: String },
    message: { type: String},
}, { timestamps: { currentTime: () => Date.now() } })

module.exports =  mongoose.models.Emails || mongoose.model('Emails', emailsSchema);