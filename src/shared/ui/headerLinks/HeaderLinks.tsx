import { FC, memo } from 'react';
import cn from 'classnames';
import styles from './Header.module.css';

interface HeaderLinksProps {
  links: Array<string>;
  classNames?: string;
}

const Links: FC<HeaderLinksProps> = ({ links, classNames }) => {
  return (
    <div className={cn(styles['wrapper'], classNames)}>
      {links.map((link) => (
        <h5 key={link}>{link}</h5>
      ))}
    </div>
  );
};

export const HeaderLinks = memo(Links);
