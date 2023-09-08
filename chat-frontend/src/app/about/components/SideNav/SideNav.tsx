import React, { useContext } from 'react';
import cn from 'classnames';
import StageContext from '../../context/StageContext';
import { BaseProps } from '../../util/types';

import styles from './SideNav.module.scss';

const SideNav: React.FC<BaseProps> = ({ className }) => {
  const { stage, setStage, stagesCount } = useContext(StageContext);

  return (
    <nav className={cn(styles.nav, className)}>
      {stage > 0 && (
        <button
          className={cn(styles.button, styles.top)}
          onClick={() => setStage(0)}
        >
          To top
        </button>
      )}
      {stage < stagesCount - 1 && (
        <button
          onClick={() => setStage(stagesCount - 1)}
          className={cn(styles.button, styles.bottom)}
        >
          To form
        </button>
      )}
    </nav>
  );
};

export default SideNav;
