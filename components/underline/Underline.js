import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useCountUp } from 'react-countup';

function Underline() {
  const ref = React.useRef(null);
  const [toggle, setToggle] = useState(false);
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    // we do *not* animating this property, we just set it up
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
  });
  useEffect(() => {
    // `setImmediate` is roughly equal to `setTimeout(() => { ... }, 0)
    // Using `setToggle` without `setImmediate` breaks the animation
    // as we first need to allow for the measurement of the `path`
    // lengths using `.getTotalLength()`
  }, []);

  return (
    <svg
      width='426'
      height='41'
      viewBox='0 0 426 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <animated.path
        d='M5.5 5H421L132.5 36H334'
        stroke='#3AA391'
        strokeWidth='10'
        strokeMiterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={animatedStyle}
        ref={(ref) => {
          // The ref is `null` on component unmount
          if (ref) {
            setLength(ref.getTotalLength());
          }
        }}
      />
    </svg>
  );
}

export default Underline;
