import { useContext, useEffect } from 'react';
import { animated, useSpringRef, useTransition } from '@react-spring/web';
import StageContext from '../../context/StageContext';
import { STAGE_BLOCKS } from '../../util/stage-blocks';

const Content = () => {
  const { stage } = useContext(StageContext);

  const transRef = useSpringRef();
  const [transitions] = useTransition(stage, () => ({
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    exitBeforeEnter: true,
    config: {
      duration: 500,
    },
  }));

  useEffect(() => {
    transRef.start();
  }, [stage, transRef]);

  // return <>{STAGE_BLOCKS[stage]}</>;
  return transitions((style, i) => {
    return (
      <animated.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        {STAGE_BLOCKS[i]}
      </animated.div>
    );
  });
};

export default Content;
