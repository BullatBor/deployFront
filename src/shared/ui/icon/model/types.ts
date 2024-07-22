import { ImgHTMLAttributes, SVGProps } from 'react';

export type TPngImageNames = 'SP-University' | 'Polytech' | 'NII-Smor' | 'default';
export type TSvgImageNames = 'SP-University';
export type TSvgIconNames =
  | 'news-icon'
  | 'arrow-right'
  | 'arrow-up'
  | 'dna'
  | 'menu'
  | 'cross'
  | 'clear';

export type TAllImages = TSvgImageNames | TPngImageNames;
export type TIcons = Record<TSvgIconNames, string | SVGProps<SVGSVGElement>>;
export type TImages = Record<TAllImages, string>;

interface IProps {
  width?: string;
  height?: string;
  widthAndHeight?: string;
  classNames?: string;
}

export type IIconProps = {
  icon: TSvgIconNames;
} & IProps &
  SVGProps<SVGSVGElement>;

export type IImageProps = {
  image: TSvgImageNames | TPngImageNames;
} & IProps &
  Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;
