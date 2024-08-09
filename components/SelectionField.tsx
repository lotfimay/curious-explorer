import React from "react";
import { FieldValues, ControllerRenderProps } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectionFieldProps<T extends FieldValues> {
  field: ControllerRenderProps<T>;
  options: Array<{ label: string; value: string }>;
  placeholder: string;
}

const SelectionField = <T extends FieldValues>({
  field,
  options,
  placeholder,
}: SelectionFieldProps<T>) => {
  return (
    <FormItem>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger className="ml-5 p-6">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="cursor-pointer"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage className="ml-6 text-red-500" />
    </FormItem>
  );
};

export default SelectionField;
