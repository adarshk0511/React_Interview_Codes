import { createContext, useMemo, useState } from "react";
import { initialFlags } from "../data/featureFlags";

export const FeatureFlagContext = createContext(null);

export function FeatureFlagProvider({ children }) {
  const [flags, setFlags] = useState(initialFlags);

  const isEnabled = (flagName) => {
    return !!flags[flagName];
  };

  const toggleFlag = (flagName) => {
    setFlags((prev) => ({
      ...prev,
      [flagName]: !prev[flagName],
    }));
  };

  const value = useMemo(() => {
    return { flags, isEnabled, toggleFlag };
  }, [flags]);

  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
