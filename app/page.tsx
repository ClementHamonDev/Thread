'use server';

import Post from "@/src/features/card/Post";
import { ScrollArea } from "@/components/ui/scroll-area"
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  let session = await getAuthSession()
  return (
    <div className="px-4 m-w-lg">
      <ScrollArea>
      <Post/>
      <Post/>
      <Post/>
      </ScrollArea>
    </div>
  );
}
