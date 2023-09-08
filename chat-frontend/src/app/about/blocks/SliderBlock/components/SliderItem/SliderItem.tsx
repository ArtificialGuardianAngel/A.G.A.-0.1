import React, { useContext } from 'react';
import { Button } from '../../../../components';

import styles from './SliderItem.module.scss';
import StageContext from '../../../../context/StageContext';
import FormContext from '../../../../context/FormContext';

interface SliderItemProps {
  title: string;
  description: string;
  value: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  title,
  description,
  value,
}) => {
  const { setStage, stagesCount } = useContext(StageContext);
  const { setRole } = useContext(FormContext);

  const onClick = () => {
    setRole(value);
    setStage(stagesCount - 1);
  };

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>

      <div className={styles.description}>{description}</div>

      <Button className={styles.button} onClick={() => onClick()}>
        Join Now
      </Button>
    </div>
  );
};

export default SliderItem;
