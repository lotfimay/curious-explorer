import { FieldValues, Control, ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface InputFieldProps<T extends FieldValues> {
  field: ControllerRenderProps<T>;
  placeholder: string;
  type?: string;
}

const InputField = <T extends FieldValues>({
  field,
  placeholder,
  type = "text",
}: InputFieldProps<T>) => {
  return (
    <FormItem>
      <FormControl>
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className="border-none outline-none p-6 text-3xl focus-visible:ring-0 shadow-none text-current placeholder:text-[#b3b3b1]"
        />
      </FormControl>
      <FormMessage className="ml-6 text-red-500" />
    </FormItem>
  );
};

export default InputField;
