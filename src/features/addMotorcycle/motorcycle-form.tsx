import {
  FieldSet,
  FieldGroup,
  Field,
} from "@/components/ui/field";
import { FormFieldRenderer } from "./forms/form-field-renderer";
import { motorcycleFields } from "./forms/motorcycle-fields";
import { Button } from "@/components/ui/button";

export default function MotorcycleForm() {
  return (
    <div className="flex flex-col px-4">
      <FieldSet>
        <FieldGroup className="grid grid-cols-2 gap-6">
          {motorcycleFields.map((field) => (
            <FormFieldRenderer key={field.name} field={field} />
          ))}
        </FieldGroup>

        <Field orientation={"horizontal"} className="top-0">
          <Button type="submit">Create</Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </FieldSet>
    </div>
  );
}
