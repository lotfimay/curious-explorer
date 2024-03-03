import React from "react";

import Image from "next/image";
import { Button } from "./ui/button";

function Featured({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-5xl text-center">
        <b className="font-extrabold">Hey, Lotfi here !</b> Discover my stories
        and creative ideas
      </h1>
      <div className="flex items-center gap-10 mt-4">
        <div className="h-[400px] flex-1 bg-red-500 relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="font-extrabold text-4xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-2xl font-light text-soft-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            beatae architecto? Impedit tempore delectus alias rerum sint ex
            laboriosam, in officiis provident maiores dolores corporis
            perspiciatis voluptatem dolor quasi fugiat?
          </p>
          <Button className="w-fit">Read more</Button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
