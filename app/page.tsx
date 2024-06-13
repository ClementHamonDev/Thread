'use server';

import Post from "@/src/features/card/Post";

export default async function Home() {
  return (
    <div className="px-4 m-w-lg">
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
