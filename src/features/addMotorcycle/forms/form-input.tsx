import type { LucideIcon } from "lucide-react";

import { Field, FieldLabel } from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "date";
  icon?: LucideIcon;
  required?: boolean;
}

export function FormInput({
  name,
  label,
  placeholder,
  type = "text",
  icon: Icon,
  required = false,
}: FormInputProps) {
  return (
    <Field>
      <FieldLabel htmlFor={name}>
        {label} {required && "*"}
      </FieldLabel>

      <InputGroup>
        <InputGroupInput
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
    </Field>
  );
}
