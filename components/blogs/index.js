import React from 'react'
import Link from 'next/link';
const Blogs = ({ BlogData, homePage }) => {
  console.log(BlogData,"BlogData")

  return (
    <section className="blog_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Latest From Blog
          </h2>
        </div>
        <div className="row">
          {BlogData && BlogData.map((item) => (
            <div className="col-md-6" key={item._id}>
              <div className="box">
                <div className="img-box">
                  <img src={item.image} alt={item.title} />
                  <h4 className="blog_date">
                    {item.date}
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    {item.title}
                  </h5>
                  <p>
                    {item.shortDescription}
                  </p>
                  <Link href={`/blogs/${item.slug}`}>
                    <a>
                      Read More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {homePage ? <div className="shop_section "> <div className="btn-box"><Link href={`/blogs`}><a>View All Blogs</a></Link></div></div> : "" }
      </div>
    </section>
  )
}


export default Blogs