import React, { createContext, useState } from 'react';

interface IStageContext {
  stage: number;
  stagesCount: number;
  nextStage: () => void;
  prevStage: () => void;
  setStage: (stage: number) => void;
}

const defaultValue: IStageContext = {
  stage: 0,
  stagesCount: 0,
  nextStage: () => undefined,
  prevStage: () => undefined,
  setStage: () => undefined,
};

const StageContext = createContext<IStageContext>(defaultValue);

export default StageContext;

interface StageContextProviderProps {
  stagesCount: number;
}

type Props = StageContextProviderProps & React.PropsWithChildren;

export const StageContextProvider: React.FC<Props> = ({
  children,
  stagesCount,
}) => {
  const [stage, setStage] = useState<number>(0);

  return (
    <StageContext.Provider
      value={{
        stage,
        stagesCount,
        setStage,
        prevStage: () => setStage((v) => (v - 1 >= 0 ? v - 1 : 0)),
        nextStage: () => setStage((v) => (v + 1 < stagesCount ? v + 1 : v)),
      }}
    >
      {children}
    </StageContext.Provider>
  );
};
