import { ImgHTMLAttributes, SVGProps } from 'react';

export type TPngImageNames =
  | 'SP-University'
  | 'Polytech'
  | 'NII-Smor'
  | 'default'
  | 'errorElement'
  | 'academicTree'
  | 'research1_main'
  | 'research2_main'
  | 'research3_main'
  | 'research1'
  | 'research1_1'
  | 'research1_2'
  | 'research1_3'
  | 'research1_4'
  | 'research1_5'
  | 'research2'
  | 'research2_1'
  | 'research2_2'
  | 'research2_3'
  | 'research3'
  | 'research3_1'
  | 'about2'
  | 'about3'
  | 'education1'
  | 'main1';
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
