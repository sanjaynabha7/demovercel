import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Head from 'next/head'
const Layout = ({ children }) => {
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
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  )
}

export default Layout