import React from 'react';
import styled from 'styled-components';
import preset from '../../../config/presetConfig.json';

export const ButtonStyle = styled.button`
  flex: 1;
  margin-top: 16px;
  background-color: ${preset.theme.colors.button};
  border: 0;
  border-radius: 10px;
  padding: 8px 0px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${preset.theme.colors.buttonHover};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
    background-color: ${preset.theme.colors.button};
  }

  &:focus {
    outline: none;
  }


`;

function Button({
  placeholder, type, children, isDisabled, ...rest
}) {
  return (
    <ButtonStyle placeholder={placeholder} type={type} {...rest}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
