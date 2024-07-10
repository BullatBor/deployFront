import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, Text, Image } from '../../../../shared';
import { useTranslation } from 'react-i18next';

export const EducationBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={styles['row']}>
          <div className={styles['variant']}>b.</div>
          <div className={cn(styles['title_text'], styles['two_column'])}>
            {t('main.education')}
          </div>
        </div>
      </div>
      <div className={cn(styles['info_block'], styles['info_wrapper'])}>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['two_column']}>
            <Image image='default' width='740px' height='373px' />
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['info_text'], styles['two_columns'])}>
            <Text tag='span' size='sxs' weight='medium'>
              ОНЛАЙН-КУРС ПО МОДЕЛИРОВАНИЮ ХИМИЧЕСКИХ РЕАКЦИЙ.
            </Text>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['info_wrapper']}>
            <div className={styles['info_text']}>
              В рамках данного 10-недельного курса обучающиеся научатся
              использовать методы квантовой химии и проводить расчеты свойств
              химических веществ и моделирование химических реакций, в том числе
              с использованием суперкомпьютеров.
            </div>
            <Button theme='primary' tName='more'>
              Подробнее
            </Button>
          </div>
          <div className={styles['info_text']}>
            Мы также применяем эти методологии для разработки новых молекулярных
            и биомолекулярных систем, которые будут использоваться в
            биомедицинских исследованиях и фармакологии.
          </div>
        </div>
      </div>
    </div>
  );
};
