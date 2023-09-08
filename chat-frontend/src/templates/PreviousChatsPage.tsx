import { useContext } from 'react';
import cn from 'classnames';
import { AppContext } from '../context/AppContext';

const PreviousChatsPage = () => {
  const { chats, changeChat, chatId } = useContext(AppContext);
  return (
    <div>
      <h3 className="p-[30px_0] text-center text-[18px] font-bold uppercase mb-[20px] max-[480px]:text-[14px] max-[480px]:p-[15px_0_25px]">
        Previous Chats
      </h3>

      <div className="flex flex-col gap-[5px]">
        {chats.map((item, index) => (
          <div
            key={index}
            className={cn(
              'cursor-pointer p-[10px_20px] rounded-[50px] whitespace-nowrap text-ellipsis overflow-hidden',
              {
                'bg-white/10': chatId !== item._id,
                'bg-accent-green/40': chatId === item._id,
              }
            )}
            onClick={() => changeChat(item._id)}
          >
            {new Date(item.updatedAt).toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousChatsPage;
