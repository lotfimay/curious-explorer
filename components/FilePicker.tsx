"use client";
import { useState } from "react";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface FilePickerProps {
  field: {
    onChange: (file: File | null) => void;
    value: File | null;
  };
}

const FilePicker: React.FC<FilePickerProps> = ({ field }) => {
  const [imagePreview, setImagePreview] = useState<File | null>(null);
  const [open, setOpen] = useState(false); // Manage open state internally

  return (
    <>
      <div className="relative flex gap-5">
        <button
          type="button"
          className="w-9 h-9 rounded-full bg-transparent border border-current flex items-center justify-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src="/add.png" alt="Add" width={16} height={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-[var(--bg)] absolute z-999 left-12">
            <FormItem>
              <FormControl>
                <Input
                  className="hidden"
                  id="image"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    field.onChange(file);
                    setImagePreview(file);
                  }}
                />
              </FormControl>
              <FormMessage className="ml-6" />
            </FormItem>
            <Label
              htmlFor="image"
              className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/image.png"
                alt="Select Image"
                width={16}
                height={16}
              />
            </Label>
            <Label className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <Image
                src="/external.png"
                alt="Select Image"
                width={16}
                height={16}
              />
            </Label>
            <Label className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <Image
                src="/video.png"
                alt="Select Image"
                width={16}
                height={16}
              />
            </Label>
          </div>
        )}
      </div>
      {imagePreview && (
        <div className="w-fit relative bg-red-500">
          <button
            type="button"
            onClick={() => {
              field.onChange(null);
              setImagePreview(null);
            }}
            className="absolute top-0 right-0 bg-transparent p-1 z-10"
          >
            <Image src="/remove.png" alt="Remove" width={32} height={32} />
          </button>
          <img
            src={URL.createObjectURL(imagePreview)}
            alt="Image Preview"
            className="h-64 w-64 object-cover bg-blue-500"
          />
        </div>
      )}
    </>
  );
};

export default FilePicker;
