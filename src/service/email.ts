import { send } from "@emailjs/browser";

const sendEmail = <T>(params: T, templateId: string) =>
  send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
    templateId,
    params as Record<string, string>,
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
  )
    .then(
      (resp) => Promise.resolve(resp),
      (err) => Promise.reject(err)
    )
    .catch((err) => Promise.reject(err));

const emailService = {
  send: (props: { name: string; email: string; message: string }) =>
    sendEmail(
      props,
      process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID as string
    ),
};

export default emailService;
