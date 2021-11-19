import { useState, ReactNode, PropsWithoutRef } from "react";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { z } from "zod";

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children?: ReactNode;
  submitText?: string;
  schema?: S;
  mini?: boolean;
  onSubmit: (
    values: z.infer<S>,
    helpers: FormikHelpers<z.infer<S>>
  ) => Promise<void | OnSubmitResult>;
  initialValues?: FormikProps<z.infer<S>>["initialValues"];
}

interface OnSubmitResult {
  FORM_ERROR?: string;
  [prop: string]: any;
}

export const FORM_ERROR = "FORM_ERROR";

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  mini,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const [formError, setFormError] = useState<string | null>(null);
  return (
    <Formik
      initialValues={initialValues || {}}
      validate={(values) => {
        if (!schema) return;
        try {
          schema.parse(values);
        } catch (error) {
          return error.formErrors.fieldErrors;
        }
      }}
      onSubmit={async (values, helpers) => {
        const { setErrors } = helpers;
        const { FORM_ERROR, ...otherErrors } =
          (await onSubmit(values, helpers)) || {};

        if (FORM_ERROR) {
          setFormError(FORM_ERROR);
        } else {
          setFormError(null);
        }

        if (Object.keys(otherErrors).length > 0) {
          setErrors(otherErrors);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form
          onSubmit={handleSubmit}
          className="form"
          autoComplete="off"
          {...props}
        >
          <div className="space-y-2">{children}</div>

          {submitText && (
            <div className="pt-2">
              <button type="submit" disabled={isSubmitting}>
                {submitText}
              </button>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
}

export default Form;
