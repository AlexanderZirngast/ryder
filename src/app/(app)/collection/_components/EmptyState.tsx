"use client"
import React from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import {  Motorbike } from "lucide-react";
import { useSidePanel } from "@/features/creation/use-side-panel";
export default function MotorcycleEmptyState() {

  const { openPanel } = useSidePanel();
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
            <Motorbike />
        </EmptyMedia>
        <EmptyTitle>No data</EmptyTitle>
        <EmptyDescription><p>You haven't added any motorcycle yet.</p><p>Get started by adding your first motorcycle.</p></EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={() => openPanel({
          content: <div>test</div>,
          title: "Add Motorcycle"
        })}>Add Motorcycle</Button>
      </EmptyContent>
    </Empty>
  );
}
