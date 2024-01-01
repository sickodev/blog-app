export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");
    try {
        const response = await prisma?.user.findFirst({
            where: {
                username: username!,
            },
        });
        if (response) {
            return Response.json("exists");
        }
        return Response.json("not_found");
    } catch (error) {
        return Response.json(error);
    }
}
