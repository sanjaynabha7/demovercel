import React from 'react'
import FooterNav from './footer-nav'
import FooterInfo from './footer-info'

const Footer = () => {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row info_form_social_row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">

              <div className="social_box">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row info_main_row">
            <div className="col-md-6 col-lg-3">
             <FooterNav></FooterNav>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_insta">
                <h4>
                  Instagram
                </h4>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/p1.png" alt="" />
                  </div>
                  <p>
                    long established fact that a reader
                  </p>
                </div>
                <div className="insta_box">
                  <div className="img-box">
                    <img src="images/p2.png" alt="" />
                  </div>
                  <p>
                    long established fact that a reader
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_detail">
                <h4>
                  About Us
                </h4>
                <p className="mb-0">
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <FooterInfo></FooterInfo>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="#"> Vanced Solution</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer