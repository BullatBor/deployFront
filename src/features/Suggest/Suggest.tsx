import { FC, LegacyRef, memo } from 'react';
import { IParticipant } from '@/shared';
import styles from './Suggest.module.scss';
import { Chipter } from '../Chipter';
import cn from 'classnames';
import { FixedSizeList as List } from 'react-window';

interface SuggestProps {
  data: IParticipant[] | null | undefined;
  suggestRef: null | LegacyRef<HTMLDivElement>;
  addParticipant: (data: IParticipant) => void;
}

export const Suggest: FC<SuggestProps> = memo(({ data, suggestRef, addParticipant }) => {
  return (
    <div className={cn(styles.wrapper)} ref={suggestRef}>
      {data ? (
        data.length > 0 ? (
          <List
            height={300}
            itemCount={data.length}
            itemSize={80}
            width={400}
            className={styles.list}
          >
            {({ index, style }) => (
              <Chipter
                key={data[index].userId}
                {...data[index]}
                style={style}
                addParticipant={addParticipant}
              />
            )}
          </List>
        ) : (
          <div>Ничего не нашлось</div>
        )
      ) : (
        <div className={styles.preloader}>Loading...</div>
      )}
    </div>
  );
});
