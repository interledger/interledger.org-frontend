import * as yup from 'yup';

export const MailchimpFormSchema = yup.object({
  FNAME: yup.string(),
  LNAME: yup.string(),
  EMAIL: yup.string().email().required(),
});
