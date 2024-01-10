import CreateRoom from "@/components/create-room";
import RoomCard from "@/components/room-card";
import { Button } from "@/components/ui/button";
import {
    TooltipTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

const RoomsPage = () => {
    return (
        <div className='w-4/6 h-full relative'>
            <h3 className='text-2xl font-bold'>Rooms</h3>
            <p className='opacity-60'>
                Chat with your friends and create groups.
            </p>
            <hr />
            <div className='my-1 px-1 space-y-1 h-[91vh] overflow-y-scroll scrollbar-none'>
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
            <div className='absolute bottom-4 right-0'>
                <CreateRoom />
            </div>
        </div>
    );
};

export default RoomsPage;
