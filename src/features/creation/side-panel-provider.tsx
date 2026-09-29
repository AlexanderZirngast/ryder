"use client";

import {
  createContext,
  ReactNode,
  useState,
} from "react";

type SidePanel = {
  title: string;
  content: ReactNode;
};

type SidePanelContextType = {
  panel: SidePanel | null;
  openPanel: (panel: SidePanel) => void;
  closePanel: () => void;
};

export const SidePanelContext =
  createContext<SidePanelContextType | null>(null);

export function SidePanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [panel, setPanel] = useState<SidePanel | null>(null);

  const openPanel = (panel: SidePanel) => {
    setPanel(panel);
  };

  const closePanel = () => {
    setPanel(null);
  };

  return (
    <SidePanelContext.Provider
      value={{
        panel,
        openPanel,
        closePanel,
      }}
    >
      {children}
    </SidePanelContext.Provider>
  );
}