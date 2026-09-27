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
export default function MotorcycleEmptyState() {
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
        <Button>Add data</Button>
      </EmptyContent>
    </Empty>
  );
}
