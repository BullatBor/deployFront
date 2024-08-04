import { SubHeading, Image, Text, IOtherStudies } from '@/shared';
import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
interface IPROPS {
  studies: IOtherStudies[];
}
export const OtherStudies: FC<IPROPS> = ({ studies }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const clickHandle = (link: string) => {
    navigate(`/${link}`);
  };
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'b.'} rightText={t('research.otherStudies')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div></div>
          {studies.map(({ img, description, link }) => {
            return (
              <div className={styles['research1__otherStudies']} onClick={() => clickHandle(link)}>
                <Image image={img} classNames={styles['research1__otherStudiesImg']} />
                <Text tag='span' size='sxs' weight='medium'>
                  {t(description)}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
