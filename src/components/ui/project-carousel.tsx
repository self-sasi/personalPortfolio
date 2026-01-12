import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectMiniView } from "@/types/project";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

type ProjectCarouselProps = {
  projects: ProjectMiniView[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <>
      {/* desktop and ipad */}
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-lg xl:max-w-2xl 2xl:max-w-3xl hidden md:block"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="aspect-[4/3] relative size-full rounded-lg overflow-hidden">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt ?? ""}
                      className="absolute size-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.title}</p>
                </TooltipContent>
              </Tooltip>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer" />
        <CarouselNext className="text-primary-tangerine-foreground! border-primary-tangerine-foreground! hover:bg-primary-tangerine-foreground/20! bg-primary-tangerine! cursor-pointer" />
      </Carousel>

      {/* phone */}
      <Carousel
        opts={{ align: "start" }}
        orientation="vertical"
        className="w-full max-w-xs md:hidden mt-7"
      >
        <CarouselContent className="-mt-1 h-65">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pt-1 cursor-pointer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="pt-3">
                    <div className="aspect-video relative size-full rounded-lg overflow-hidden">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt ?? ""}
                        className="absolute size-full object-cover"
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{project.title}</p>
                </TooltipContent>
              </Tooltip>
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
