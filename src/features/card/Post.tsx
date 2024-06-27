"use server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Repeat2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostType } from "@/src/query/post.query";
import Link from "next/link";

type PropsPost = {
  propsPost: PostType;
};

export const Post = ({ propsPost }: PropsPost) => {
  return (
    <div className="pb-4">
      <Card>
        <CardHeader className="grid w-full">
          <Avatar>
            <AvatarImage src={propsPost.user.image ?? undefined} />
            <AvatarFallback>
              {propsPost.user.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex gap-2 items-center">
            <CardTitle>{propsPost.user.username}</CardTitle>
            <CardDescription>@{propsPost.user.tag}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>{propsPost.content}</p>
        </CardContent>
        <CardFooter className="flex justify-evenly">
          <Button size="icon" variant="ghost" className="border-none">
            <Heart/>
            <p className="pl-2 text-muted-foreground text-sm">{propsPost._count.likes}</p>
          </Button>
          <Button size="icon" variant="ghost" className="border-none">
            <MessageCircle />
            <p className="pl-2 text-muted-foreground text-sm">{propsPost._count.replies}</p>
          </Button>
          <Button size="icon" variant="ghost" className="border-none text-sm">
            <Upload />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
