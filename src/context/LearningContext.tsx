import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LearningContextProps {
  enteredAnswer: string;
  setEnteredAnswer: React.Dispatch<React.SetStateAction<string>>;
}

interface LearningProviderProps {
  children: ReactNode;
}

const LearningContext = createContext<LearningContextProps | undefined>(undefined);

export const LearningProvider: React.FC<LearningProviderProps> = ({ children }) => {
  const [enteredAnswer, setEnteredAnswer] = useState<string>('');

  return (
    <LearningContext.Provider value={{ enteredAnswer, setEnteredAnswer }}>
      {children}
    </LearningContext.Provider>
  );
};

export const useLearningContext = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearningContext must be used within a LearningProvider');
  }
  return context;
};
