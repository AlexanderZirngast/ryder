"use client";
import { Motorcycle, PrismaClient } from "@/generated/prisma/client";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { getAllMotorcycles } from "../actions";
import { MotorcycleCard } from "./MotorcycleCard";
import { Card, CardContent } from "@/components/ui/card";
import { CirclePlus } from "lucide-react";
import { useSidePanel } from "@/features/creation/use-side-panel";
import MotorcycleForm from "@/features/addMotorcycle/motorcycle-form";
export default function Overview() {
  const session = authClient.useSession();
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>();
  useEffect(() => {
    const loadData = async () => {
      if (session.data?.user)
        setMotorcycles(await getAllMotorcycles(session.data?.user.id));
    };
    loadData();
  }, []);

  const { openPanel } = useSidePanel();
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4">
      {motorcycles?.map((motorcycle) => {
        return <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />;
      })}

      <Card
        onClick={() =>
          openPanel({
            content: <MotorcycleForm />,
            title: "Add Motorcycle",
            description: "Enter your motorcycle details.",
          })
        }
        className="cursor-pointer max-w-sm h-64 overflow-hidden p-0 hover:shadow-lg border-dashed border-2 hover:dark:border-white/50 dark:bg-[#0A0A0A] text-muted-foreground dark:hover:text-white hover:text-black transition-[color,border-color,box-shadow] duration-200 ease-in-out delay-100 tra "
      >
        <CardContent className="flex items-center justify-center h-64 p-5">
          <p className="flex gap-2 items-center">
            <CirclePlus /> Add Motorcycle
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
