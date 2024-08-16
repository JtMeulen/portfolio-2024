import {
  SiAzuredevops,
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

import styles from './IconTag.module.scss';

const ICON_MAP: { [key: string]: JSX.Element } = {
  StencilJS: <SiStencil />,
  Lit: <SiLit />,
  TypeScript: <SiTypescript />,
  Sass: <SiSass />,
  Storybook: <SiStorybook />,
  WebdriverIO: <SiWebdriverio />,
  Jest: <SiJest />,
  'Azure DevOps': <SiAzuredevops />,
  ReactJS: <SiReact />,
  NodeJS: <SiNodedotjs />,
  GraphQL: <SiGraphql />,
};

export const IconTag = ({ name }: { name: string }) => {
  return (
    <span className={styles.tag}>
      {ICON_MAP[name]} {name}
    </span>
  );
};
