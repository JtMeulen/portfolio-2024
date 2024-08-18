import { useLayoutEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import styles from './Collapsible.module.scss';

const COLLAPSED_HEIGHT = 75;

export const Collapsible = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.content} ${expanded ? styles.expanded : null}`}
        ref={ref}
        style={{ height: expanded ? height : `${COLLAPSED_HEIGHT}px` }}
      >
        {children}
      </div>

      <button
        className={`${styles.btn} ${expanded ? styles.expanded : null}`}
        onClick={() => setExpanded((prevState) => !prevState)}
      >
        {expanded ? 'Show less' : 'Show more'}
        {expanded ? <FaChevronUp aria-hidden /> : <FaChevronDown aria-hidden />}
      </button>
    </>
  );
};
