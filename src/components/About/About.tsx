import globe from '@/icons/globe.svg';

import styles from './About.module.scss';

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <figure className={styles.avatar}>
        <img src="/avatar.webp" alt="Joey ter Meulen" />
        <div className={styles.border}>
          <div className={styles.top}></div>
          <div className={styles.right}></div>
          <div className={styles.bottom}></div>
          <div className={styles.left}></div>
        </div>
      </figure>

      <h1>Joey ter Meulen</h1>
      <p>Web Developer</p>
      <p>
        <img src={globe} aria-hidden />
        Barcelona, Spain
      </p>

      <h2>About</h2>
      <p>
        Hello 👋! My name is Joey, and I'm a Dutch frontend web developer living in Barcelona,
        Spain. I have been coding as a hobby for many years, and in 2018, I officially joined the
        development industry.
        <br />
        <br />
        Over the years, I have gained extensive experience in developing websites using React.js,
        Node.js, and GraphQl. Recently, my focus has shifted towards developing design systems using
        web components, specifically with Stencil.js and Lit.
        <br />
        <br />
        With a passion for clean and efficient code, I strive to create user-friendly and visually
        appealing web applications. I believe in continuous learning and staying up-to-date with the
        latest technologies and best practices in the industry.
      </p>
    </div>
  );
};
