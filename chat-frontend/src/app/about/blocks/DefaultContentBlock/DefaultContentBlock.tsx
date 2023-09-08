import React, { Fragment, useContext } from 'react';
import cn from 'classnames';
import { BaseProps } from '../../util/types';
import { Button } from '../../components';
import StageContext from '../../context/StageContext';

import styles from './DefaultContentBlock.module.scss';
import FormContext from '../../context/FormContext';

interface ButtonProps {
  type?: 'link' | 'button';
  text: string;
  value: number | string;
  role?: string;
}

interface DefaultContentBlockProps {
  title?: string;
  paragraphs?: React.ReactNode[];
  buttons?: ButtonProps[];
}

type Props = DefaultContentBlockProps & BaseProps;

const DefaultContentBlock: React.FC<Props> = ({
  className,
  title,
  paragraphs,
  buttons,
}) => {
  const { setStage } = useContext(StageContext);
  const { setRole } = useContext(FormContext);

  return (
    <div className={cn(styles.wrapper, className)}>
      {title && <h2 className={styles.title}>{title}</h2>}

      {paragraphs && (
        <div className={styles.paragraphs}>
          {paragraphs.map((par, i) => (
            <Fragment key={i}>{par}</Fragment>
          ))}
        </div>
      )}

      {buttons && (
        <div className={styles.buttons}>
          {buttons.map(({ text, value, type, role }, i) => (
            <Button
              key={i}
              type={type}
              {...(type === 'link'
                ? { href: typeof value === 'string' ? value : '/' }
                : {
                    onClick: () => {
                      role && setRole(role);
                      setStage(typeof value === 'number' ? value : 0);
                    },
                  })}
            >
              {text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DefaultContentBlock;
