import LeftSidebar from "@/components/left-sidebar";
import Navbar from "@/components/navbar";
import RightSidebar from "@/components/right-sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-between space-x-2 h-[94vh]'>
                <LeftSidebar classname='w-1/6 px-2 hidden md:block' />
                {children}
                <RightSidebar classname='w-1/6 hidden md:block' />
            </div>
        </div>
    );
};

export default HomeLayout;
