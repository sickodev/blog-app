import { cn } from "@/lib/utils";
import React from "react";

const LeftSidebar = ({ classname }: { classname?: string }) => {
    return (
        <div className={cn("shadow-lg py-2", classname)}>
            <h4 className='font-bold text-xl'>Options</h4>
            <hr className='-mx-2 bg-sky-500' />
        </div>
    );
};

export default LeftSidebar;
