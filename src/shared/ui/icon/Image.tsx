import { CSSProperties, FC } from 'react';
import { IImageProps, TImages } from './model/types';
import SPSULogo from './assets/images/SPSU.png';
import PolyTech from './assets/images/Polytech.png';
import NiiSmor from './assets/images/NII-Smor.png';
import defaultPng from './assets/images/default.png';

export const SVGImages: TImages = {
  'SP-University': SPSULogo,
  Polytech: PolyTech,
  'NII-Smor': NiiSmor,
  default: defaultPng,
};

export const Image: FC<IImageProps> = (props) => {
  const { image, height, width, widthAndHeight, ...rest } = props;

  const getSize = (): CSSProperties => {
    const size: CSSProperties = {};
    if (height) size.height = height;
    if (width) size.width = width;
    return size;
  };

  const sizeStyle = widthAndHeight ? { width: widthAndHeight, height: widthAndHeight } : getSize();

  return (
    <img
      src={SVGImages[image]}
      alt={rest?.alt || image}
      data-testid={`image-${image}`}
      style={{ ...sizeStyle }}
      {...rest}
    />
  );
};
