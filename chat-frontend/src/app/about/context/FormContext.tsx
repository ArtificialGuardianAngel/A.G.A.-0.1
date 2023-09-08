import { FC, PropsWithChildren, createContext, useState } from 'react';

interface IFormContext {
  role: string;
  setRole: (role: string) => void;
}

const defaultValue: IFormContext = {
  role: 'Individual coder',
  setRole: () => undefined,
};

const FormContext = createContext(defaultValue);

type Props = PropsWithChildren;

export const FormContextProvider: FC<Props> = ({ children }) => {
  const [role, setRole] = useState('Individual coder');

  return (
    <FormContext.Provider value={{ role, setRole }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
