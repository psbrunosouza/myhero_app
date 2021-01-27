import React from 'react';
import styled from 'styled-components';
import preset from '../../../config/presetConfig.json';

const InputStyle = styled.input`

  background: ${preset.theme.colors.secondary};
  border: 0;
  height: 32px;
  padding: 0 8px;
  border-radius: 10px;

  &:focus {
    border: 1px solid ${preset.theme.colors.button};
    outline: none;
  }

  &::placeholder {
    color: ${preset.theme.colors.placeholder};
  }
`;

export default function Input({
  isFilled,
  placeholder,
  type,
  ...rest
}) {
  return <InputStyle placeholder={placeholder} type={type} {...rest} />;
}
