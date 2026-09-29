"use client";

import { useContext } from "react";
import { SidePanelContext } from "./side-panel-provider";

export function useSidePanel() {
  const context = useContext(SidePanelContext);

  if (!context) {
    throw new Error(
      "useSidePanel must be used within a SidePanelProvider",
    );
  }

  return context;
}