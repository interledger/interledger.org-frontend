import * as yup from 'yup';

export const ParagraphContactFormSchema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
