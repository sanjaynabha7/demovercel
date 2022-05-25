import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='header'>
            <ul>
                <Link href="/"><a >Home</a></Link>
                <Link href="/about"><a >About Us</a></Link>
                <Link href="/blogs"><a >Blog</a></Link>
            </ul>
        </div>
    )
}

export default Navbar