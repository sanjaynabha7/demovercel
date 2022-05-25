import mongoose from "mongoose";
const blogsCategoriesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    blogId: { type: Array },

}, { timestamps: { currentTime: () => Date.now() } })

module.exports = mongoose.models.BlogsCategories || mongoose.model('BlogsCategories', blogsCategoriesSchema);