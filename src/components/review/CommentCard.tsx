import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, User } from "lucide-react";

type Comment = {
  name: string;
  opinion: string;
  rating: number;
  sug?: string;
};

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="w-full h-full text-sm xl:text-[0.9vw] xl:p-[1.2vw]">
      <CardHeader className="pb-2 xl:pb-[0.8vw]">
        <div className="flex items-center gap-2 xl:gap-[0.5vw]">
          <User className="w-4 h-4 xl:w-[1vw] xl:h-[1vw] text-muted-foreground" />
          <CardTitle className="text-base xl:text-[1vw]">{comment.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 xl:space-y-[0.8vw]">
        <p className="text-gray-700">
          <span className="font-medium">Opinion:</span> {comment.opinion}
        </p>

        {comment.sug && (
          <p className="text-gray-700">
            <span className="font-medium">Suggestion:</span> {comment.sug}
          </p>
        )}

        <div className="flex items-center gap-1 xl:gap-[0.3vw]">
          {[...Array(5)].map((_, i) => (
       
              <Star 
              key={'star'+i}
              className={cn(i<=comment.rating?'fill-yellow-400 text-yellow-400':'text-gray-300',"size-4 xl:size-[1.3vw]")}/>
           
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
