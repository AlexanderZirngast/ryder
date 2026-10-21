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
              <SheetTitle className={"font-semibold text-sm"}>{panel.title}</SheetTitle>

              <SheetDescription className="sr-only">
                {panel.description}
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 pl-4">
              {panel.content}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}