import React from 'react';
import styles from './CustomButton.module.css';
import styled from 'styled-components';

const FilledButton = styled.button`
  background-color: transparent;
  position: relative;
  box-shadow: none;
  padding: 10px;
  border-radius: ${(props) => (props.rounding ? props.rounding : 0)}px;
  color: ${(props) => (props.variant === 'filled' ? '#fff' : props.color)};
  overflow: hidden;
  border: 1px solid ${(props) => props.color};
  :hover {
    color: ${(props) => (props.variant === 'filled' ? props.color : '#fff')};
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.variant === 'filled' ? '0' : '-100%')};
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${(props) => props.color},
      ${(props) => props.color}
    );
    z-index: -1;
    transition: 0.5s;
  }
  :hover:before {
    transform: ${(props) =>
      props.variant === 'filled' ? 'translateX(-100%)' : 'translateX(100%)'};
  }
`;

function CustomButton({
  variant = 'filled',
  rounding = 0,
  color,
  onClick,
  children,
  props,
}) {
  return (
    <FilledButton
      onClick={onClick}
      rounding={rounding}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </FilledButton>
  );
}

export default CustomButton;
