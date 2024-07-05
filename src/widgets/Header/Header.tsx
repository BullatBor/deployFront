import { useEffect, useState } from 'react';
import { HeaderLinks, LanguageButtons } from '../../shared';
import {
  HEADER_LINKS,
  HEADER_TITLE_BOTTOM,
  HEADER_TITLE_TOP,
} from './constants';
import styles from './Header.module.css';
import cn from 'classnames';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={cn(styles['wrapper'], { [styles['sticky']]: scrolled })}>
      <div className={styles['container']}>
        <div>
          <div className={styles['title']}>{HEADER_TITLE_TOP}</div>
          <div className={styles['title']}>{HEADER_TITLE_BOTTOM}</div>
        </div>
        <div className={styles['links']}>
          <HeaderLinks links={HEADER_LINKS} />
          <LanguageButtons />
        </div>
      </div>
    </div>
  );
};
