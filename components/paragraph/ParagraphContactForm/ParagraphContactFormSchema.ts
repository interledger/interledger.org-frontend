import * as yup from 'yup';

export const ParagraphContactFormSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string(),
  email: yup.string().email().required('Email is required'),
  subject: yup.string().required('Topic is required'),
  message: yup.string().required('Message is required'),
});
