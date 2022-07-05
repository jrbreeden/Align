import React from 'react';
import SectionInput from '../../SectionInput/SectionInput';
import ResumeViewer from '../../../components/ResumeViewer/ResumeViewer';
import { Spring, animated } from 'react-spring';

export default function ProjectsSection({ section }) {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className='flex gap-x-40'>
            <SectionInput section={section} />
            <ResumeViewer section={section} />
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
