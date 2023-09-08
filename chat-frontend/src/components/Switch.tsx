import React from 'react';
import cn from 'classnames';

interface Props {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: React.FC<Props> = ({ label, checked = false, onChange }) => {
  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer"
      onClick={() => onChange?.(!checked)}
    >
      {label && <span className="text-sm text-white font-medium">{label}</span>}
      <div className="rounded-sm bg-white/20 w-8 p-0.5">
        <div
          className={cn('w-3 h-3 bg-blue-2 rounded-full transition-all', {
            'translate-x-4': checked,
            'bg-accent-green': checked,
          })}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
