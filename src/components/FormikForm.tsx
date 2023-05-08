import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikConfig,
  FormikValues,
} from "formik";
import { ChangeEventHandler } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
} from "@chakra-ui/react";

interface FormikFormProps<T extends FormikValues = FormikValues> {
  formError: string;
  config: Omit<FormikConfig<T>, "initialValues">;
  fields: {
    name: keyof T;
    label: string;
    initialValue: string;
    element: (props: {
      value: string;
      onChange: ChangeEventHandler;
      id: string;
    }) => JSX.Element;
  }[];
}

const FormikForm = <T extends FormikValues = FormikValues>({
  config,
  fields,
  formError,
}: FormikFormProps<T>) => {
  const initialValues = fields.reduce((acc, { name, initialValue }) => {
    acc[name] = initialValue as T[keyof T];
    return acc;
  }, {} as T);
  return (
    <Formik {...config} initialValues={initialValues}>
      {(state) => (
        <Form>
          {fields.map(({ name, label, element }, i) => (
            <Field key={i} name={name}>
              {({ field, form }: FieldProps<typeof state.initialValues>) => (
                <FormControl
                  isInvalid={!!form.errors[name] && !!form.touched[name]}
                >
                  <FormLabel htmlFor={name.toString()}>{label}</FormLabel>
                  {element({
                    value: field.value[name],
                    onChange: field.onChange,
                    id: name.toString(),
                  })}
                  {!!form.errors[name] && !!form.touched[name] ? (
                    <FormErrorMessage height="6" marginBottom="2.5">
                      {form.errors[name]?.toString()}
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText height="6" marginBottom="2.5" />
                  )}
                </FormControl>
              )}
            </Field>
          ))}

          <Text height="6" marginBottom="2.5">
            {formError}
          </Text>
          <Button isLoading={state.isSubmitting} marginTop="2" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
