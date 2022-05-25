import React from 'react'
import Link from 'next/link';
import baseUrl from '../../../baseUrl'
const CategoryDetails = ({ item }) => {
    return (
        <>
            <section className="shop_section layout_padding">
                {/* <div className="container">
                    <div className='blog-details'>
                        <div className="container">
                            <div className='blog-details-inner'>
                                <div className='row content-row mb-4'>

                                    <div className="blog-list">
                                        <div className="heading_container">
                                            <h2>{item.title}</h2>
                                            <p>{item.date}</p>
                                        </div>
                                        <p><img src={item.image} alt={item.title} /></p>
                                        <p>{item.fullDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                        {item.title} Blogs
                        </h2>
                    </div>
                    <div className="row">
                        {item.allBlog.map((item) => (
                            <div className="col-md-4" key={item._id}>
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
                </div> */}
            </section>
        </>

    )
}


// export const getStaticPaths = async () => {
//     const res = await fetch(`${baseUrl}/api/blogs-categories`)
//     const data = await res.json();
//     let paths = data.map(res => {
//         return {
//             params: { slug: res.slug }
//         }
//     })
//     return { paths, fallback: false }
// }

// export const getStaticProps = async ({ params }) => {

//     const slug = params.slug
//     const res = await fetch(`${baseUrl}/api/blogs-categories`)
//     const data = await res.json();
//     const filter = data.filter((res) => res.slug === slug)[0]
//     return {
//         props: { item: filter },
//     }
// }


export default CategoryDetails
