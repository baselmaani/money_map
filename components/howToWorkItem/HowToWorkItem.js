import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utls/theme';

const StyledCircle = styled.section`
  background-color: transparent;
  position: relative;
  width: 150px;
  height: 150px;
  box-shadow: none;
  padding: 10px;
  border-radius: 50%;
  color: ${(props) => (props.variant === 'filled' ? '#fff' : props.color)};
  fill: ${(props) => (props.variant === 'filled' ? '#fff' : props.color)};
  overflow: hidden;
  border: 1px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
`;

function HowToWorkItem({
  variant = 'outlined',
  color = theme.colors.primary,
  image,
  title,
  description,
  from = 'left',
  props,
}) {
  return (
    <Container>
      <StyledCircle variant={variant} color={color}>
        <img src={image} width='75px' height={'auto'} />
      </StyledCircle>
      <div style={{ textAlign: 'center' }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
  );
}

export default HowToWorkItem;
