import { Container, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import * as Yup from "yup";

import emailService from "@/service/email";

const FormikForm = dynamic(() => import("@/components/FormikForm"), {
  loading: () => <p>Loading...</p>,
});

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  return (
    <Container padding="0">
      <Heading as="h1" marginBottom="5">
        Contact
      </Heading>
      {isSubmitted ? (
        <Text>
          Thank you for sending your message. <br />I will response via email as
          soon as I can.
        </Text>
      ) : (
        <FormikForm
          formError={error}
          config={{
            onSubmit: async (values, { setSubmitting }) => {
              const { name, email, message } = values;
              try {
                await emailService.send({ name, email, message });
                setIsSubmitted(true);
              } catch (error) {
                setError("There was an issue sending your message");
              }
              setSubmitting(false);
            },
            validationSchema: Yup.object().shape({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              message: Yup.string().required("Required"),
            }),
          }}
          fields={[
            {
              name: "name",
              label: "Name",
              initialValue: "",
              element: (props) => <Input placeholder="name" {...props} />,
            },
            {
              name: "email",
              label: "Email",
              initialValue: "",
              element: (props) => <Input placeholder="name" {...props} />,
            },
            {
              name: "message",
              label: "Message",
              initialValue: "",
              element: (props) => <Textarea placeholder="name" {...props} />,
            },
          ]}
        />
      )}
    </Container>
  );
};

export default Contact;
