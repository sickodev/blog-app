"use client";
import { cn } from "@/lib/utils";
import {
    BellIcon,
    BookmarkFilledIcon,
    BookmarkIcon,
    EnvelopeClosedIcon,
    GearIcon,
    GlobeIcon,
    HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "./ui/separator";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const LeftSidebar = ({ classname }: { classname?: string }) => {
    const pathName = usePathname().split("/")[1];
    return (
        <div
            className={cn(
                "shadow-lg py-2 space-y-1 flex flex-col justify-evenly",
                classname
            )}
        >
            <h3 className='uppercase opacity-60 tracking-[3px] font-bold'>
                Blogzzzy
            </h3>
            <Separator className='-mx-2 px-2' />
            <div className='space-y-2 py-2 px-1 h-[94vh] flex flex-col justify-between'>
                <div className='space-y-2'>
                    <Link
                        href={"/bookmarks"}
                        className={`grid grid-cols-5 items-center p-2 rounded-lg ${
                            pathName === "bookmarks" &&
                            "dark:bg-zinc-700 bg-zinc-200"
                        } hover:dark:bg-zinc-800 hover:bg-zinc-200`}
                    >
                        <BookmarkIcon className='h-5 w-5' />
                        <p
                            className={`col-span-4 ${
                                pathName === "bookmarks" && "font-bold"
                            }`}
                        >
                            Bookmarks
                        </p>
                    </Link>
                    <Link
                        href={"/notifications"}
                        className={`grid grid-cols-5 items-center p-2 rounded-lg ${
                            pathName === "notifications" &&
                            "dark:bg-zinc-700 bg-zinc-200"
                        } hover:dark:bg-zinc-800 hover:bg-zinc-200`}
                    >
                        <BellIcon className='h-5 w-5' />
                        <p
                            className={`col-span-4 ${
                                pathName === "notifications" && "font-bold"
                            }`}
                        >
                            Notifications
                        </p>
                    </Link>
                    <Link
                        href={"/home"}
                        className={`grid grid-cols-5 items-center p-2 rounded-lg ${
                            pathName === "home" &&
                            "dark:bg-zinc-700 bg-zinc-200"
                        } hover:dark:bg-zinc-800 hover:bg-zinc-200`}
                    >
                        <HomeIcon className='h-5 w-5' />
                        <p
                            className={`col-span-4 ${
                                pathName === "home" && "font-bold"
                            }`}
                        >
                            Home
                        </p>
                    </Link>
                    <Link
                        href={"/rooms"}
                        className={`grid grid-cols-5 items-center p-2 rounded-lg ${
                            pathName === "rooms" &&
                            "dark:bg-zinc-700 bg-zinc-200"
                        } hover:dark:bg-zinc-800 hover:bg-zinc-200`}
                    >
                        <GlobeIcon className='h-5 w-5' />
                        <p
                            className={`col-span-4 ${
                                pathName === "rooms" && "font-bold"
                            }`}
                        >
                            Rooms
                        </p>
                    </Link>
                </div>
                <div className='space-y-2'>
                    <Link
                        href={"/settings"}
                        className={`grid grid-cols-5 items-center p-2 rounded-lg ${
                            pathName === "settings" &&
                            "dark:bg-zinc-700 bg-zinc-200"
                        } hover:dark:bg-zinc-800 hover:bg-zinc-200`}
                    >
                        <GearIcon className='h-5 w-5' />
                        <p
                            className={`col-span-4 ${
                                pathName === "settings" && "font-bold"
                            }`}
                        >
                            Settings
                        </p>
                    </Link>
                    <h5 className='uppercase opacity-70 text-xs tracking-[5px]'>
                        Preferences
                    </h5>
                    <hr />
                    <div className='flex w-full justify-start space-x-2 dark:bg-zinc-900/10 bg-zinc-100/50 p-1 rounded-xl'>
                        <UserButton />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
