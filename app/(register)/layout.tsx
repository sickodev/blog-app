import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Blog App",
};

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-full h-screen flex items-center justify-center'>
            <div className='w-1/2 h-full relative hidden md:block'>
                <Image
                    src={
                        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt=''
                    className='opacity-60 object-contain'
                    fill
                />
            </div>
            <div className='w-1/2'>{children}</div>
        </main>
    );
};

export default RegisterLayout;
