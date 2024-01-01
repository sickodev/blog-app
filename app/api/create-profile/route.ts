import prisma from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request, res: Response) {
    const { name, email, username, bio } = await req.json();
    try {
        const profile = await prisma.user.update({
            where: {
                email,
            },
            data: {
                name,
                username,
                bio,
            },
        });
        return NextResponse.json(profile, { status: 200 });
    } catch (error) {
        return NextResponse.json(error);
    }
}
