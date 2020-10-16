import React from 'react';
import Link from 'next/link'

export default function blog() {
    return (
        <div>
            <h1>Hello from Blog</h1>
            <Link href="/test1"><a>Test1</a></Link>
        </div>
    )
}
