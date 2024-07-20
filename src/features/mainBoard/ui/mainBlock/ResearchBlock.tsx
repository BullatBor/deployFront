import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, Image, Text } from '../../../../shared';
import { useTranslation } from 'react-i18next';

export const ResearchBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={cn(styles['row'], styles['section_title'])}>
          <Text tag='span' size='xss' weight='regular'>
            {`a.`}
          </Text>
          <div className={cn(styles['title_text'], styles['two_column'])}>{t('main.research')}</div>
        </div>
      </div>
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div className={styles['researchImages']}>
            <div className={styles['research__visibleOn900']}>
              <Image
                image='default'
                width='150px'
                height='90px'
                classNames={styles['research__smallImage']}
              />
            </div>
            <Image image='default' classNames={styles['research__bigImage']} />
          </div>

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
          <div className={styles['research__hideBlock']}>
            <Image image='default' width='150px' height='90px' />
          </div>
        </div>
      </div>
    </div>
  );
};
