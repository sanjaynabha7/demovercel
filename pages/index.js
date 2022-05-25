import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import baseUrl from '../baseUrl'
export default function Home({ name, blogData }) {
  // const [name, setName] = useState("")

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(`${baseUrl}/api/hello`)
  //     const data = await res.json()
  //     setName(data.name)
  //     console.log(data);
  //     return data
  //   }
  // fetchData();
  // }, [])

  return (
    <div className={styles.container}>
      My name is {name}. I love Animals.
      <ul>
        {blogData.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/hello`)
  const data = await res.json()

  const resBlog = await fetch(`${baseUrl}/api/blogs`)
  const blogData = await resBlog.json()

  return {
    props: { name: data.name, blogData },
  }
}