import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import Post from "@/src/features/card/Post";
import React from "react";

export default async function Home (){
    const session = await getAuthSession();

    const posts = await prisma.post.findMany({
        where: {
            parentID: null,
        },
        select: {
            id: true,
            content: true,
            createAt: true,
            user: {
                select: {
                    username: true,
                    image: true,
                    tag: true,
                    id: true,
                },
            },
            likes: {
                select: {
                    userID: true,
                },
                where: {
                    userID: session?.user.id ?? "error",
                },
            },
            _count: {
                select: {
                    likes: true,
                    replies: true,
                },
            },
        },
    });

    return (
        <div>
            {posts.map((post) => (
                <Post
                    username={post.user.username}
                    tag={post.user.tag}
                    text={post.content}
                    avatarUrl={post.user.image}
                    id={post.id}
                />
            ))}
        </div>
    );
};