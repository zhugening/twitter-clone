import React from 'react'
import { SparklesIcon } from '@heroicons/react/solid'
import Input from './Input'
import Post from './Post'

export default function Feed() {
    const posts =[
        {
            id: "1",
            name: "Wutthipan Pariyothai",
            username: "Wutthipan.p@gmail.com",
            userImg: "https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
            img: "https://images.unsplash.com/photo-1662044286007-10905b5456e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
            text: "nice view!",
            timestamp: "2 hour ago"
        },
        {
            id: "2",
            name: "Sirapa Pariyothai",
            username: "Sirapa.p@gmail.com",
            userImg: "https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
            img: "https://images.unsplash.com/photo-1662012964089-d63f10e88eb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
            text: "wow!",
            timestamp: "2 day ago"
        }
    ]
  return (
    <div className='xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center ml-auto w-9 h-9'>
                <SparklesIcon className='h-5' />
            </div>
        </div>
        <Input />
        {posts.map((post)=>(
            <Post key={post.id} post={post}/>
            ))}
    </div>
  )
};
