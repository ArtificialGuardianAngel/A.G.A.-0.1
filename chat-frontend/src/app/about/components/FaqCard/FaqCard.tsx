import React, { useState } from 'react';
import cn from 'classnames';

import styles from './FaqCard.module.scss';

interface Props {
  question: string;
  answer: string;
}

const FaqCard: React.FC<Props> = ({ question, answer }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.question}>{question}</span>
        <button
          className={styles.button}
          onClick={() => setOpened((prev) => !prev)}
        >
          <svg
            width='6'
            height='10'
            viewBox='0 0 6 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={cn(styles.buttonInner, {
              [styles.opened]: opened,
            })}
          >
            <path
              id='Vector'
              d='M0.976562 1L5.01957 5.04301L0.976563 9'
              stroke='#D6E1FA'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      {opened && (
        <div className={styles.answer}>
          {answer.split('\n').map((el, i, { length }) => (
            <React.Fragment key={i}>
              {el}
              {i < length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqCard;
