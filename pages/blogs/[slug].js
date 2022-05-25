import React from 'react'
import Link from 'next/link';
import baseUrl from '../../baseUrl'
const BlogDetails = ({ item, Categories }) => {

    return (
        <section className="shop_section layout_padding">
            <div className="container">
                <div className='blog-details'>
                    <div className="container">
                        <div className='blog-details-inner'>
                            <div className='row content-row mb-4'>
                                <div className="col-lg-8 col-md-7">
                                    <div className="single-post-area">
                                        <div className="blog-list">
                                            <div className="heading_container">
                                                <h2>{item.title}</h2>
                                                <p>{item.date}</p>
                                            </div>
                                            <p><img src={item.image} alt={item.title} /></p>
                                            <p>{item.fullDescription}</p>
                                        </div>
                                        <div className="post-tags">
                                            <h5>Tags:</h5>
                                            <a href="#">Bisy LMS</a>
                                            <a href="#">Design</a>
                                            <a href="#">General</a>
                                        </div>
                                        <div className="post-share">
                                            <h5>Share:</h5>
                                            <a className="fac" href="#"><i className="fa fa-facebook-f"></i></a>
                                            <a className="twi" href="#"><i className="fa fa-twitter"></i></a>
                                            <a className="goo" href="#"><i className="fa fa-google"></i></a>
                                        </div>
                                        <div className="post-admin">
                                            <img src={item.image} alt={item.title} />
                                            <a href="#">Justin Case</a>
                                            <span>About Author</span>
                                            <p>Me old mucker bits and bobs you mug tickety-boo a load of old tosh bender mufty bloke old daft.</p>
                                        </div>
                                    </div>
                                    <div className="comment-area">
                                        <h3>Comment (3)</h3>
                                        <ol className="comment-list">
                                            <li>
                                                <div className="single-comment">
                                                    <img src="s" alt="" />
                                                    <h5><a href="#">Jason Response</a></h5>
                                                    <span>April 03, 2019</span>
                                                    <div className="comment">
                                                        <p>He legged it bevvy mush owt to do with me such fibber fa about cup of tea sloshed morish butty bubble. Butty gormless lavatory twit bits and bobs pardon you daft ummm I am telling.</p>
                                                    </div>
                                                    <a className="comment-reply-link" href="#"><i className="fa fa-reply"></i>Reply</a>
                                                    <div className="c-border"></div>
                                                </div>
                                                <ul className="children">
                                                    <li>
                                                        <div className="single-comment">
                                                            <img src="d" alt="" />
                                                            <h5><a href="#">Douglas Lyphe</a></h5>
                                                            <span>July 27, 2020</span>
                                                            <div className="comment">
                                                                <p>Oxford baking cakes dropped clanger fanny around vagabond amongst cor blimey guvnor. Blatant matie boy say bugger all mate butty gormless lavatory twit bits and bobs pardon you daft ummm I am telling.</p>
                                                            </div>
                                                            <a className="comment-reply-link" href="#"><i className="fa fa-reply"></i>Reply</a>
                                                            <div className="c-border"></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="comment-form-area">
                                        <h3>Post a Comment</h3>
                                        <p>Your email address will not be published. Required fields are marked</p>
                                        <div className="comment-form">
                                            <form className="row" action="#" method="post">
                                                <div className="col-md-6">
                                                    <input type="text" name="name" placeholder="Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="email" name="email" placeholder="Email" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="url" name="url" placeholder="Website" />
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="save-comment">
                                                        <input id="history-name" type="checkbox" />
                                                        <label htmlFor="history-name">Save my name, email, and website in this browser for the next time I comment.</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <textarea placeholder="Comment"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit">Post Comment</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5">
                                    <div className="blog-sidebar">
                                        <aside className="widget widget-search">
                                            <form className="search-form" action="#" method="post">
                                                <input type="search" name="s" placeholder="Search..." />
                                                <button type="submit"><i className="fa fa-search"></i></button>
                                            </form>
                                        </aside>
                                        <aside className="widget widget-categories">
                                            <h3 className="widget-title">Categories</h3>
                                            <ul>
                                                {/* {Categories.map((item, idx) => (
                                                    <li key={idx}><Link href={`/blogs/category/${item.slug}`}><a>{item.title} </a></Link><span>({item.allBlog.length})</span></li>
                                                ))} */}
                                                
                                            </ul>
                                        </aside>
                                        <aside className="widget widget-trend-post">
                                            <h3 className="widget-title">Popular Posts</h3>
                                            <div className="popular-post">
                                                <a href="single-post.html"> <img src={item.image} alt={item.title} /></a>
                                                <h5><a href="single-post.html">Using creative problem Solving</a></h5>
                                                <span>March 10, 2020</span>
                                            </div>
                                        </aside>
                                        <aside className="widget">
                                            <h3 className="widget-title">Popular Tags</h3>
                                            <div className="tags">
                                                <a href="#">Bisy LMS</a>
                                                <a href="#">Design</a>
                                                <a href="#">General</a>
                                                <a href="#">Online</a>
                                                <a href="#">Prevention</a>
                                                <a href="#">Artist</a>
                                                <a href="#">Education</a>
                                                <a href="#">Motivation</a>
                                                <a href="#">Politico</a>
                                                <a href="#">Live Cases</a>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps = async ({ params }) => {
    const slug = params.slug
    const res = await fetch(`${baseUrl}/api/blogs`)
    const data = await res.json();
    const filter = data.filter((res) => res.slug === slug)[0]
    return {
        props: { item: filter},
    }
}


export default BlogDetails
