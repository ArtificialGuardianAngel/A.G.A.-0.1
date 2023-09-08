"use client";
import { createContext, useState } from "react";

interface IOverlayPageContext {
  opened: boolean;
  close: () => void;
  open: () => void;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
}

const defaultValue: IOverlayPageContext = {
  opened: false,
  close: () => {
    console.warn('Method not implemented')
    return;
  },
  open: () => {
    console.warn('Method not implemented')
    return;
  },
  content: null,
  setContent: () => {
    console.warn('Method not implemented')
    return;
  },
};

const OverlayPageContext = createContext<IOverlayPageContext>(defaultValue);

export const OverlayPageContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const open = () => setOpened(true);

  const close = () => setOpened(false);

  return (
    <OverlayPageContext.Provider
      value={{ opened, open, close, content, setContent }}
    >
      {children}
    </OverlayPageContext.Provider>
  );
};

export default OverlayPageContext;
