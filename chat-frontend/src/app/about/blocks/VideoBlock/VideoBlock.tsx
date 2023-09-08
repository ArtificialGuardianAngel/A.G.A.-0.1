import React from 'react';

import styles from './VideoBlock.module.scss';

interface VideoBlockProps {
  video?: string;
  title?: string;
}

type Props = VideoBlockProps;

const VideoBlock: React.FC<Props> = ({ video, title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.videoWrapper}>
        <div className={styles.video}>
          {video && (
            <iframe
              width='100%'
              height='100%'
              src={`${video}?autoplay=1&loop=1&controls=0&rel=0&showinfo=0`}
            ></iframe>
          )}
        </div>
      </div>

      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};

export default VideoBlock;
