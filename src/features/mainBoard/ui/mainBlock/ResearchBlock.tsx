import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { Button, Image, SubHeading } from '../../../../shared';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ResearchBlock = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const moreHandler = () => {
    navigate('/research');
  };
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'a.'} rightText={t('main.research')} />
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
            <div className={styles['info_text']}>{t('main.researchDescr1')}</div>
            <div className={styles['info_text']}>{t('main.researchDescr2')}</div>
            <Button theme='primary' tName='more' onClick={moreHandler}>
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
