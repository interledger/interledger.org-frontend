import { NextApiRequest, NextApiResponse } from 'next';
import * as yup from 'yup';
import { drupal } from 'lib/drupal';
import { ParagraphContactFormSchema } from '@components/paragraph/ParagraphContactForm/ParagraphContactFormSchema';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method === 'POST') {
      const body = await ParagraphContactFormSchema.validate(
        JSON.parse(request.body)
      );

      const url = drupal.buildUrl('/webform_rest/submit');

      // Submit to Drupal.
      const result = await drupal.fetch(url.toString(), {
        method: 'POST',
        body: JSON.stringify({
          webform_id: 'contact',
          ...body,
        }),
        withAuth: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error();
      }

      response.status(200).end();
    }
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return response.status(422).json(error.message);
    }
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }
  }
}
