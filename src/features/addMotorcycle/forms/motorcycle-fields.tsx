import {
  Calendar,
  Palette,
  Hash,
  Gauge,
  Fuel,
  Zap,
  Wrench,
  Building2,
  IdCard,
  Motorbike,
  FuelIcon,
  EvCharger,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

type BaseField = {
  name: string;
  label: string;
  required?: boolean;
  icon?: LucideIcon;
};

type InputField = BaseField & {
  type: "text" | "number" | "date";
  placeholder?: string;
  step?: string;
};

type SelectField = BaseField & {
  type: "select";
  placeholder?: string;
  options: {
    icon?: LucideIcon;
    label: string;
    value: string;
  }[];
};

type ColorField = BaseField & {
  type: "color";
};

export type MotorcycleField = InputField | SelectField | ColorField;

export const motorcycleFields: MotorcycleField[] = [
  {
    name: "manufacturer",
    label: "Manufacturer",
    type: "text",
    placeholder: "BMW",
    icon: Building2,
    required: true,
  },
  {
    name: "model",
    label: "Model",
    type: "text",
    placeholder: "S1000 RR",
    icon: Motorbike,
    required: true,
  },
  {
    name: "year",
    label: "Year",
    type: "number",
    placeholder: "2024",
    icon: Calendar,
    required: true,
  },
  {
    name: "color",
    label: "Color",
    type: "color",
    icon: Palette,
    required: true,
  },
  {
    name: "powerHP",
    label: "Power (HP)",
    type: "number",
    placeholder: "210",
    icon: Zap,
    required: true,
    step: "0.1",
  },
  {
    name: "odoMeter",
    label: "Odometer (km)",
    type: "text",
    placeholder: "15000",
    icon: Gauge,
    required: true,
  },
  {
    name: "licensePlate",
    label: "License Plate",
    type: "text",
    placeholder: "G-123AB",
    icon: IdCard,
  },
  {
    name: "vin",
    label: "VIN",
    type: "text",
    placeholder: "WB10A...",
    icon: Hash,
  },
  {
    name: "purchasedDate",
    label: "Purchase Date",
    type: "date",
    icon: Calendar,
  },
  {
    name: "purchasedPrice",
    label: "Purchase Price (€)",
    type: "number",
    placeholder: "15000",
    step: "0.01",
  },
  {
    name: "engineDisplacement",
    label: "Engine Displacement",
    type: "number",
    placeholder: "999",
    icon: Wrench,
    step: "0.1",
  },
  {
    name: "powerKw",
    label: "Power (kW)",
    type: "number",
    placeholder: "154",
    icon: Zap,
    step: "0.1",
  },
  {
    name: "fuelType",
    label: "Fuel Type",
    type: "select",
    placeholder: "Select fuel type",
    icon: Fuel,
    required: true,
    options: [
      { label: "Petrol", value: "PETROL", icon: FuelIcon },
      { label: "Electric", value: "ELECTRIC", icon: EvCharger },
    ],
  },
];
