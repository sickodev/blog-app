import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { GlobeIcon, HomeIcon } from "@radix-ui/react-icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

const Navbar = () => {
    return (
        <nav className='w-full p-2 shadow-md dark:bg-zinc-950/50 flex items-center justify-between'>
            <Link
                href={"/home"}
                className='text-xl font-bold hover:translate-x-2 hover:scale-105 transition-all duration-150 ease-out '
            >
                Blogzzy
            </Link>
            <div className='flex items-center space-x-2 py-1 px-3 rounded-full dark:bg-neutral-900 bg-neutral-200'>
                <ModeToggle />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={"/rooms"}
                                className='border rounded-full p-[7px] dark:bg-zinc-950 bg-zinc-50 shadow-sm dark:shadow-none'
                            >
                                <GlobeIcon className='h-5 w-5' />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Rooms</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <UserButton />
            </div>
        </nav>
    );
};

export default Navbar;
