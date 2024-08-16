import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

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
      <p className={styles.location}>
        <FaGlobe />
        Barcelona, Spain
      </p>

      <ul className={styles.links}>
        <li>
          <a href="mailto:joeytermeulen@gmail.com" title="Send Joey ter Meulen an email">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            href="tel:+34 606 650 243"
            title="Call Joey ter Meulen at +34 606 650 243"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joey-ter-meulen-205365120/"
            title="Visit Joey ter Meulen profile on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JtMeulen"
            title="Visit Joey ter Meulen profile on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>

      <h2>About</h2>
      <p className={styles.description}>
        Hello <span className={styles.wave}>👋</span>! My name is Joey, and I'm a Dutch frontend web
        developer living in Barcelona, Spain. I have been coding as a hobby for many years, and in
        2018, I officially joined the development industry.
        <br />
        <br />
        Over the years, I have gained extensive experience in developing websites using{' '}
        <em>React.js</em>, <em>Node.js</em>, and <em>GraphQl</em>. Recently, my focus has shifted
        towards developing design systems using web components, specifically with{' '}
        <em>Stencil.js</em> and <em>Lit</em>.
        <br />
        <br />
        With a passion for clean and efficient code, I strive to create user-friendly and visually
        appealing web applications. I believe in continuous learning and staying up-to-date with the
        latest technologies and best practices in the industry.
      </p>
    </div>
  );
};
