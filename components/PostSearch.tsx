'use client';
import { UsePosts } from "@/store";
import { FormEventHandler, useState } from "react";

export const PostSearch = () => {
  const [search, setSearch] = useState('')
  const {getPostsBySearch} = UsePosts(state => state)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await getPostsBySearch(search)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type='search' 
        placeholder="search" 
        value={search} 
        onChange={event => setSearch(event.target.value)} />
        <button type='submit'>search</button>
    </form>
    </>
  )
}
