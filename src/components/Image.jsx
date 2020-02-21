import React from 'react';
import { Image as Img } from 'react-native';
import useLDflexValue from '../hooks/useLDflexValue';

/** Displays an image whose source is a Solid LDflex expression. */
export default function Image({ src, defaultSrc, children = null, ...props }) {
  src = useLDflexValue(src) || defaultSrc;
  return src ? <Img source={{ uri: src.toString() }} alt="" {...props}/> : children;
}
