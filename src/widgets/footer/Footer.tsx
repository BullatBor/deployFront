import { Text } from '@/shared';
import { FOOTER_LINKS, HEADING, MAIL } from './constants';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  const handleClick = (path: string) => {
    path !== 'main' ? (document.title = path) : (document.title = 'MSDE Group');
    window.scrollTo(scrollY, 0);
  };

  return (
    <div className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__leftBlock']}>
          <Text tag={'p'} size='xxl' weight='semibold' className={styles['footer__paragraph']}>
            {HEADING}
          </Text>
          <div className={styles['footer__text']}>
            <Text tag={'span'} size='xs'>
              {t('footer.TEXT')}
            </Text>
            <Text tag={'span'} size='xl' weight='semibold'>
              <a href={`mailto:${MAIL}`} className={styles['footer__mail']}>
                {MAIL}
              </a>
            </Text>
          </div>
        </div>
        <div className={styles['footer__rightBlock']}>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <Text tag='span' size='xs'>
                <Link to={link.path} onClick={() => handleClick(link.path)}>
                  {t(`footer.${link.title}`)}
                </Link>
              </Text>
            ))}
          </ul>
          <Text tag={'span'} size='xs'>
            {t('footer.RIGHTS')}
          </Text>
        </div>
      </div>
    </div>
  );
};
