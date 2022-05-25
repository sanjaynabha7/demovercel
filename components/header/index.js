import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = ({ className }) => {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (toggle) {
            setToggle(!toggle)
        }
    }, [router.asPath])

    const toggleBar = () => {
        setToggle(!toggle)
    }
    return (
        <header className={className}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <Link href="/" >
                        <a className="navbar-brand"  >
                            <span>
                                Store
                            </span>
                        </a>
                    </Link>
                    <div className="toggleBat" id="">
                        {/* <div className="cart-bar">
                            <Link href="/cart"><a><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className='cart-length'>{Cart.length}</span></a></Link>
                        </div> */}
                        <div className={toggle ? "custom_menu-btn menu_btn-style" : "custom_menu-btn"}>



                            <button onClick={toggleBar}>
                                <span className="s-1"> </span>
                                <span className="s-2"> </span>
                                <span className="s-3"> </span>
                            </button>

                            <div id="myNav" className={toggle ? "overlay menu_width" : "overlay"}>
                                <div className="overlay-content">
                                    <Link href="/"><a >Home</a></Link>
                                    <Link href="/about"><a >About Us</a></Link>
                                    <Link href="/products"><a >Shop</a></Link>
                                    <Link href="/blog"><a >Blog</a></Link>
                                    <Link href="/contact-us"><a >Contact Us</a></Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Header
