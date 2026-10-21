import type { LucideIcon } from "lucide-react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import type { ControllerRenderProps } from "react-hook-form";
import type { MotorcycleFormValues } from "../schemas/motorcycleFormSchema";

interface FormInputProps {
  controllerField: ControllerRenderProps<MotorcycleFormValues>;
  error?: string;
  step?: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "date";
  icon?: LucideIcon;
  required?: boolean;
}

export function FormInput({
  controllerField,
  error,
  step,
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  required = false,
}: FormInputProps) {
  const invalid = !!error;

  return (
    <Field data-invalid={invalid}>
      <FieldLabel htmlFor={name}>
        {label} {required && "*"}
      </FieldLabel>

      <InputGroup>
        <InputGroupInput
          {...controllerField}
          value={controllerField.value ?? ""}
          onChange={(event) => {
            const value = event.target.value;
            controllerField.onChange(type === "number"
              ? value === "" ? undefined : Number(value)
              : value);
          }}
          step={step}
          aria-invalid={invalid}
          aria-describedby={error ? `${name}-error` : undefined}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
        />

        {Icon && (
          <InputGroupAddon>
            <Icon />
          </InputGroupAddon>
        )}
      </InputGroup>
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </Field>
  );
}
