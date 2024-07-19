import { FC, memo } from 'react';
import styles from './HeaderLinks.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from '../../shared/ui/text';
import { NavLink } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
}

const Links: FC<Props> = ({ link, title }) => {
  const { t } = useTranslation();

  return (
    <div onClick={() => (document.title = link)}>
      <NavLink
        to={`/${link}`}
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
    </div>
  );
};

export const HeaderLink = memo(Links);
