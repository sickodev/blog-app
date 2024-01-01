import OnboardingForm from "@/components/onboarding-form";
import { initialProfile } from "@/lib/initial-profile";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
    const user = await currentUser();
    if (!user) redirectToSignIn();
    const profile = await initialProfile();
    if (profile.username !== "username") {
        redirect("/home");
    }
    console.log(profile.username);
    return (
        <main className='w-full py-1 space-y-2'>
            <div className='space-y-1'>
                <h1 className='text-center text-3xl font-bold'>
                    Set up your blogzzy account.
                </h1>
                <h4 className='text-center opacity-60 font-light'>
                    Finish setting up your blogzzy account to start sharing your
                    blogs and chat with your peers.
                </h4>
            </div>
            <hr />
            <div className='flex justify-center border py-2 mx-1 rounded-r-[600px]'>
                <OnboardingForm name={profile.name} email={profile.email} />
            </div>
        </main>
    );
};

export default Page;
