import React, { createContext, useMemo, useState, useContext, ReactNode } from 'react';

interface NightModeContextType {
  nightMode: boolean;
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NightModeContext = createContext<NightModeContextType | undefined>(undefined);

NightModeContext.displayName = 'NightModeContext';

export const useNightMode = (): NightModeContextType => {
  const context = useContext(NightModeContext);
  if (context === undefined) {
    throw new Error('useNightMode must be used within a NightModeProvider');
  }
  return context;
};

interface NightModeProviderProps {
  children: ReactNode;
}

const NightModeProvider: React.FC<NightModeProviderProps> = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  const nightModeObject = useMemo(() => {
    return { nightMode, setNightMode };
  }, [nightMode, setNightMode]);

  return (
    <NightModeContext.Provider value={nightModeObject}>
      {children}
    </NightModeContext.Provider>
  );
};

export default NightModeProvider;
