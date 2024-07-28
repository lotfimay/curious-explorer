"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
import ReactQuill from "react-quill";
import BlogForm from "@/components/blog/BlogForm";

const page = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  return (
    // <div className="flex flex-col bg-blue-400">
    //   <input
    //     type="text"
    //     placeholder="Title"
    //     className="p-12 text-6xl border-none outline-none bg-transparent text-current placeholder:text-[#b3b3b1]"
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <select
    //     className="p-5 bg-primary-foreground"
    //     onChange={(e) => setCatSlug(e.target.value)}
    //   >
    //     <option value="style">style</option>
    //     <option value="fashion">fashion</option>
    //     <option value="food">food</option>
    //     <option value="culture">culture</option>
    //     <option value="travel">travel</option>
    //     <option value="coding">coding</option>
    //   </select>
    //   <div className="flex gap-5 h-[700px] relative">
    //     <button
    //       className="w-9 h-9 rounded-full bg-transparent border border-current flex items-center justify-center cursor-pointer"
    //       onClick={() => setOpen(!open)}
    //     >
    //       <Image src="/add.png" alt="" width={16} height={16} />
    //     </button>
    //     {open && (
    //       <div className="flex gap-5 bg-[var(--bg)] absolute z-999 w-full left-12">
    //         <input
    //           type="file"
    //           id="image"
    //           className="hidden"
    //         />
    //         <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
    //           <label htmlFor="image">
    //             <Image src="/image.png" alt="" width={16} height={16} />
    //           </label>
    //         </button>
    //         <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
    //           <Image src="/external.png" alt="" width={16} height={16} />
    //         </button>
    //         <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
    //           <Image src="/video.png" alt="" width={16} height={16} />
    //         </button>
    //       </div>
    //     )}
    //     <ReactQuill
    //       className="mt-10 w-full"
    //       theme="bubble"
    //       value={value}
    //       onChange={setValue}
    //       placeholder="Tell your story..."
    //     />
    //   </div>
    //   <button
    //     className="absolute top-0 right-0 p-2.5 bg-[#1a8917] text-white cursor-pointer rounded-full"
    //   >
    //     Publish
    //   </button>
    // </div>
    <BlogForm />
  );
};

export default page;
