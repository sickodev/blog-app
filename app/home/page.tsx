import PostDialog from "@/components/post-dialog";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export default async function Home() {
    const user = await currentUser();
    if (!user) {
        redirectToSignIn();
    }
    return (
        <main className='p-2 w-4/6'>
            <div className='w-full flex justify-center'>
                <PostDialog
                    imageUrl={
                        user?.hasImage
                            ? user.imageUrl
                            : `https://ui-avatars.com/api/?name=${
                                  user?.firstName + " " + user?.lastName
                              }`
                    }
                />
            </div>
        </main>
    );
}
