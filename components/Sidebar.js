import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from "@heroicons/react/solid"
import { DotsCircleHorizontalIcon, HashtagIcon,BellIcon,InboxIcon,BookmarkIcon,ClipboardIcon,UserIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import {useSession, signIn, signOut} from "next-auth/react"

export default function Sidebar() {
    const { data: session } = useSession();
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
        {/* twitter logo */}
        <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>
        {/* Menu */}

        <div className='mt-4 mb-2.5 xl:items-start'>
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            {session && (
                <>
                <SidebarMenuItem text="Notification" Icon={BellIcon} />
                <SidebarMenuItem text="Message" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} /> 
                </>
            )}
            
        </div>

        {/* Button */}
        {session ?(
            <>
                <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

                {/* Mini-Profile */}
            <div className="hoverEffect text-grey-700 flex items-center justify-center xl:justify-start mt-auto">
                <img 
                    onClick={SignOut}
                    src="https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png" 
                    alt="user-img" 
                    className='h-20 w-20 rounded-full xl:mr-2'/>
            <div className='leading-5 hidden xl:inline'>
                <h4 className='font-bold'>{session.user.name}</h4>
                <p className='text-gray-500'>@{session.user.email}</p>
            </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>
            </> 
            
        ) : (
            <button
            onClick={signIn} 
            className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
                Sign in</button>
        )
    }
        
    </div>
  );
};
