import { useTranslation } from 'react-i18next';
import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, EducationProps, Image, SubHeading, Text } from '../../../../shared';
import { FC } from 'react';

export const CourseBlock: FC<EducationProps> = ({
  img,
  sectionName,
  descriptionTitle,
  leftDescription,
  rightDescription,
  listValues = 'a',
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles['block_wrapper'], styles['info_text'])}>
      <SubHeading leftText={`${listValues}.`} rightText={t(sectionName)} />
      <div className={cn(styles['info_block'], styles['info_wrapper'])}>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['two_column']}>
            <Image
              image={img}
              width='740px'
              height='373px'
              classNames={styles['education__bigImage']}
            />
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['two_columns']}>
            <Text tag='span' size='sxs' weight='medium'>
              {t(descriptionTitle)}
            </Text>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['info_wrapper']}>
            <Text tag='span' size='xs' weight='regular'>
              {t(leftDescription)}
            </Text>
          </div>
          <Text tag='span' size='xs' weight='regular'>
            {t(rightDescription)}
          </Text>
        </div>
        <div className={styles['row']}>
          <div></div>
          <Button theme='primary' tName='more'>
            Learn more
          </Button>
          <div></div>
        </div>
      </div>
    </div>
  );
};
