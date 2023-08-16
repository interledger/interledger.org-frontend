import cn from 'classnames';

import { Button } from '@components/ui/Button/Button';
import { FormFieldError } from '@components/ui/FormFieldError/FormFieldError';
import { FormInput } from '@components/ui/FormInput/FormInput';
import { Text } from '@components/ui/Text/Text';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import styles from './MailchimpForm.module.scss';
import { MailchimpFormSchema } from './MailchimpFormSchema';
import fetchJsonp from 'fetch-jsonp';
import queryString from 'query-string';

interface Response {
  result: string;
  msg: string;
}

export interface MailchimpFormProps {
  /** Optional className for MailchimpForm, pass in a sass module class to override component default */
  className?: string;
}

type FormData = InferType<typeof MailchimpFormSchema>;

/**
 * MailchimpForm description
 */

export const MailchimpForm = ({ className }: MailchimpFormProps) => {
  const url =
    'https://interledger.us1.list-manage.com/subscribe/post?u=9ced7a326efbb158ae84d30cc&amp;id=7466ff6b0c&amp;f_id=0066e3e5f0';
  const rootClassName = cn(styles.root, className);
  const [status, setStatus] = useState<'error' | 'success'>();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(MailchimpFormSchema),
  });

  async function onSubmit(data: FormData) {
    const query = queryString.stringify(data);
    const endpoint = url.replace('/post?', '/post-json?') + '&' + query;

    try {
      const response: fetchJsonp.Response = await fetchJsonp(endpoint, {
        jsonpCallback: 'c',
      });

      const data: Response = await response.json<Response>();

      const error = !response.ok || data.result === 'error';

      if (error) {
        setErrorMessage(data.msg);
        return setStatus('error');
      }

      reset();
      return setStatus('success');
    } catch (error) {
      return setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={rootClassName}>
        <Text variant="h2" as="h1">
          You have successfully subscribed!
        </Text>
        <Text variant="body1">
          Thank you for joining the Interledger newsletter. While you wait for
          the next issue why not check out our latest{' '}
          <Link href={'/news'}>news</Link>.
        </Text>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <Text variant="h2" as="h1">
        Subscribe to our mailing list
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formFields}>
          <FormInput>
            <label htmlFor="mce-FNAME">First Name</label>
            <input
              id="mce-FNAME"
              type="text"
              autoComplete="given-name"
              {...register('FNAME')}
              disabled={isSubmitting}
            />
          </FormInput>
          <FormInput>
            <label htmlFor="mce-LNAME">Last Name</label>
            <input
              id="mce-LNAME"
              type="text"
              autoComplete="family-name"
              {...register('LNAME')}
              disabled={isSubmitting}
            />
          </FormInput>
          <FormInput>
            <label htmlFor="mce-EMAIL">Email</label>
            <input
              id="mce-EMAIL"
              type="email"
              disabled={isSubmitting}
              {...register('EMAIL')}
            />
            {errors.EMAIL && errors.EMAIL.type === 'required' ? (
              <FormFieldError message={'This is required'} />
            ) : null}
            {errorMessage ? <FormFieldError message={errorMessage} /> : null}
          </FormInput>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Subscribe
        </Button>
      </form>
    </div>
  );
};
