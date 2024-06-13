import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea";

export default function Post() {
    return (
      <div className="pb-4">
      <Card>
        <CardHeader className="grid w-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <CardTitle>username</CardTitle>
        <CardDescription>@tag</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Text might seem like a boring component.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
        </CardFooter>
      </Card>
      </div>
    );
}
