import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Icon, Image, SubHeading, Text } from '@/shared';
import { RESEARCH_CARD } from '../../shared/constant';
import { useNavigate } from 'react-router-dom';

export const ResearchAreas = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const clickHandler = (research: string) => {
    navigate(`/${research}`);
  };
  return (
    <div className={cn(styles['block_wrapper'], styles['info_text'], styles['margin_top'])}>
      <SubHeading leftText={'a.'} rightText={t('research.research')} />
      <div className={cn(styles['info_block'], styles['research__cards'])}>
        {RESEARCH_CARD.map(({ img, description, link }) => (
          <>
            <div className={cn(styles['row'], styles['research__cardWrapper'])}>
              <div></div>
              <Image
                image={img}
                classNames={styles['research__researchCardImage']}
                onClick={() => clickHandler(link)}
              />
              <div className={styles['research__card']}>
                <div>
                  <Text tag='span' size='sxs' weight='medium'>
                    {description}
                  </Text>
                </div>
                <div>
                  <Icon icon='arrow-right' width='18' height='9.63' />
                </div>
              </div>
            </div>
            <div className={styles['row']}>
              <div></div>
              <div className={cn(styles['two_column'], styles['research__borderBottom'])}></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
