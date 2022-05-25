import React from 'react'
const FooterInfo = () => {
    return (
        <>
            <h4>
                Contact Us
            </h4>
            <div className="info_contact">
                <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                        Location
                    </span>
                </a>
                <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                        Call +01 1234567890
                    </span>
                </a>
                <a href="">
                    <i className="fa fa-envelope"></i>
                    <span>
                        demo@gmail.com
                    </span>
                </a>
            </div>
        </>
    )
}

export default FooterInfo