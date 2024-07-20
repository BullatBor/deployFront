import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Icon, Image, Text } from '@/shared';
import { RESEARCH_CARD } from '../../shared/constant';

export const ResearchAreas = () => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles['block_wrapper'], styles['info_text'], styles['margin_top'])}>
      <div className={styles['block_title']}>
        <div className={cn(styles['row'], styles['section_title'])}>
          <Text tag='span' size='xss' weight='regular'>
            a.
          </Text>
          <div className={cn(styles['title_text'], styles['two_column'])}>
            {t('research.research')}
          </div>
        </div>
      </div>
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['two_column'], styles['research'])}>
            {RESEARCH_CARD.map((item) => (
              <div className={styles['research__cards']}>
                <div>
                  <Image image={item.img} classNames={styles['research__researchCardImage']} />
                </div>
                <div className={styles['research__card']}>
                  <div>
                    <Text tag='span' size='sxs' weight='medium'>
                      {item.description}
                    </Text>
                  </div>
                  <div>
                    <Icon icon='arrow-right' width='18' height='9.63' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
