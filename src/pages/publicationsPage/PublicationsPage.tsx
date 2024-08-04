import { useTranslation } from 'react-i18next';
import styles from './PublicationsPage.module.scss';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../shared';
import { PublicationsDto } from './constants';

const PublicationsPage = () => {
  const { t } = useTranslation();

  const getDates = () => {
    const res = [];
    for (let i = 2008; i < 2025; i++) {
      res.push(i);
    }
    return res;
  };

  return (
    <div className={styles['publications']}>
      <div className={styles['publications__wrapper']}>
        <div className={styles['publications__header']}>
          <div className={styles['publications__heading']}>{t('publications.heading')}</div>
          <ul className={styles['publications__dates']}>
            {getDates().map((date) => (
              <a href={`#${date}`} className={styles['publications__date']}>
                <div>{date}</div>
              </a>
            ))}
          </ul>
        </div>
      </div>
      {PublicationsDto.map((block) => (
        <div className={styles['publications__list']}>
          <SubHeading leftText={'year.'} rightText={block.year.toString()} />
          {block.publications.map((publication) => (
            <div className={styles['publications__info']}>
              <p className={styles['publications__authors']}>{publication.authors}</p>
              <div className={styles['publications__name']}>
                {publication.link ? (
                  <Link to={publication.link} className={styles['publications__text']}>
                    {publication.name.toUpperCase()}
                  </Link>
                ) : (
                  <div className={styles['publications__text']}>
                    {publication.name.toUpperCase()}
                  </div>
                )}
                <span className={styles['publications__addition']}>{publication.addition}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PublicationsPage;
