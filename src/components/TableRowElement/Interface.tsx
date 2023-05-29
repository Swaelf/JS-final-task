import React from 'react';

export default interface Interface {
  buttonRef?: React.RefObject<HTMLButtonElement>|null,
  to?: string,
  text?: string|number,
  className: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>|any,
  disabled?: boolean
}