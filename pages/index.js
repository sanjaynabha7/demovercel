import { useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import Banners from '../components/banners'
import Testimonials from '../components/testimonials'
import About from './about'
import Blogs from '../components/blogs'
import Offers from './offers'
export default function Home() {
  const [name, setName] = useState("")
  const [list, setList] = useState("")
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/api/blogs`)
      const data = await res.json()
      setList(data)
      console.log(data);
      return data
    }
    fetchData();
  }, [])

  return (
    <>
      <Banners></Banners>
      <About></About>
       <Blogs BlogData={list} ></Blogs>
      <Offers></Offers>
      <Testimonials></Testimonials>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`${baseUrl}/api/hello`)
//   const data = await res.json()

//   const resBlog = await fetch(`${baseUrl}/api/blogs`)
//   const blogData = await resBlog.json()

//   return {
//     props: { name: data.name, blogData },
//   }
// }