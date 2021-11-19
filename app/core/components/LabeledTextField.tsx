import { forwardRef, PropsWithoutRef } from "react";
import { useField, useFormikContext, ErrorMessage } from "formik";

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number";
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
}

export const LabeledTextField = forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(({ name, label, outerProps, ...props }: LabeledTextFieldProps, ref) => {
  const [input] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <div className="pb-2 space-y-2" {...outerProps}>
      <label>
        <span className="text-gray-700 dark:text-gray-300 text-sm block pb-2">
          {label}
        </span>
        <input
          {...input}
          spellCheck="false"
          autoCapitalize="false"
          className="px-2 py-1 dark:bg-transparent dark:text-white border border-gray-300 block w-full rounded-sm border-gray-300 focus:border-gray-500 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
          disabled={isSubmitting}
          {...props}
          ref={ref}
        />
      </label>
    </div>
  );
});

export default LabeledTextField;
