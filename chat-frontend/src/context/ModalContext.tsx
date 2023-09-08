"use client";
import {
    PropsWithChildren,
    createContext,
    useCallback,
    useMemo,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { Modal } from "../components/Modal";

interface IContext {
    isOpen: boolean;

    open: VoidFunction;
    close: VoidFunction;
}

export const ModalContext = createContext<IContext>({
    isOpen: false,
    open: () => console.warn("Empty context"),
    close: () => console.warn("Empty context"),
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const state: IContext = useMemo(
        () => ({ isOpen, open, close }),
        [isOpen, open, close],
    );
    return (
        <ModalContext.Provider value={state}>
            {children}
            {isOpen && createPortal(<Modal title="Modal" />, document.body)}
        </ModalContext.Provider>
    );
};
