import { yupResolver } from '@hookform/resolvers/yup';
import { ParagraphContactFormFragment } from '@models/operations';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './ParagraphContactForm.module.scss';
import { ParagraphContactFormSchema } from './ParagraphContactFormSchema';
import { useState } from 'react';
import { InferType } from 'yup';
import { Button } from '@components/ui/Button/Button';
import { FormInput } from '@components/ui/FormInput/FormInput';
import { FormSelect } from '@components/ui/FormSelect/FormSelect';
import { FormFieldError } from '@components/ui/FormFieldError/FormFieldError';
import { Text } from '@components/ui/Text/Text';
import { FormLabel } from '@components/ui/FormLabel/FormLabel';
import { FormHasRequired } from '@components/ui/FormHasRequired/FormHasRequired';

export interface ParagraphContactFormProps {
  /** Optional className for ParagraphContactForm, pass in a sass module class to override component default */
  className?: string;
  paragraph: ParagraphContactFormFragment;
}

type FormData = InferType<typeof ParagraphContactFormSchema>;

/**
 * ParagraphContactForm description
 */

export const ParagraphContactForm = ({
  className,
  paragraph,
}: ParagraphContactFormProps) => {
  const [status, setStatus] = useState<'error' | 'success'>();
  const rootClassName = cn(styles.root, className);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(ParagraphContactFormSchema),
  });

  async function onSubmit(data: FormData) {
    const response = await fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.ok) {
      reset();
      return setStatus('success');
    }

    return setStatus('error');
  }

  const topics =
    paragraph.contactTopicsView.__typename === 'ContactTopicsResult' &&
    !!paragraph.contactTopicsView.results.length
      ? paragraph.contactTopicsView.results
      : [];

  return (
    <section className={rootClassName}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHasRequired />
        <div className={styles.formFields}>
          <FormInput>
            <FormLabel htmlFor="first_name" required>
              First Name
            </FormLabel>
            <input
              id="first_name"
              type="text"
              {...register('first_name')}
              disabled={isSubmitting}
              autoComplete="given-name"
            />
            {errors.first_name && errors.first_name.type === 'required' ? (
              <FormFieldError message={errors.first_name.message} />
            ) : null}
          </FormInput>
          <FormInput>
            <FormLabel htmlFor="last_name">Last Name</FormLabel>
            <input
              id="last_name"
              type="text"
              {...register('last_name')}
              disabled={isSubmitting}
              autoComplete="family-name"
            />
          </FormInput>
          <FormInput>
            <FormLabel htmlFor="email" required>
              Email
            </FormLabel>
            <input
              id="email"
              type="email"
              {...register('email')}
              disabled={isSubmitting}
            />
            {errors.email && errors.email.type === 'required' ? (
              <FormFieldError message={errors.email.message} />
            ) : null}
          </FormInput>
          <FormInput>
            <FormLabel htmlFor="subject" required>
              Topic
            </FormLabel>
            <FormSelect>
              <select
                disabled={isSubmitting}
                id="subject"
                {...register('subject')}
                defaultValue={paragraph.contactTopic?.name}
              >
                <option value={''} disabled={getValues('subject') != undefined}>
                  Select topic
                </option>
                {topics.map((t) => (
                  <option value={t.name} key={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </FormSelect>
            {errors.subject && errors.subject.type === 'required' ? (
              <FormFieldError message={errors.subject.message} />
            ) : null}
          </FormInput>
          <FormInput>
            <FormLabel htmlFor="message" required>
              Message
            </FormLabel>
            <textarea
              id="message"
              {...register('message')}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && errors.message.type === 'required' ? (
              <FormFieldError message={errors.message.message} />
            ) : null}
          </FormInput>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
      {status === 'success' ? (
        <Text className={styles.successMessage} variant="body1">
          Thank you for contacting us. A member of our team will be in touch
          soon.
        </Text>
      ) : null}
    </section>
  );
};
