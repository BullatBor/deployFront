import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Icon, Image, SubHeading, Text } from '@/shared';
import { RESEARCH_CARD } from '../../shared/constant';
import { useNavigate } from 'react-router-dom';

export const ResearchAreas = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={cn(styles['block_wrapper'], styles['info_text'], styles['margin_top'])}>
      <SubHeading leftText={'a.'} rightText={t('research.research')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['two_column'], styles['research'])}>
            {RESEARCH_CARD.map((item) => (
              <div className={styles['research__cards']}>
                <div>
                  <Image image={item.img} classNames={styles['research__researchCardImage']} />
                </div>
                <div className={styles['research__card']} onClick={() => navigate(item.link)}>
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
