import { useEffect } from 'react';

import styles from './Kaiden.module.scss';

export const KaidenPage = () => {
  useEffect(() => {
    document.title = '🐨 Kaiden';
  }, []);

  return (
    <main className={styles.main}>
      <p className={styles.title}>Our little koala</p>

      {/* Container for image and frame */}
      <div className={styles.imageContainer}>
        <img src="/avatar.webp" alt="Kaiden" />
        <img src="/kaiden-frame.png" alt="Kaiden Frame" />
      </div>

      <p className={styles.welcome}>Welcome to the world!</p>
      <p className={styles.name}>Kaiden Desideri</p>

      <div className={styles.birthInfo}>
        <p>Born</p>
        <p>June 3, 2026 - 10:33</p>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <p>Weight</p>
          <p>3.2 kg</p>
        </div>
        <div className={styles.infoItem}>
          <p>Height</p>
          <p>50 cm</p>
        </div>
      </div>
    </main>
  );
};
