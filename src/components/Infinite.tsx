"use client"

import { useInfiniteQuery } from '@tanstack/react-query'
import { useRef, useEffect } from 'react'
import { useIntersection } from '@mantine/hooks'

// infinite scroll and pagination
// tutorial: https://www.youtube.com/watch?v=R1FG54FY-18
// context from https://react-query.tanstack.com/examples/infinite-scroll
// useIntersection from https://mantine.dev/hooks/use-intersection

const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
    { id: 5, title: 'Post 5' },
    { id: 6, title: 'Post 6' },
    { id: 7, title: 'Post 7' },
]

// mock database fetch, once working, replace with GET to /api/discoveries
const fetchPost = async (page:number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return posts.slice((page - 1) * 2, page * 2)
}

export default function Infinite() {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['query'],
        async ({ pageParam = 1 }) => {
        const response = await fetchPost(pageParam)
        return response
        },
        {
          getNextPageParam: (_, pages) => {  
            return pages.length + 1
          },
          initialData: {
            pages: [posts.slice(0, 2)],
            pageParams: [1],
          }
        }
    )

    const lastPostRef = useRef<HTMLElement>(null)
    const {ref, entry} = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    })

    useEffect(() => {
        if (entry && entry.isIntersecting) {
            fetchNextPage();
        }
    }, [entry, data]);
    

    const _posts = data?.pages.flatMap((page) => page)

    return (
        <div className="flex flex-col items-center pt-32">
            posts:
            {_posts?.map((post, i) => {
                if(i === _posts.length){
                    <div ref={ref} key={post.id}>
                        {post.title}
                    </div>
                }
                return <div key={post.id}></div>

            })}
            <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage
            ? 'Loading more...'
            : (data?.pages.length ?? 0) < 3
            ? 'Load More'
            : 'Nothing more to load'}
            </button>
        </div>
    )
}