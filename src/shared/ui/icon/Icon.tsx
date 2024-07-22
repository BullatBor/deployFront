import { FC, SVGProps } from 'react';
import { IIconProps, TIcons } from '.';
import NewIconSVG from './assets/icons/news-icon.svg';
import ArrowRightSVG from './assets/icons/arrow-right.svg';
import ArrowUpSVG from './assets/icons/arrow-up.svg';
import DnaSVG from './assets/icons/dna.svg';
import MenuSVG from './assets/icons/menu.svg';
import CrossSVG from './assets/icons/cross.svg';
import CloseSVG from './assets/icons/clear.svg';

export const SVGIcons: TIcons = {
  'news-icon': NewIconSVG,
  'arrow-right': ArrowRightSVG,
  'arrow-up': ArrowUpSVG,
  'dna': DnaSVG,
  'menu': MenuSVG,
  'cross': CrossSVG,
  'clear': CloseSVG,
};

export const Icon: FC<IIconProps> = (props) => {
  const { icon, height = '24px', width = '24px', widthAndHeight, ...rest } = props;
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
