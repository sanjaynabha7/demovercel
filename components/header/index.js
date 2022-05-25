import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div>
            <ul>
                <Link href="/"><a >Home</a></Link>
                <Link href="/about"><a >About Us</a></Link>
                <Link href="/blog"><a >Blog</a></Link>
            </ul>
        </div>
    )
}

export default Header