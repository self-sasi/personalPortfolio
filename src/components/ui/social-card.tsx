"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SOCIALS } from "@/constants/socials";
import { SocialIcon } from "react-social-icons";

export function SocialCard() {
  return (
    <Card className="h-full bg-primary-azure">
      <CardContent className="flex-1 flex justify-center items-center gap-2">
        {SOCIALS.map(({ network, url }) => (
          <div
            key={network}
            className="
              flex items-center justify-center
              basis-10
              transition-[flex-basis]
              duration-300
              ease-in-out
              hover:basis-14
            "
          >
            <SocialIcon
              network={network}
              url={url}
              className="
                transition-transform
                duration-300
                ease-in-out
                hover:scale-110
              "
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
