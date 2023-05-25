"use client"
import { useState, useEffect} from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

import Profile from '@components/profile'

export default function MyProfile() {
    const {data:session} = useSession()
    const router = useRouter();
    const [myPosts,setMyPosts] = useState([])
    useEffect(()=>{
        async function fetchPosts(){
            
          const response = await fetch(`api/users/${session?.user.id}/posts`);
          const data = await response.json();
          setMyPosts(data);
        };
        if(session?.user.id) fetchPosts();
      },[session?.user.id]) 

    function handleEdit(post){
      router.push(`/update-prompt?id=${post._id}`)
    }
    async function handleDelete(post){
      const hasConfirmed  = confirm("Are you sure you want to delete this prompt ");
      if(hasConfirmed) {

        try{
          await fetch(`api/prompt/${post._id.toString()},{
            method: "DELETE",
          }`)
  
          const filterPosts = myPosts.filter((p)=>{
            return p._id !== post._id
          })
          setMyPosts(filterPosts)
        }catch(error){
          console.log(error)
        }
      }
    }
  return (
    <Profile 
        name="My"
        desc="Welcome to your personale profile page"
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}
