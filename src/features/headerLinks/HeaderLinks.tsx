import { FC, memo, useState } from 'react';
import styles from './HeaderLinks.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from '../../shared/ui/text';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
  menu?: { title: string; link: string }[];
}

const Links: FC<Props> = ({ link, title, menu }) => {
  const [isVisible, setVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      onClick={() => link !== 'more' && (document.title = link)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <NavLink
        to={link !== 'more' ? `/${link}` : ''}
        onClick={() =>
          scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
        className={({ isActive }) => (isActive ? styles['activeLink'] : styles['link'])}
      >
        <Text tag='span' size='xxs' weight='semibold'>
          {t(`header.${title}`)}
        </Text>
      </NavLink>
      {isVisible && menu && (
        <div className={styles['dropdown']}>
          {menu.map((item) => (
            <div key={item.title} className={styles['item']} onClick={() => (document.title = '#')}>
              <div>{t(`header.${item.title}`)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const HeaderLink = memo(Links);
