import { useCallback, useEffect, useState } from 'react';
import { Icon, LanguageButtons } from '../../shared';
import {
  HEADER_LINKS,
  HEADER_TITLE_BOTTOM,
  HEADER_TITLE_TOP,
  HeaderProps,
  NAV_LIST,
} from './constants';
import styles from './Header.module.scss';
import cn from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderLink } from '@/features';
import { Text } from '../../shared/ui/text';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [IsSelected, setIsSelected] = useState<boolean>(false);
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogoClick = useCallback(() => {
    document.title = 'MSDE Group';
    navigate('/main');
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [navigate]);

  const handleLinkClick = useCallback(
    (item: HeaderProps) => {
      document.title = item.link;
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setIsOpen(false);
    },
    [setIsOpen],
  );

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

  const accountHandle = () => {
    document.title = 'personalAccount';
    navigate('admin');
  };

  return (
    <div
      className={cn(styles['wrapper'], {
        [styles['sticky']]: scrolled || isOpen,
      })}
    >
      <div className={styles['container']}>
        <div
          className={cn(styles['menu'], { [styles['activeBox']]: scrolled || isOpen })}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon icon={isOpen ? 'cross' : 'menu'} />
        </div>
        <div className={styles['title']} onClick={() => handleLogoClick()}>
          <div>{HEADER_TITLE_TOP}</div>
          <div>{HEADER_TITLE_BOTTOM}</div>
        </div>
        <div className={styles['nav']}>
          <div className={styles['nav__links']}>
            {HEADER_LINKS.map((link) => (
              <HeaderLink key={link.title} title={link.title} link={link.link} />
            ))}
            <div
              className={styles['nav__link']}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              <Text tag='span' size='xxs' weight='semibold'>
                {t('header.MORE')}
              </Text>
              {isVisible && (
                <div className={styles['dropdown']}>
                  {NAV_LIST.map((item) => (
                    <div
                      key={item.title}
                      className={styles['dropdown__item']}
                      onClick={accountHandle}
                    >
                      <div>{t(`header.${item.title}`)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <LanguageButtons />
        </div>
      </div>
      <nav className={cn(styles['boxLinks'], { [styles['boxLinks__active']]: isOpen })}>
        <ul className={styles['boxLinks__list']}>
          {HEADER_LINKS.map((link) => (
            <NavLink
              to={`/${link.link}`}
              onClick={() => handleLinkClick(link)}
              className={({ isActive }) =>
                cn(styles['boxLinks__link'], { [styles['boxLinks__link_active']]: isActive })
              }
            >
              {t(`header.${link.title}`)}
            </NavLink>
          ))}
          <div className={styles['boxLinks__link']} onClick={() => setIsSelected((prev) => !prev)}>
            {t('header.MORE')}
          </div>
          <ul
            className={cn(styles['boxLinks__sublist'], {
              [styles['boxLinks__sublist_selected']]: IsSelected,
            })}
          >
            {NAV_LIST.map((item) => (
              <NavLink
                to={`/${item.link}`}
                className={({ isActive }) =>
                  cn(styles['boxLinks__sublink'], {
                    [styles['boxLinks__sublink_active']]: isActive,
                  })
                }
              >
                {t(`header.${item.title}`)}
              </NavLink>
            ))}
          </ul>
        </ul>
      </nav>
    </div>
  );
};
