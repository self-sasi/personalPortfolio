import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ImageCard() {
  return (
    <Card className="relative h-60 md:h-full overflow-hidden">
      <img src="/images/misc/mrbean.jpg" className="absolute inset-0 h-full w-full object-cover" />
    </Card>
  );
}
