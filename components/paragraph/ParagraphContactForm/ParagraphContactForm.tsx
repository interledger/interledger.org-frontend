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

  const { register, handleSubmit, formState, reset, getValues } = useForm({
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
        <div className={styles.formFields}>
          <FormInput>
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" {...register('first_name')} />
          </FormInput>
          <FormInput>
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" {...register('last_name')} />
          </FormInput>
          <FormInput>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} />
          </FormInput>
          <FormInput>
            <label htmlFor="subject">Topic</label>
            <FormSelect>
              <select
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
          </FormInput>
          <FormInput>
            <label htmlFor="message">Message</label>
            <textarea id="message" {...register('message')}></textarea>
          </FormInput>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};
