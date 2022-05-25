import baseUrl from '../../baseUrl'
export default function Home({ list }) {
    return (
        <div>
            THis is about page
            <ul>
                {list && list.map((item, idx) => (
                    <li key={idx}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    const resBlog = await fetch(`${baseUrl}/api/blogs`)
    const blogData = await resBlog.json()

    return {
        props: { list: blogData },
    }
}