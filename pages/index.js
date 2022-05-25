import { useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import Banners from '../components/banners'
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
      My name is {name}. I love Animals.
      <ul>
        {list && list.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
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