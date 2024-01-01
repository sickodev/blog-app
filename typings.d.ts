type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    bio: string?;
};

type Blog = {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
    author: User;
    authorId: number;
};

type Comment = {
    id: number;
    content: string;
    author: User;
    authorId: number;
};
