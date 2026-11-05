import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge, Calendar, Zap, Trash2, SquarePen } from "lucide-react";
import Image from "next/image";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { deleteMotorcyle } from "../actions";

interface MotorcycleCardProps {
  motorcycle: {
    id: string;
    manufacturer: string;
    model: string;
    year: number;
    powerHp?: number | null;
    odometer?: number | null;
    imageUrl?: string | null;
  };
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  return (
    <Card className=" max-w-sm  overflow-hidden p-0 transition-shadow hover:shadow-lg">
      <div className="relative h-40 bg-muted">
        <h1 className="text-xl p-5">{motorcycle.manufacturer} {motorcycle.model}</h1>
        {motorcycle.imageUrl ? (
          <Image
            src={motorcycle.imageUrl}
            alt={`${motorcycle.manufacturer} ${motorcycle.model}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No image available
          </div>
        )}
      
      </div>

      <CardContent className="max-h-32 space-y-4 p-5">
        <div>
        
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground">
          <Badge variant={"secondary"} className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            <span>{motorcycle.year}</span>
          </Badge>

          <Badge variant={"secondary"} className="flex items-center gap-1.5">
            <Zap className="size-4" />
            <span>{motorcycle.powerHp ?? "—"} HP</span>
          </Badge>

          <Badge variant={"secondary"} className="flex items-center gap-1.5">
            <Gauge className="size-4" />
            <span>
              {motorcycle.odometer?.toLocaleString() ?? "—"} km
            </span>
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Field orientation={"horizontal"} className="flex justify-end gap-2">
            <Button variant={"ghost"}><SquarePen  className="w-4 h-4"/></Button>
            <Button variant={"ghost"} onClick={() => deleteMotorcyle(motorcycle.id)}><Trash2/></Button>
        </Field>
      </CardFooter>
    </Card>
  );
}