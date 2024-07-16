import { FC, memo, useState } from 'react';
import styles from './HeaderLinks.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from '../../shared/ui/text';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
  menu?: string[];
}

const Links: FC<Props> = ({ link, title, menu }) => {
  const [isVisible, setVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      onClick={() => link !== 'MORE' && (document.title = link)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <NavLink
        to={`/${link}`}
        className={({ isActive }) => (isActive ? styles['activeLink'] : styles['link'])}
      >
        <Text tag='span' size='xxs' weight='semibold'>
          {t(`header.${title}`)}
        </Text>
      </NavLink>
      {isVisible && menu && (
        <div className={styles['dropdown']}>
          {menu.map((item) => (
            <div key={item} className={styles['item']} onClick={() => (document.title = '#')}>
              <div>{t(`header.${item}`)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const HeaderLinks = memo(Links);
