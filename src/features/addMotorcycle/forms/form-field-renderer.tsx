import { FormInput } from "./form-input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MotorcycleField } from "./motorcycle-fields";

interface Props {
  field: MotorcycleField;
}

export function FormFieldRenderer({ field }: Props) {
  switch (field.type) {
    case "text":
    case "number":
    case "date":
      return <FormInput {...field} />;

    case "color":
      return (
        <Field>
          <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>

          <Input
            id={field.name}
            name={field.name}
            type="color"
            required={field.required}
          />
        </Field>
      );

    case "select":
      return (
        <Field>
          <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>

          <Select name={field.name} required={field.required}>
            <SelectTrigger id={field.name}>
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
        </Field>
      );
  }
}
