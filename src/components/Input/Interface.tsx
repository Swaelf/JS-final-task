import React from 'react';

export default interface Interface {
  onChange?: (() => void),
  className?: string,
  text?: string,
  type?: string,
  placeholder?: string,
  inputRef?: React.RefObject<HTMLInputElement>|null,
}