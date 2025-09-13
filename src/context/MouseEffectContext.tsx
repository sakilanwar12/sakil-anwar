// contexts/MouseEffectContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MouseEffectSettings {
  enabled: boolean;
  particleCount: number;
  colors: string[];
  cursorColor: string;
}

interface MouseEffectContextValue {
  settings: MouseEffectSettings;
  updateSettings: (newSettings: Partial<MouseEffectSettings>) => void;
  toggleEffect: () => void;
}

const MouseEffectContext = createContext<MouseEffectContextValue | undefined>(undefined);

export const useMouseEffectContext = (): MouseEffectContextValue => {
  const context = useContext(MouseEffectContext);
  if (!context) {
    throw new Error('useMouseEffectContext must be used within MouseEffectProvider');
  }
  return context;
};

interface MouseEffectProviderProps {
  children: ReactNode;
}

export const MouseEffectProvider: React.FC<MouseEffectProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<MouseEffectSettings>({
    enabled: true,
    particleCount: 15,
    colors: ['#ff006e', '#8338ec', '#3a86ff'],
    cursorColor: 'cyan-400'
  });

  const updateSettings = (newSettings: Partial<MouseEffectSettings>): void => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const toggleEffect = (): void => {
    setSettings(prev => ({ ...prev, enabled: !prev.enabled }));
  };

  return (
    <MouseEffectContext.Provider value={{ settings, updateSettings, toggleEffect }}>
      {children}
    </MouseEffectContext.Provider>
  );
};