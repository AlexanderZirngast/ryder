import { FieldSet, FieldGroup, Field } from "@/components/ui/field";
import { FormFieldRenderer } from "./forms/form-field-renderer";
import { motorcycleFields } from "./forms/motorcycle-fields";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { MotorcycleFormSchema } from "./schemas/motorcycleFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
export default function MotorcycleForm() {
  const form = useForm<z.infer<typeof MotorcycleFormSchema>>({
    resolver: zodResolver(MotorcycleFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      color: "",
      model: "",
      manufacturer: "",
      vin: "",
    },
  });
  function onSubmit(data: z.infer<typeof MotorcycleFormSchema>) {

    
  }
  return (
    <div className="flex flex-col px-4">
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup className="grid grid-cols-2 gap-6">
            {motorcycleFields.map((field) => (
              <Controller
                key={field.name}
                name={field.name}
                control={form.control}
                render={({ field: controllerField, fieldState }) => (
                  <FormFieldRenderer
                    field={field}
                    controllerField={controllerField}
                    error={fieldState.error?.message}
                  />
                )}
              />
            ))}
          </FieldGroup>

          <Field orientation={"horizontal"} className="top-0">
            <Button type="submit">Create</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
}
