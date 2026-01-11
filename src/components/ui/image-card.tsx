import { Card, CardContent, CardHeader } from "@/components/ui/card";

type ImageCardProps = {
  imageSrc: string;
};

export function ImageCard({imageSrc}: ImageCardProps) {
  return (
    <Card className="relative h-48 md:h-full overflow-hidden">
      <img src={imageSrc} className="absolute inset-0 h-full w-full object-cover" />
    </Card>
  );
}
