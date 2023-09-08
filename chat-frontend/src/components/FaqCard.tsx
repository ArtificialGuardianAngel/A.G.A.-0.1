"use client";
import React, { useState } from "react";
import cn from "classnames";
import { TriangleArrowIcon } from "./Icons";

interface Props {
  question: string;
  answer: string;
}

const FaqCard: React.FC<Props> = ({ question, answer }) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="rounded-[10px] bg-white/[0.03] shadow-lg">
      <div className="p-[30px] max-[480px]:p-[30px_20px] font-bold flex items-center gap-[20px]">
        <span className="flex-1 max-[480px]:text-[15px]">{question}</span>
        <button
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10"
          onClick={() => setOpened((prev) => !prev)}
        >
          <span
            className={cn("transition-all", {
              ["rotate-90"]: !opened,
              ["rotate-[-90deg]"]: opened,
            })}
          >
            <TriangleArrowIcon color="#D6E1FA" />
          </span>
        </button>
      </div>

      {opened && (
        <div className="p-[0_30px_30px] max-[480px]:p-[0_20px_30px] max-[480px]:text-[15px]">
          {answer.split("\n").map((el, i, { length }) => (
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
