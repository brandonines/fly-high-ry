import groq from 'groq'
import { PortableText } from '@portabletext/react'
import { getClient } from '../../lib/sanity.server'

// Use if you are going to add images.  Add components={PostComponents} to portable text.
// const PostComponents = {

// }

const Post = ({ post }) => {

    const { title, body, username} = post
    // console.log(post)

    return (
        <div>
            <>
                { post && 
                <article className="post-container">
                    <h1>{title}</h1>
                    <hr/>
                    <PortableText value={body}/>
                    <hr/>
                    <div className="info-container">
                        <div className="author-container">
                            <h3>Author: <strong>{username}</strong></h3>
                        </div>
                    </div>
                </article> }              
            </>

        </div>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
   title,
   "username": author->username,
   body,
   publishedAt,
}`

export const getStaticPaths = async () => {
    const paths = await getClient().fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug }})),
        fallback: true,
    }
}

export const getStaticProps = async ({params, preview = false}) => {
    const post = await getClient(preview).fetch(query, { slug: params.slug, })

    return {
        props: {
            post,
        }
    }
}

export default Post