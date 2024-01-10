import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

const RoomCard = () => {
    return (
        <Card className='hover:border-sky-500'>
            <CardHeader>
                <CardTitle className='text-xl'>
                    Talk all bout Blogzzzy
                </CardTitle>
                <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur nobis, voluptates dolores illum doloribus
                    dignissimos sunt suscipit quia perspiciatis aut et sint
                    molestiae, eius commodi rem? Eveniet excepturi voluptatum
                    provident?
                </CardDescription>
            </CardHeader>
            <CardContent className='flex justify-evenly space-x-2 items-center'>
                <p className='opacity-60 w-full text-center text-sm font-normal'>
                    20+ users chatting
                </p>
                <p className='w-full text-center opacity-60 font-thin'>|</p>
                <Button
                    className='border-sky-500 w-full hover:bg-sky-500'
                    variant='outline'
                >
                    Join
                </Button>
                <p className='w-full text-center opacity-60 font-thin'>|</p>
                <Button
                    className='w-full border-blue-700 hover:bg-blue-700 space-x-2'
                    variant='outline'
                >
                    <p>Share on</p> <TwitterLogoIcon />
                </Button>
            </CardContent>
        </Card>
    );
};

export default RoomCard;
