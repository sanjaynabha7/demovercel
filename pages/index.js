import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import baseUrl from '../baseUrl'
export default function Home({name}) {
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
      My name is {name}. I love coding.
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${baseUrl}/api/hello`)
  const data = await res.json()
  return {
    props: {name: data.name},
  }
}