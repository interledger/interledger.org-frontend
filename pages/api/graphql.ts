import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

const GraphQl = (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
    pathRewrite: [
      {
        patternStr: '^/api/graphql',
        replaceStr: '/graphql',
      },
    ],
  });

export default GraphQl;
