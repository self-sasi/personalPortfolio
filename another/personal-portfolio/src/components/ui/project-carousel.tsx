import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectCarousel() {
  return (
    <>
      {/* desktop and ipad  */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg hidden md:block"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer" />
        <CarouselNext className="text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer" />
      </Carousel>

      {/* phone  */}
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-xs md:hidden mt-7"
      >
        <CarouselContent className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer" />
        <CarouselNext
          className="bottom-2! left-1/2! -translate-x-1/2! z-50!
      text-primary-tangerine-foreground! border-primary-tangerine-foreground!
      hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer"
        />
      </Carousel>
    </>
  );
}
