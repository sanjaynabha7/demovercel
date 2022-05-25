import initDB from '../../helper/initDB'
import Blogs from '../../models/blogs'
import BlogsCategories from '../../models/blogsCategories'
initDB()

console.log("Render")
export default async function handler(req, res) {
    const data = await BlogsCategories.find().lean()
    const singleBlog = await Blogs.find().lean();
    let allBlog = [];
     data.forEach(async element => {
         element.blogId.forEach(blog => {
            let findBlog = singleBlog.find((res) =>  res._id.toString() === blog)
            allBlog.push(findBlog)
        });
        element.allBlog = allBlog;
        allBlog = [];
    });
    return res.status(200).send(data)
}


