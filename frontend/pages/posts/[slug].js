import groq from 'groq'
import { PortableText } from '@portabletext/react'
import { getClient } from '../../lib/sanity.server'
import { urlFor } from '../../lib/sanity'

// Use if you are going to add images.  Add components={PostComponents} to portable text.
// const PostComponents = {

// }

const Post = ({ post }) => {
    if(!post) return null

    const { title, body, username, mainImage} = post
    // console.log(post)

    return (
        <div>
            <>
                { post && 
                <article className="post-container">
                    {/* <div className="post-info"> */}
                    <div>
                        <h1>{title}</h1>
                        <h3 className="author">{username}</h3>
                    </div>
                    <hr/>
                    <div className="post-image-container">
                        <img
                            className="post-image"
                            alt={title + 'image'}
                            src={urlFor(mainImage)}
                        />
                    </div>
                    <hr/>
                    <div className="body-container">
                        <PortableText value={body}/>
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
   mainImage,
}`

export async function getStaticPaths() {
    const paths = await getClient().fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug }})),
        fallback: true,
    }
}

export async function getStaticProps({params, preview = false}) {
    const post = await getClient(preview).fetch(query, { slug: params.slug, })
    return {
        props: {
            post,
        }
    }
}

export default Post