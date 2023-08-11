import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

export const useScrollLock = (): [
  MutableRefObject<null>,
  Dispatch<SetStateAction<boolean>>
] => {
  const elementRef = useRef(null);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    lock
      ? disableBodyScroll(elementRef.current)
      : enableBodyScroll(elementRef.current);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [lock]);

  return [elementRef, setLock];
};
