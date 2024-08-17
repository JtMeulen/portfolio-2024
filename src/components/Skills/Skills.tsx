import {
  SiAzuredevops,
  SiCss3,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLit,
  SiMongodb,
  SiNextdotjs,
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
          <SiHtml5 /> HTML
        </li>
        <li>
          <SiCss3 /> CSS
        </li>
        <li>
          <SiJavascript /> JavaScript
        </li>
        <li>
          <SiReact /> React
        </li>
        <li>
          <SiNextdotjs /> Next.js
        </li>
        <li>
          <SiTypescript /> TypeScript
        </li>
        <li>
          <SiSass /> Sass
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
          <SiMongodb /> MongoDB
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
          <SiAzuredevops /> Azure
        </li>
        <li>
          <SiGit /> Git
        </li>
      </ul>
    </>
  );
};
