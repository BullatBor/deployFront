import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, Image } from '../../../../shared';
import { useTranslation } from 'react-i18next';

export const ResearchBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={styles['row']}>
          <div className={styles['variant']}>a.</div>
          <div className={cn(styles['title_text'], styles['two_column'])}>{t('main.research')}</div>
        </div>
      </div>
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <Image image='default' width='309px' height='324px' />
          <div className={cn(styles['info_wrapper'])}>
            <div className={styles['info_text']}>
              В нашей группе мы уделяем особое внимание разработке вычислительных методов и общих
              стратегий проектирования и оптимизации молекулярных инструментов и процессов.
            </div>
            <div className={styles['info_text']}>
              Мы также применяем эти методологии для разработки новых молекулярных и биомолекулярных
              систем, которые будут использоваться в биомедицинских исследованиях и фармакологии.
            </div>
            <Button theme='primary' tName='more'>
              Подробнее
            </Button>
          </div>
          <Image image='default' width='150px' height='90px' />
        </div>
      </div>
    </div>
  );
};
