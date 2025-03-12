import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../Ui/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from '../Ui/Avatar';
import { signOut, useSession } from 'next-auth/react';
import { toast } from 'sonner';
import { LogOutIcon } from 'lucide-react';
export default function UserDropdown() {
    const session = useSession()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className='border-secondaryGreen max-md:w-6 max-md:h-6 hover:scale-105 border-2'>
                    <AvatarImage className='' src={session?.data?.user?.image ?? "/sponge.jpeg"} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-black p-2'>
                <DropdownMenuLabel className='text-primaryGreen'>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='!cursor-pointer flex justify-between p-3 hover:bg-gray' onClick={() => signOut().then(() => {
                    window.location.reload();
                    toast("Signed out successfully !")
                })}>
                    <span>Logout</span>
                    <LogOutIcon color='red'/>
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
