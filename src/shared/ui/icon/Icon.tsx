import { FC, SVGProps } from 'react';
import { IIconProps, TIcons } from '.';
import NewIcon from './assets/icons/news-icon.svg?react';

export const SVGIcons: TIcons = {
  'news-icon': NewIcon,
};

export const Icon: FC<IIconProps> = (props) => {
  const {
    icon,
    height = '24px',
    width = '24px',
    widthAndHeight,
    ...rest
  } = props;
  const ComponentSVG = SVGIcons[icon] as FC<SVGProps<SVGSVGElement>>;

  if (!(icon in SVGIcons)) return null;
  return (
    <ComponentSVG
      width={widthAndHeight ? widthAndHeight : width}
      height={widthAndHeight ? widthAndHeight : height}
      data-testid={`icon-${icon}`}
      {...rest}
    />
  );
};
