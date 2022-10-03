import React from 'react';
import { useCountUp } from 'react-countup';
import { theme } from '../../utls/theme';

function NumberCounter({
  value,
  id = 'counter',
  delay = 2,
  duration,
  color = theme.colors.black,
  props,
}) {
  useCountUp({ ref: `${id}`, end: value, delay: delay });
  return <span id={id} color={color} {...props} />;
}

export default NumberCounter;
