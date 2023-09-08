import { ReactNode } from 'react';
import { Button } from '.';

type Props = {
  title: string;
  body?: ReactNode;
  okText?: ReactNode;
  cancelText?: ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

export const Modal = ({
  title,
  body,
  okText = 'Ok',
  cancelText = 'Cancel',
}: Props) => {
  return (
    <dialog
      open
      className="absolute left-0 right-0 top-[40%] m-auto p-4 rounded-[15px] w-[250px]"
    >
      <section id="heading">{title}</section>
      <section id="body">{body}</section>
      <section id="actions" className="flex gap-4 mt-4 flex-row-reverse">
        <Button>{okText}</Button>
        <Button>{cancelText}</Button>
      </section>
    </dialog>
  );
};
