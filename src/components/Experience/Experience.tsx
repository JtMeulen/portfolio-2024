import { Collapsible } from '@/components/Collapsible/Collapsible';
import { IconTag } from '@/components/IconTag/IconTag';
import { useData } from '@/hooks/useData';

import { IExperience } from './Experience.types';

import styles from './Experience.module.scss';

export const Experience = () => {
  const { data } = useData('/data/experience.json');

  return (
    <>
      <h2>Experience</h2>
      <ul className={styles.experienceList}>
        {data &&
          data.map((experience: IExperience) => (
            <li key={experience.company} className={styles.experience}>
              <div className={styles.timePeriod}>
                <p>
                  {experience.startYear} - {experience.endYear}
                </p>
              </div>
              <div className={styles.content}>
                <div className={styles.dot}></div>
                <h3>
                  {experience.position} @{' '}
                  <a href={experience.url} target="blank" rel="noopener noreferrer">
                    {experience.company}
                  </a>
                </h3>
                <p>
                  {experience.location} - {experience.type}
                </p>
                <h4>Summary</h4>
                <ul className={styles.summary}>
                  <li>{experience.summary}</li>
                </ul>
                <Collapsible>
                  <h4>Responsibilities</h4>
                  {experience.responsibilities && (
                    <ul className={styles.responsibilities}>
                      {experience.responsibilities.map((responsibility: string) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  )}
                  <h4>Achievements</h4>
                  {experience.achievements && (
                    <ul className={styles.achievements}>
                      {experience.achievements.map((achievement: string) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </Collapsible>
                <ul className={styles.stack}>
                  {experience.stack.map((tech: string) => (
                    <li key={tech}>
                      <IconTag name={tech} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
