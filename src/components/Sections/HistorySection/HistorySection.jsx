import React from 'react';
import SectionInput from '../../SectionInput/SectionInput';
import { Spring, animated } from 'react-spring';


export default function HistorySection({ section }) {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <SectionInput section={section} />
        </animated.div>
      )}
    </Spring>
  );
}
