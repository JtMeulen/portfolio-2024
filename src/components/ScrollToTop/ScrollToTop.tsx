import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

import styles from './ScrollToTop.module.scss';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // return if not mobile device
    if (window.innerWidth > 768) return;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`${styles.btn} ${isVisible ? null : styles.hidden}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <FaChevronUp />
    </button>
  );
};
