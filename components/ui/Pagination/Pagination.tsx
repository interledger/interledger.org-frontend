import { DOTS, usePagination } from './usePagination';
import { usePaginationQuery } from './usePaginationQuery';
import cn from 'classnames';

import styles from './Pagination.module.scss';
import { VisuallyHidden } from '@components/util/VisuallyHidden/VisuallyHidden';

interface Props {
  className?: string;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  param: string;
}

const Pagination = ({
  className,
  totalCount,
  siblingCount = 0,
  pageSize,
  param,
}: Props) => {
  const rootClassName = cn(styles.root, className);

  const [page, setPage] = usePaginationQuery(param);

  const paginationRange = usePagination({
    currentPage: page,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={rootClassName}>
      <li>
        <button
          className={styles.paginationNav}
          onClick={() => setPage(page - 1)}
          disabled={paginationRange[0] === page}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.045 25.829">
            <path
              fill="none"
              stroke="#620ab1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.631 1.414 1 12.914l11.631 11.5"
            />
          </svg>
          <VisuallyHidden>Previous Page</VisuallyHidden>
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return null;
        }

        return (
          <li
            key={pageNumber}
            className={cn(styles.paginationItem, {
              [styles.paginationSelected]: pageNumber == page,
            })}
            onClick={() => setPage(pageNumber as number)}
            aria-hidden="true"
          >
            {pageNumber}
          </li>
        );
      })}
      <li>
        <button
          className={styles.paginationNav}
          onClick={() => setPage(page + 1)}
          disabled={[...paginationRange].pop() === page}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.045 25.829">
            <path
              fill="none"
              stroke="#620ab1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1.414 24.414 11.631-11.5-11.631-11.5"
              data-name="Path 122"
            />
          </svg>
          <VisuallyHidden>Next Page</VisuallyHidden>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
