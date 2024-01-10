import { cn } from "@/lib/utils";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { topics } from "@/lib/constants";
import { badgeVariants } from "./ui/badge";
import Link from "next/link";

const RightSidebar = ({ classname }: { classname?: string }) => {
    return (
        <section className={cn("shadow-md px-2 py-2 space-y-4", classname)}>
            <Card>
                <CardHeader>
                    <CardTitle>Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className='grid grid-cols-2 grid-rows-4 gap-2'>
                    {topics.map((topic, key) => (
                        <Link
                            href={`/blogs/${topic}`}
                            key={key}
                            className={badgeVariants({ variant: "topic" })}
                        >
                            #{topic}
                        </Link>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Top Bloggers</CardTitle>
                    <CardDescription>Top writers for the week.</CardDescription>
                </CardHeader>
                <CardContent className=''>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Link
                            href={"#"}
                            key={index}
                            className='flex items-center space-x-3 px-2 py-1 rounded-md hover:dark:bg-zinc-800 hover:bg-zinc-200'
                        >
                            <div className='w-9 h-9 bg-gradient-to-b from-red-500 to-blue-500 rounded-full'></div>
                            <div>
                                <p>indexxx</p>
                                <p className='text-xs opacity-60'>
                                    {index} blogs this week.
                                </p>
                            </div>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default RightSidebar;
