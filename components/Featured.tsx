import React from "react";

import Image from "next/image";

function Featured() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 w-1/2">
        <Image src="/hacker.png" alt="" width={200} height={200} />
      </div>
      <div className="flex-1">
        <h1>Hack Nasa using html !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          ratione, provident quis repudiandae fuga delectus voluptate illo
          cupiditate temporibus, molestiae adipisci facere veniam ipsa! Deleniti
          sequi nostrum natus facere quod!
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Featured;
