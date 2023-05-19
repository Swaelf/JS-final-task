import React from 'react';

export default interface Interface {
  onChange?: (() => void),
  text?: string,
  placeholder?: string,
  inputRef?: React.RefObject<HTMLInputElement>|null,
}