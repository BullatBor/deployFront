import { CSSProperties, FC } from 'react';
import { IImageProps, TImages } from './model/types';
import SPSULogo from './assets/images/SPSU.png';
import PolyTech from './assets/images/Polytech.png';
import NiiSmor from './assets/images/NII-Smor.png';
import defaultPng from './assets/images/default.png';
import errorElement from './assets/images/errorElement.png';
import academicTree from './assets/images/academic_tree.png';
import research1_main from './assets/images/research1_main.png';
import research2_main from './assets/images/research2_main.png';
import research3_main from './assets/images/research3_main.png';
import research2 from './assets/images/research2.png';
import research2_1 from './assets/images/research2_1.png';
import research2_2 from './assets/images/research2_2.png';
import research2_3 from './assets/images/research2_3.png';

export const SVGImages: TImages = {
  'SP-University': SPSULogo,
  Polytech: PolyTech,
  'NII-Smor': NiiSmor,
  default: defaultPng,
  errorElement: errorElement,
  academicTree: academicTree,
  research1_main: research1_main,
  research2_main: research2_main,
  research3_main: research3_main,
  research2: research2,
  research2_1: research2_1,
  research2_2: research2_2,
  research2_3: research2_3,
};

export const Image: FC<IImageProps> = (props) => {
  const { image, height, width, widthAndHeight, classNames, ...rest } = props;

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
      className={classNames}
      data-testid={`image-${image}`}
      style={classNames ? {} : { ...sizeStyle }}
      {...rest}
    />
  );
};
