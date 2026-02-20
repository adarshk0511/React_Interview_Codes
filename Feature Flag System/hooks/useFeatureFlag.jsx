import { useContext } from "react";
import { FeatureFlagContext } from "../context/FeatureFlagContext";

export function useFeatureFlag() {
  const context = useContext(FeatureFlagContext);

  if (!context) {
    throw new Error("useFeatureFlag must be used within FeatureFlagProvider");
  }

  return context;
}
