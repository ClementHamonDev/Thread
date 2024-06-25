import { getAuthSession } from "@/lib/auth";
import {Post} from "@/src/features/card/Post";
import React from "react";
import { get20Posts } from '../../src/query/post.query';

export default async function Home (){
    const session = await getAuthSession();

    const posts = await get20Posts();

    return (
        <div>
            {posts.map((post) => (
                <Post propsPost = {post} 
                />
            ))}
        </div>
    );
};