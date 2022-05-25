import React from 'react'
import Link from 'next/link'
const FooterNav = () => {
    return (
        <div className="info_links">
            <h4>
                Links
            </h4>
            <div className="info_links_menu">
                <Link href="/"><a >Home</a></Link>
                <Link href="/about-us"><a >About Us</a></Link>
                <Link href="/products"><a >Shop</a></Link>
                <Link href="/blogs"><a >Blog</a></Link>
                <Link href="/contact-us"><a >Contact Us</a></Link>
            </div>
        </div>
    )
}

export default FooterNav