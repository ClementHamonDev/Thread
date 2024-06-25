'use server'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Repeat2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostType } from "@/src/query/post.query";

type PropsPost = {
  propsPost : PostType;
}

export const Post = ( {propsPost} : PropsPost ) => {
  return (
    <div className="pb-4">
      <Card>
        <CardHeader className="grid w-full">
          <Avatar>
            <AvatarImage src={propsPost.user.image ?? undefined} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div className="flex gap-2 items-center">
          <CardTitle>{propsPost.user.username}</CardTitle>
          <CardDescription>@{propsPost.user.tag}</CardDescription></div>
        </CardHeader>
        <CardContent>
          <p>{propsPost.content}</p>
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
