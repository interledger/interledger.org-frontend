import { useQueryParam, NumberParam, withDefault } from 'use-query-params';

type ReturnProps = [number, (page: number) => void];

export const usePaginationQuery = (param: string): ReturnProps => {
  const [page, setPage] = useQueryParam(param, withDefault(NumberParam, 1));
  return [page, setPage];
};
