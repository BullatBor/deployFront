import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, SubHeading, Text } from '../../../../shared';
import { useTranslation } from 'react-i18next';
import { Image } from '../../../../shared/ui/icon/Image';

export const Students = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'d.'} rightText={t('main.students')} />
      <div className={cn(styles['info_block'], styles['student_wrapper'])}>
        <div className={styles['row']}>
          <div className={styles['left_image_wrapper']}>
            <Image image='default' width='190px' height='239px' classNames={styles['leftImage']} />
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='sxs' weight='regular'>
              {t('main.studentTitle')}
            </Text>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              01/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              {t('main.studentDescr1')}
            </Text>
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              03/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              {t('main.studentDescr3')}
            </Text>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              02/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              {t('main.studentDescr2')}
            </Text>
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              04/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              {t('main.studentDescr4')}
            </Text>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['two_column']}>
            <Button tName='writeUs' width='max'>
              Write to us
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
