import React, { useState, useEffect } from 'react'
import Footer from '../footer'
import Header from '../header'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Layout = ({ children }) => {
  const [headerClass, setHeaderClass] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath === "/") {
        setHeaderClass(true)
    } else setHeaderClass(false)
    
}, [router.asPath])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="images/favicon.png" type="image/gif" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
      </Head>
      <Header className={headerClass ? "header_section" : "header_section inner-header"}></Header>
      <div className={headerClass ? "home-page" : "inner-page"}>{children}</div>
      <Footer></Footer>
    </>
  )
}

export default Layout