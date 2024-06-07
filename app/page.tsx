import Post from "@/src/features/card/Post";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {
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
