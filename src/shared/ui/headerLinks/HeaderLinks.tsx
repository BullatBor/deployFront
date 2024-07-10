import { FC, memo, useState } from 'react';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  link: string;
  menu?: string[];
}

const Links: FC<Props> = ({ link, menu }) => {
  const [isVisible, setVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      key={link}
      onClick={() => link !== 'MORE' && (document.title = link)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={styles['wrapper']}
    >
      <span className={styles['link']}>{t(`header.${link}`)}</span>
      {isVisible && menu && (
        <div className={styles['dropdown']}>
          {menu.map((item) => (
            <div key={item} className={styles['item']} onClick={() => (document.title = item)}>
              <div>{t(`header.${item}`)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const HeaderLinks = memo(Links);
