import mongoose from "mongoose";
const blogsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
}, { timestamps: { currentTime: () => Date.now() } })

module.exports =  mongoose.models.Blogs || mongoose.model('Blogs', blogsSchema);