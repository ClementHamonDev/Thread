import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Repeat2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Post({ username, tag, text, avatarUrl, id }: { username: string, tag: string, text: string, avatarUrl: string | null, id: string }) {
  return (
    <div className="pb-4">
      <Card>
        <CardHeader className="grid w-full">
          <Avatar>
            <AvatarImage src={avatarUrl ?? undefined} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div className="flex gap-2 items-center">
          <CardTitle>{username}</CardTitle>
          <CardDescription>@{tag}</CardDescription></div>
        </CardHeader>
        <CardContent>
          <p>{text}</p>
        </CardContent>
        <CardFooter className="flex justify-evenly" >
          <Button variant='ghost' className="border-none">
            <MessageCircle />
          </Button>
          <Button variant='ghost' className="border-none">
            <Repeat2 />
          </Button>
          <Button variant='ghost' className="border-none">
            <Upload />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
