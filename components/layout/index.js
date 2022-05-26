import React, { useState, useEffect } from 'react'
import Footer from '../footer'
import Header from '../header'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Layout = ({ children }) => {
  const [headerClass, setHeaderClass] = useState(false)
  const router = useRouter()
  const [lock, setLock] = useState(true)
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  useEffect(() => {
    if (router.asPath === "/") {
      setHeaderClass(true)
    } else setHeaderClass(false)
    let lockVal = localStorage.getItem('lock');
    if (lockVal) {
      setLock(false)
    }
    console.log(lockVal)
  }, [router.asPath])

  const handleClick = (e) => {
    e.preventDefault()
    if (password === '9592122902') {
      setLock(false)
      localStorage.setItem('lock', true);
    } else {
      setErrorMsg("Something wrong !")
    }
    console.log("Working")
  }

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

      {lock ?
        <>
          <div className="mx-auto mt-5" style={{ width: '500px' }}>
            <form onSubmit={handleClick}>
              <div className="form-group">
                <label>Password</label>
                <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <p>{errorMsg}</p>
          </div>
        </>
        :
        <>
          <Header className={headerClass ? "header_section" : "header_section inner-header"}></Header>
          <div className={headerClass ? "home-page" : "inner-page"}>{children}</div>
          <Footer></Footer>
        </>
      }
    </>
  )
}

export default Layout