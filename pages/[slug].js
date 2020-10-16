import React from 'react';
import fs from 'fs';
import path from 'path';

const Post = ({slug}) => {
    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}

export const getStaticPaths = async () => {
    
    const files = fs.readdirSync('posts');
    console.log(files);
    
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({params: { slug }}) => {
    
    const contents = fs.readFileSync(path.join);

    return {
        props: {
            slug
        }
    };
};

export default Post;

// : files.map(filename => {{
//             params: {
//                 slug: filename.replace('.md', '')
//             }
//         }})