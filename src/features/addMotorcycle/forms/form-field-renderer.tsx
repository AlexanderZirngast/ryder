import { FormInput } from "./form-input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MotorcycleField } from "./motorcycle-fields";
import { ControllerRenderProps } from "react-hook-form";

import { MotorcycleFormSchema } from "../schemas/motorcycleFormSchema";
import z from "zod";


type MotorcycleFormValues = z.infer<typeof MotorcycleFormSchema>;
interface Props {
  field: MotorcycleField;
  controllerField: ControllerRenderProps<MotorcycleFormValues>;
  error?: string; 
}

export function FormFieldRenderer({ field, controllerField, error }: Props) {
  const { value, onChange, onBlur, ref: inputRef } = controllerField;

  const invalid = !!error;

  switch (field.type) {
    case "text":
    case "number":
    case "date":
      return <FormInput {...field} controllerField={controllerField} error={error} />;

    case "color":
      return (
        <Field data-invalid={invalid}>
          <FieldLabel htmlFor={field.name}>{field.label} {field.required && "*"}</FieldLabel>

          <Input
          {...controllerField}
            id={field.name}
            name={field.name}
            type="color"
            value={value ?? "#000000"}
            aria-invalid={invalid}
            aria-describedby={error ? `${field.name}-error` : undefined}
            required={field.required}
          />
        {error && <FieldError id={`${field.name}-error`}>{error}</FieldError>}
        </Field>
      );

    case "select":
      return (
        <Field data-invalid={invalid}>
          <FieldLabel htmlFor={field.name}>{field.label} {field.required && "*"}</FieldLabel>

          <Select value={typeof value === "string" && value !== "" ? value : null} name={field.name} required={field.required} onValueChange={onChange}>
            <SelectTrigger id={field.name} ref={inputRef} onBlur={onBlur} aria-invalid={invalid} aria-describedby={error ? `${field.name}-error` : undefined}>
              <SelectValue
                placeholder={field.placeholder ?? "Select an option"}
              >
                {(value) => {
                  const option = field.options.find((o) => o.value === value);
                  const Icon = option?.icon;

                  return option ? (
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="size-4" />}
                      {option.label}
                    </span>
                  ) : null;
                }}
              </SelectValue>
            </SelectTrigger>

            <SelectContent>
              {field.options.map((option) => {
                const Icon = option.icon;

                return (
                  <SelectItem key={option.value} value={option.value}>
                    {Icon && <Icon className="size-4" />}
                    <span>{option.label}</span>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        {error && <FieldError id={`${field.name}-error`}>{error}</FieldError>}
        </Field>
      );
  }
}
