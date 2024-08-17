import { FaRegFolder } from 'react-icons/fa';

import { useData } from '@/hooks/useData';

import { IProject } from './Projects.types';

import styles from './Projects.module.scss';

export const Projects = () => {
  const { data } = useData('/data/projects.json');

  return (
    <>
      <h2>Projects</h2>
      <ul className={styles.projectsList}>
        {data &&
          data.map((project: IProject) => (
            <li key={project.name} className={styles.project}>
              <h3>
                <FaRegFolder />
                <a href={project.url} target="blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
              <p>{project.description}</p>
              <ul className={styles.notes}>
                {project.notes.map((note: string) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
