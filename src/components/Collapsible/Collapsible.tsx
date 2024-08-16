import { useState } from 'react';

import styles from './Collapsible.module.scss';

export const Collapsible = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`${styles.content} ${expanded ? styles.expanded : null}`}>{children}</div>

      <button className={`${styles.btn} ${expanded ? styles.expanded : null}`} onClick={toggle}>
        {expanded ? 'Show less ↑' : 'Show more ↓'}
      </button>
    </>
  );
};
