import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, Text } from '../../../../shared';
import { useTranslation } from 'react-i18next';
import { Image } from '../../../../shared/ui/icon/Image';

export const Students = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={styles['row']}>
          <div className={styles['variant']}>d.</div>
          <div className={cn(styles['title_text'], styles['two_column'])}>
            {t('main.students')}
          </div>
        </div>
      </div>
      <div className={cn(styles['info_block'], styles['student_wrapper'])}>
        <div className={styles['row']}>
          <div className={styles['left_image_wrapper']}>
            <Image
              image='default'
              width='190px'
              height='239px'
              className={styles['leftImage']}
            />
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='sxs' weight='regular'>
              МЫ ИЩЕМ СТУДЕНТОВ И АСПИРАНТОВ, СПЕЦИАЛИЗИРУЮЩИХСЯ В РАЗЛИЧНЫХ
              ОБЛАСТЯХ ФИЗИКИ, ХИМИИ И БИОЛОГИИ, КОТОРЫЕ ХОТЯТ ПРОВОДИТЬ
              ИССЛЕДОВАНИЯ В ОБЛАСТИ:
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
              Разработка методов и программного обеспечения для компьютерного
              дизайна молекулярных систем
            </Text>
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              03/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              Разработка методов и программного обеспечения для моделирования
              сетей химических реакций
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
              Биомолекулярного инжиниринга – создания белков-сенсоров и
              белков-энзимов с заданными свойствами
            </Text>
          </div>
          <div className={styles['student']}>
            <Text tag='span' size='lsm' weight='medium'>
              04/
            </Text>
            <Text tag='span' size='xs' weight='regular'>
              Изучение процессов горения топлив с целью разработки новых более
              эффективных видов топлив
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
