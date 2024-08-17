import {
  SiAzuredevops,
  SiGit,
  SiGraphql,
  SiJest,
  SiLit,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiStencil,
  SiStorybook,
  SiTypescript,
  SiWebdriverio,
} from 'react-icons/si';

import styles from './Skills.module.scss';

export const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        <li>
          <SiReact /> React
        </li>
        <li>
          <SiTypescript /> TypeScript
        </li>
        <li>
          <SiSass /> Sass
        </li>
        <li>
          <SiStorybook /> Storybook
        </li>
        <li>
          <SiWebdriverio /> WebdriverIO
        </li>
        <li>
          <SiJest /> Jest
        </li>
        <li>
          <SiLit /> Lit
        </li>
        <li>
          <SiStencil /> Stencil
        </li>
        <li>
          <SiNodedotjs /> Node.js
        </li>
        <li>
          <SiGraphql /> GraphQL
        </li>
        <li>
          <SiAzuredevops /> Azure
        </li>
        <li>
          <SiGit /> Git
        </li>
      </ul>
    </>
  );
};
