import initDB from '../../helper/initDB'
import Blogs from '../../models/blogs'
initDB()
console.log("Render")
export default async function handler(req, res) {
    const data = await Blogs.find().lean()
    return res.status(200).send(data)
}
