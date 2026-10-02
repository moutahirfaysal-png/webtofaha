import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Settings } from './types';
import { fetchSettings } from './data';

interface SettingsContextValue {
  settings: Settings | null;
  loading: boolean;
  refresh: () => void;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    fetchSettings().then((data) => {
      setSettings(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, refresh: load }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
