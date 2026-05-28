import { useEffect } from 'react';

import styles from './Kaiden.module.scss';

const translations = {
  en: {
    title: 'Our little koala',
    welcome: 'Welcome to the world!',
    born: 'Born',
    weight: 'Weight',
    height: 'Height',
  },
  nl: {
    title: 'Ons kleine koalaatje',
    welcome: 'Welkom in de wereld!',
    born: 'Geboren',
    weight: 'Gewicht',
    height: 'Lengte',
  },
  it: {
    title: 'Il nostro piccolo koala',
    welcome: 'Benvenuto al mondo!',
    born: 'Nato il',
    weight: 'Peso',
    height: 'Altezza',
  },
};

export const KaidenPage = () => {
  const lang = navigator.language.slice(0, 2) as keyof typeof translations;
  const t = translations[lang] ?? translations.en;

  useEffect(() => {
    document.title = '🐨 Kaiden';
  }, []);

  return (
    <main className={styles.main}>
      <p className={styles.title}>{t.title}</p>

      {/* Container for image and frame */}
      <div className={styles.imageContainer}>
        <img src="/avatar.webp" alt="Kaiden" />
        <img src="/kaiden-frame.png" alt="Kaiden Frame" />
      </div>

      <p className={styles.welcome}>{t.welcome}</p>
      <p className={styles.name}>Kaiden Desideri</p>

      <div className={styles.birthInfo}>
        <p>{t.born}</p>
        <p>June 3, 2026 - 10:33</p>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <p>{t.weight}</p>
          <p>3.2 kg</p>
        </div>
        <div className={styles.infoItem}>
          <p>{t.height}</p>
          <p>50 cm</p>
        </div>
      </div>
    </main>
  );
};
