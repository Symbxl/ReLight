import React, { createContext, useMemo, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>; // Change this accordingly
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

ThemeContext.displayName = 'ThemeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('#007FFF');

  const themeObject = useMemo(() => {
    return { theme, setTheme };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={themeObject}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
