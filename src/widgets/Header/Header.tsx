import { useCallback, useEffect, useState } from 'react';
import { HeaderLinks, LanguageButtons } from '../../shared';
import { HEADER_LINKS, HEADER_TITLE_BOTTOM, HEADER_TITLE_TOP } from './constants';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    document.title = 'Main';
    navigate('/main');
  }, [navigate]);

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
        <div className={styles['title']} onClick={() => handleClick()}>
          <div>{HEADER_TITLE_TOP}</div>
          <div>{HEADER_TITLE_BOTTOM}</div>
        </div>
        <div className={styles['nav']}>
          <div className={styles['links']}>
            {HEADER_LINKS.map((link) => (
              <HeaderLinks key={link.title} title={link.title} link={link.link} menu={link.menu} />
            ))}
          </div>
          <LanguageButtons />
        </div>
      </div>
    </div>
  );
};
