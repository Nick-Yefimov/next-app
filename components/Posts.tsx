'use client';
import { UsePosts } from "@/store";
import Link from "next/link"
import { useEffect } from "react";
import {shallow} from 'zustand/shallow';


export const Posts = () => {
  const [posts, loading, getAllPosts] = UsePosts(state => [
    state.posts,
    state.loading,
    state.getAllPosts
  ], shallow)

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    loading ? <h3>...Loading</h3> :
    <ul>
      { posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
