import React from 'react';

interface Props {
  title: string;
  text: string;
}

const TermsAndConditionsCard: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="p-[30px] max-[480px]:p-[30px_20px] bg-white/[0.03] shadow-lg rounded-[10px] flex gap-[20px] max-[767px]:flex-col">
      <div className="font-bold flex-initial w-[220px]">{title}</div>
      <div className="flex-1 text-white font-light">
        {text.split('\n').map((item, idx) => (
          <>
            <div key={idx}>{item}</div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsCard;
