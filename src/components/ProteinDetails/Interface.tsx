import React from 'react';

export default interface Interface {
  labelRef?: React.RefObject<HTMLLabelElement>|null,
  details: string,
  className?: string,
  onClick?: (() => void)
}