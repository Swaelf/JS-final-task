import React from 'react';

export default interface Interface {
  labelRef?: React.RefObject<HTMLLabelElement>|null,
  text: string|number,
  className: string,
  onClick: (() => void)
}