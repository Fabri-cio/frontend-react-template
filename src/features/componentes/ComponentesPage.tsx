import { useState } from "react";

import Button from "../../components/ui/Button";
import FormField from "../../components/forms/FormField";
import Input from "../../components/ui/Input";

export default function ComponentesPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="py-12 sm:py-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Sistema UI</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Componentes
          </h1>

          <p className="mt-4 text-muted-foreground">
            Catálogo interno de componentes reutilizables. Esta página sirve
            como referencia para conocer cómo utilizar cada componente, sus
            propiedades y sus diferentes estados.
          </p>
        </div>

        {/* FormField */}
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">FormField</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Componente utilizado para agrupar un campo de formulario con su
              etiqueta, descripción y mensaje de error.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Ejemplo */}
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-semibold">Ejemplo</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Campo básico con etiqueta y descripción.
              </p>

              <div className="mt-6">
                <FormField
                  label="Correo electrónico"
                  htmlFor="email"
                  description="Utiliza un correo electrónico válido."
                  required
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormField>
              </div>
            </div>

            {/* Error */}
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="text-lg font-semibold">Estado con error</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Cuando existe un error, el mensaje se muestra automáticamente.
              </p>

              <div className="mt-6">
                <FormField
                  label="Nombre de usuario"
                  htmlFor="username"
                  error="El nombre de usuario es obligatorio."
                  required
                >
                  <Input
                    id="username"
                    type="text"
                    placeholder="Nombre de usuario"
                    error
                  />
                </FormField>
              </div>
            </div>
          </div>

          {/* API */}
          <div className="mt-8 rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold">Propiedades</h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 font-semibold">Propiedad</th>
                    <th className="px-4 py-3 font-semibold">Tipo</th>
                    <th className="px-4 py-3 font-semibold">Requerido</th>
                    <th className="px-4 py-3 font-semibold">Descripción</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">label</td>
                    <td className="px-4 py-3 font-mono">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Texto que aparece encima del campo.
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">
                      htmlFor
                    </td>
                    <td className="px-4 py-3 font-mono">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Identificador asociado al campo del formulario.
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">error</td>
                    <td className="px-4 py-3 font-mono">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Mensaje de error mostrado debajo del campo.
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">
                      description
                    </td>
                    <td className="px-4 py-3 font-mono">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Texto de ayuda mostrado debajo del campo.
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">
                      required
                    </td>
                    <td className="px-4 py-3 font-mono">boolean</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Muestra un indicador visual de campo obligatorio.
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-4 py-3 font-mono text-primary">
                      className
                    </td>
                    <td className="px-4 py-3 font-mono">string</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">
                      Permite agregar clases CSS personalizadas.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3 font-mono text-primary">
                      children
                    </td>
                    <td className="px-4 py-3 font-mono">ReactNode</td>
                    <td className="px-4 py-3">Sí</td>
                    <td className="px-4 py-3">
                      Campo de formulario que será renderizado.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Usage */}
          <div className="mt-8 rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="text-lg font-semibold">Uso</h3>

            <pre className="mt-4 overflow-x-auto rounded-lg bg-secondary p-4 text-sm">
              <code>{`<FormField
  label="Correo electrónico"
  htmlFor="email"
  description="Utiliza un correo electrónico válido."
  required
>
  <Input
    id="email"
    type="email"
    placeholder="correo@ejemplo.com"
  />
</FormField>`}</code>
            </pre>
          </div>
        </section>

        {/* Próximamente */}
        <section className="mt-12">
          <div className="rounded-xl border border-dashed p-6">
            <h2 className="text-lg font-semibold">Próximamente</h2>

            <p className="mt-2 text-sm text-muted-foreground">
              En esta misma página documentaremos los demás componentes del
              sistema UI: Button, Input, Select, Textarea, Checkbox, Card,
              Badge, Alert, Spinner, Dropdown y Modal.
            </p>

            <div className="mt-4">
              <Button variant="outline" disabled>
                Componentes pendientes
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
