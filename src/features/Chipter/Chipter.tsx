import React, { FC } from 'react';
import { Icon, IParticipant, IUsers, Text } from '@/shared';
import s from './Chipter.module.scss';
import cn from 'classnames';

interface IChipterProps extends IUsers {
  courseId: string;
  style?: React.CSSProperties;
  addParticipant?: (data: IParticipant) => void;
  index?: number;
  deleteParticipant?: (index: number, userId: string) => void;
}

export const Chipter: FC<IChipterProps> = ({
  email,
  courseId,
  id,
  style,
  addParticipant,
  index,
  deleteParticipant,
}) => {
  const itemHandler = () => {
    if (addParticipant) addParticipant({ email, courseId, userId: id });
  };

  const deleteHandler = () => {
    if (deleteParticipant && (index || index === 0)) {
      deleteParticipant(index, id);
    }
  };

  return (
    <div style={style} className={cn(s.wrapper)} onClick={itemHandler}>
      <Text tag='span' size='xs' weight='regular'>
        {email}
      </Text>
      {deleteParticipant && (
        <Icon
          width='14px'
          height='14px'
          icon='delete'
          className={s['delete']}
          onClick={deleteHandler}
        />
      )}
    </div>
  );
};
