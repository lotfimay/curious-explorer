import React from "react";

import Image from "next/image";

import facebookIcon from "@/public/facebook.png";
import youtubeIcon from "@/public/youtube.png";
import tiktokIcon from "@/public/tiktok.png";

function SocialMedia() {
  return (
    <ul className="flex items-center justify-between gap-4">
      <li>
        <Image src={facebookIcon} alt="facebook icon" height={20} width={20} />
      </li>
      <li>
        <Image src={youtubeIcon} alt="youtube icon" height={20} width={20} />
      </li>
      <li>
        <Image src={tiktokIcon} alt="tiktok icon" height={20} width={20} />
      </li>
    </ul>
  );
}

export default SocialMedia;
