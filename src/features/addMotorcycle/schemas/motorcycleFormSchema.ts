import { z } from "zod";

const nonNegativeNumber = (label: string) =>
  z.number({ error: `${label} must be a number.` }).min(0, `${label} cannot be negative.`);

export const MotorcycleFormSchema = z.object({
  manufacturer: z.string().trim().min(1, "Manufacturer is required."),
  model: z.string().trim().min(1, "Model is required."),
  year: z.number({ error: "Year is required." })
    .int("Year must be a whole number.")
    .min(1885, "Year must be 1885 or later.")
    .max(new Date().getFullYear() + 1, "Year cannot be more than one year in the future."),
  color: z.string().regex(/^#[0-9a-f]{6}$/i, "Choose a valid color."),
  powerHP: nonNegativeNumber("Power"),
  odoMeter: nonNegativeNumber("Odometer"),
  licensePlate: z.string().trim().optional(),
  vin: z.string().trim().toUpperCase()
    .refine((value) => value === "" || /^[A-HJ-NPR-Z0-9]{17}$/.test(value),
      "VIN must contain exactly 17 characters and cannot include I, O, or Q.")
    .optional(),
  purchasedDate: z.union([z.literal(""), z.iso.date({ error: "Enter a valid purchase date." })]).optional(),
  purchasedPrice: nonNegativeNumber("Purchase price").optional(),
  engineDisplacement: nonNegativeNumber("Engine displacement").optional(),
  powerKw: nonNegativeNumber("Power").optional(),
  fuelType: z.enum(["PETROL", "ELECTRIC"], { error: "Select a fuel type." }),
});

export type MotorcycleFormValues = z.infer<typeof MotorcycleFormSchema>;
