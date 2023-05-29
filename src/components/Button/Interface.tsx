import React from 'react';

export default interface Interface {
  buttonRef?: React.RefObject<HTMLAnchorElement>|null,
  to?: string,
  text?: string,
  className: string,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>|any,
  disabled?: boolean
}