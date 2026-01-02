import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ImageCard() {
  return (
    <Card className="relative h-full overflow-hidden">
      <Image
        src="/mrbean.jpg"
        alt="Mr Bean"
        fill
        className="object-cover"
      />
    </Card>
  );
}
