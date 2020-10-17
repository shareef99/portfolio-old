import React from "react";
import Link from "next/link";
import fs from "fs";

export default function blog({ slugs }) {
    return (
        <div>
            <h1>Hello from Blog</h1>
            <h3>Blogs:</h3>
            {slugs.map((slug) => {
                return (
                    <div key={slug}>
                        <Link href={"/blog/" + slug}>
                            <a>{slug}</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync("posts");

    return {
        props: {
            slugs: files.map((filename) => filename.replace(".md", "")),
        },
    };
};
