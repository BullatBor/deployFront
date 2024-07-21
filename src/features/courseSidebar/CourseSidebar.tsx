import { FC } from 'react';
import styles from './CourseSideBar.module.scss';
import { ISidebar_items, Text } from '@/shared';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface PROPS {
  items: ISidebar_items[];
}

export const CourseSidebar: FC<PROPS> = ({ items }) => {
  return (
    <div className={styles['sidebar']}>
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.url}
          className={({ isActive }) =>
            cn(styles['sidebar__item'], { [styles['active']]: isActive })
          }
        >
          <Text tag='h1' size='xs' weight='semibold'>
            {item.title}
          </Text>
        </NavLink>
      ))}
    </div>
  );
};
