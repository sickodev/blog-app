"use client";

import { PlusIcon } from "@radix-ui/react-icons";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const CreateRoom = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return;
    }
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Button
                        size='icon'
                        variant='outline'
                        className='rounded-full border-sky-600 hover:bg-sky-600'
                    >
                        <PlusIcon />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Create Room</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CreateRoom;
