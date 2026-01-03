"use client"

import Timeline from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="grid grid-cols-12 pt-8">
      <div className="col-span-12">
        <Card className="bg-primary-aqua text-primary-aqua-foreground h-full">
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardAction>
              <Button variant="outline" size="icon" className="rounded-full text-primary-aqua-foreground!  border-primary-aqua-foreground! hover:bg-primary-aqua-foreground/20! cursor-pointer"
              onClick={() => router.push('/experience')}>
                <ArrowUpRightIcon />
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="flex-1">
            <Timeline/>
          </CardContent>

          {/* <CardFooter></CardFooter> */}
        </Card>
      </div>
    </div>
    
  );
}
