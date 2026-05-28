import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import { BiSolidLeaf } from 'react-icons/bi';
import { GiKoala, GiMonsteraLeaf } from 'react-icons/gi';
import { IoIosLeaf } from 'react-icons/io';
import { IoLeaf } from 'react-icons/io5';
import { PiBabyBold } from 'react-icons/pi';
import { PiCalendarDotBold, PiRulerBold } from 'react-icons/pi';

import styles from './Kaiden.module.scss';

const ICONS: IconType[] = [GiKoala, GiMonsteraLeaf, PiBabyBold, IoIosLeaf, IoLeaf, BiSolidLeaf];

interface FloatingIconData {
  id: number;
  Icon: IconType;
  left: number;
  duration: number;
  size: number;
}

let _nextId = 0;

const translations = {
  en: {
    title: 'Our little koala',
    welcome: 'Welcome to the world!',
    born: 'Born',
    weight: 'Weight',
    height: 'Height',
    may: 'May',
    june: 'June',
  },
  nl: {
    title: 'Ons kleine koalaatje',
    welcome: 'Welkom in de wereld!',
    born: 'Geboren',
    weight: 'Gewicht',
    height: 'Lengte',
    may: 'Mei',
    june: 'Juni',
  },
  it: {
    title: 'Il nostro piccolo koala',
    welcome: 'Benvenuto al mondo!',
    born: 'Nato il',
    weight: 'Peso',
    height: 'Altezza',
    may: 'Maggio',
    june: 'Giugno',
  },
};

export const KaidenPage = () => {
  const lang = navigator.language.slice(0, 2) as keyof typeof translations;
  const t = translations[lang] ?? translations.en;
  const [floatingIcons, setFloatingIcons] = useState<FloatingIconData[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    document.title = '🐨 Kaiden';
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      const id = _nextId++;
      const left = 5 + Math.random() * 85;
      const duration = 4 + Math.random() * 4;
      const size = 18 + Math.random() * 22;

      setFloatingIcons((prev) => [...prev, { id, Icon, left, duration, size }]);

      const t = setTimeout(
        () => {
          setFloatingIcons((prev) => prev.filter((i) => i.id !== id));
        },
        duration * 1000 + 600,
      );
      timeoutsRef.current.push(t);
    }, 1200);

    const timeouts = timeoutsRef.current;
    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.backgroundLeaves}>
        <GiMonsteraLeaf
          style={{
            top: '8%',
            left: '4%',
            fontSize: '100px',
            opacity: 0.07,
            ['--rot' as string]: '20deg',
          }}
        />
        <GiMonsteraLeaf
          style={{
            top: '18%',
            right: '6%',
            fontSize: '90px',
            opacity: 0.05,
            ['--rot' as string]: '-45deg',
          }}
        />
        <IoLeaf
          style={{
            top: '48%',
            left: '2%',
            fontSize: '120px',
            opacity: 0.08,
            ['--rot' as string]: '135deg',
          }}
        />
        <BiSolidLeaf
          style={{
            bottom: '22%',
            right: '4%',
            fontSize: '85px',
            opacity: 0.06,
            ['--rot' as string]: '-70deg',
          }}
        />
        <GiMonsteraLeaf
          style={{
            bottom: '10%',
            left: '12%',
            fontSize: '110px',
            opacity: 0.05,
            ['--rot' as string]: '60deg',
          }}
        />
      </div>

      <div className={styles.floatingIconsContainer}>
        {floatingIcons.map(({ id, Icon, left, duration, size }) => (
          <div
            key={id}
            className={styles.floatingIcon}
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
            }}
          >
            <Icon />
          </div>
        ))}
      </div>

      <p className={styles.title}>
        <GiKoala style={{ fontSize: '18px', marginRight: '8px' }} />
        {t.title}
      </p>

      {/* Container for image and frame */}
      <div className={styles.imageContainer}>
        <img src="/kaiden.png" alt="Kaiden" />
        <img src="/kaiden-frame.png" alt="Kaiden Frame" />
      </div>

      <p className={styles.welcome}>{t.welcome}</p>
      <p className={styles.name}>Kaiden Desideri</p>

      <div className={styles.birthInfo}>
        <PiCalendarDotBold style={{ fontSize: '18px', marginRight: '8px' }} />
        <div>
          <p>{t.born}</p>
          <p>{t.may} 3, 2026 - 10:33</p>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoItem}>
          <PiBabyBold style={{ fontSize: '18px', marginRight: '8px' }} />
          <div>
            <p>{t.weight}</p>
            <p>3.2 kg</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <PiRulerBold style={{ fontSize: '18px', marginRight: '8px' }} />
          <div>
            <p>{t.height}</p>
            <p>50 cm</p>
          </div>
        </div>
      </div>
    </main>
  );
};
