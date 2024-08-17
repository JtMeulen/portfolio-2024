import { About } from '@/components/About/About';
import { Experience } from '@/components/Experience/Experience';
import { Projects } from '@/components/Projects/Projects';

// import { Skills } from '@/components/Skills';
import styles from './Main.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <About />
      </section>
      <section className={styles.content}>
        <Experience />
        <Projects />
        {/* <Skills /> */}
      </section>
    </main>
  );
};
