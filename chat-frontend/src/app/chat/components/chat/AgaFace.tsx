import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

const AgaFace: React.FC<Props> = ({ className }) => {
  return (
    <video
      src='/videos/idle.webm'
      className={cn('w-full h-full rounded-[10px]', className)}
      autoPlay
      muted
      loop
    />
  );
};

export default AgaFace;
