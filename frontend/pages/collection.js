// import React from "react";

// export default function Colletion() {
//     return (
//         <main>
//             <h2>Collection Page</h2>
//         </main>
//     )
// }

import { getClient } from "../lib/sanity.server"
import groq from 'groq'
import Head from 'next/head'
import Card from "../components/Card"
import Link from 'next/link'

const Collection = ({ posts }) => {
    console.log(posts)
    return (
      <div className="cards-container">
        <div>
          {posts?.map((post) => (
            <Link
              key={post._id}
              href="/posts/[slug]"
              as={`/posts/${post.slug.current}`}
              passHref
            >
              <Card post={post}/>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  export const getStaticProps = async ({ preview = false }) => {
    const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "username": author->username,
      "categories": categories->{id,title},
      body,
      slug,
      publishedAt,
      description,
      mainImage,
    }`)
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Collection