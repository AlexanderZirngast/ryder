"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { useSidePanel } from "./use-side-panel";

export function SidePanel() {
  const { panel, closePanel } = useSidePanel();

  return (
    <Sheet
      open={panel !== null}
      onOpenChange={(open) => {
        if (!open) {
          closePanel();
        }
      }}
    >
      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-xl"
      >
        {panel && (
          <>
            <SheetHeader>
              <SheetTitle>{panel.title}</SheetTitle>

              <SheetDescription className="sr-only">
                {panel.title}
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6">
              {panel.content}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}