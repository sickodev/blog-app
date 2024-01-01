import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import prisma from "./db";
export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        redirectToSignIn();
    }

    const profile = await prisma.user.findUnique({
        where: {
            email: user?.emailAddresses[0].emailAddress,
        },
    });

    if (profile) {
        return profile;
    }

    const newProfile = await prisma.user.create({
        data: {
            username: "username",
            name: `${user?.firstName} ${user?.lastName}`,
            email: user?.emailAddresses[0].emailAddress!,
            bio: "",
        },
    });

    return newProfile;
};
