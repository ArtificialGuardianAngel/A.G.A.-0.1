import React, { useMemo } from 'react';
import logo from '@/assets/icons/nuah-logo.svg';

const BotEndTag = '</bot>';
interface Props {
  message: string;
  isMe: boolean;
  isGenerating?: boolean;
  isLast?: boolean;
  prompt?: (data: string) => void;
}

const Message: React.FC<Props> = ({
  message,
  isMe,
  isGenerating,
}) => {
  const formattedMessage = useMemo(() => {
    const hasEndTag = message.includes(BotEndTag);
    let suffix = '';
    if (!isMe && !hasEndTag) suffix = '...';
    const content = message.trim().replace(BotEndTag, '') + suffix;
    const messageParts = content.split('\n');
    const msg = messageParts.map((part, idx) => (
      <React.Fragment key={idx}>
        {part && (
          <>
            <div>
              {part}
              {idx >= messageParts.length - 1 && isGenerating && !isMe && (
                <span className="inline-block w-[.5ch] bg-white/80 h-3 animate-ping" />
              )}
            </div>
            {idx < messageParts.length - 1 && <br />}
          </>
        )}
      </React.Fragment>
    ));
    return <>{msg}</>;
  }, [message, isGenerating, isMe]);

  if (isMe) {
    return (
      <div className="bg-white/[0.03] p-[30px] rounded-[10px] flex gap-[30px] wishes-md:p-[20px] wishes-md:flex-col wishes-md:gap-[10px] wishes-md:text-sm shadow">
        <div className="w-[110px] text-accent-green font-bold">
          Your message:
        </div>
        <div className="flex-1 text-blue-4">{formattedMessage}</div>
      </div>
    );
  }

  return (
    <div className="flex gap-[30px] p-[50px] wishes-md:p-[30px_20px] wishes-md:flex-col wishes-md:gap-[25px]">
      <div className="w-[90px] text-accent-green">
        <div className="flex gap-[10px] items-center font-bold wishes-md:text-sm">
          <img className="wishes-md:hidden" src={logo} alt="" />
          <span>A.G.A.</span>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-[20px]">
          {/* <h4 className="text-[15px] text-accent-green font-medium leading-[10px] wishes-md:text-[13px]">
            Assistant mode:
          </h4> */}

          <div className="leading-[20px] wishes-md:text-sm">
            {formattedMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
