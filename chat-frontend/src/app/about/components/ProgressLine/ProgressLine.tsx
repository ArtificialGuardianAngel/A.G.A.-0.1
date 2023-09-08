import { useContext } from 'react';
import cn from 'classnames';
import StageContext from '../../context/StageContext';
import { BaseProps } from '../../util/types';

import styles from './ProgressLine.module.scss';

const ProgressLine: React.FC<BaseProps> = ({ className }) => {
  const { stage, stagesCount } = useContext(StageContext);

  return (
    <div className={cn(styles.progress, className)}>
      {Array.from(Array(stagesCount)).map((_, i) => (
        <div
          key={i}
          className={cn(styles.progressItem, { [styles.active]: stage === i })}
        ></div>
      ))}
    </div>
  );
};

export default ProgressLine;
