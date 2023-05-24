"use client"

import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'

function PromptCardlist({data,handleTagClick}){
  return(
    <div className='my-16 prompt_layout'>
      {data.map((post)=>(
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
export default function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  function handleSearchChange(e){
    
  }
  useEffect(()=>{
    async function fetchPosts(){
      const response =await fetch('api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  },[])
  return (
    <section className='feed'>
      <form action="" className='relative w-full flex-center'>
        <input type="text" placeholder='Search for a tag or username' value={searchText} onChange={handleSearchChange} className='search_input peer'/>
      </form>
      <PromptCardlist
      data={posts}
      handleTagClick={()=>{}}
      />
    </section>
  )
}
