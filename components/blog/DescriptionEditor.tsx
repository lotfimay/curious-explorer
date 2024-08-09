import { FormItem, FormMessage } from "@/components/ui/form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

interface DescriptionEditorProps {
  field: {
    onChange: (value: string) => void;
    value: string;
  };
}

const DescriptionEditor: React.FC<DescriptionEditorProps> = ({ field }) => {
  return (
    <FormItem>
      <ReactQuill
        className="w-full p-6"
        theme="bubble"
        onChange={field.onChange}
        value={field.value}
        placeholder="Tell your story..."
      />
      <FormMessage className="ml-6 text-red-500" />
    </FormItem>
  );
};

export default DescriptionEditor;
