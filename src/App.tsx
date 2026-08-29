import { useState } from "react";

import Alert from "./components/ui/Alert";
import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/Card";
import Checkbox from "./components/ui/Checkbox";
import { Dropdown, DropdownItem } from "./components/ui/Dropdown";
import Input from "./components/ui/Input";
import Label from "./components/ui/Label";
import Modal from "./components/ui/Modal";
import Select from "./components/ui/Select";
import Spinner from "./components/ui/Spinner";
import Textarea from "./components/ui/Textarea";
import FormField from "./components/forms/FormField";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleLoading = () => {
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex min-h-16 flex-col items-start justify-between gap-4 py-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="font-semibold">Frontend React Template</h1>
            <p className="text-sm text-muted-foreground">
              Design System Playground
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={theme === "light" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setTheme("light")}
            >
              Light
            </Button>

            <Button
              variant={theme === "dark" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>

            <Button
              variant={theme === "system" ? "primary" : "secondary"}
              size="sm"
              onClick={() => setTheme("system")}
            >
              System
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="container space-y-8 py-8 sm:py-12">
        {/* Intro */}
        <section>
          <Badge>Design System</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Componentes reutilizables
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Esta página sirve para comprobar visualmente los componentes,
            estados, responsive y temas de nuestra plantilla.
          </p>
        </section>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Variantes, tamaños, loading y ancho completo.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleLoading} loading={loading}>
                {loading ? "Procesando..." : "Primary"}
              </Button>

              <Button variant="secondary">Secondary</Button>

              <Button variant="destructive">Destructive</Button>

              <Button variant="ghost">Ghost</Button>

              <Button size="sm">Small</Button>

              <Button size="lg">Large</Button>
            </div>

            <div className="mt-4 max-w-md">
              <Button fullWidth>Full Width</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges + Alerts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Estados y etiquetas.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Mensajes informativos.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <Alert>Este es un mensaje informativo.</Alert>

              <Alert variant="success">
                Operación realizada correctamente.
              </Alert>

              <Alert variant="destructive">Ha ocurrido un error.</Alert>
            </CardContent>
          </Card>
        </div>

        {/* Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Form Controls</CardTitle>
            <CardDescription>
              Componentes básicos para formularios.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                label="Nombre"
                htmlFor="name"
                description="Introduce tu nombre completo."
              >
                <Input id="name" placeholder="Juan Pérez" />
              </FormField>

              <FormField
                label="Email"
                htmlFor="email"
                error="Introduce un email válido."
              >
                <Input
                  id="email"
                  type="email"
                  error
                  placeholder="correo@ejemplo.com"
                />
              </FormField>

              <FormField label="País" htmlFor="country">
                <Select id="country" defaultValue="">
                  <option value="" disabled>
                    Selecciona un país
                  </option>
                  <option value="bo">Bolivia</option>
                  <option value="mx">México</option>
                  <option value="es">España</option>
                  <option value="us">Estados Unidos</option>
                </Select>
              </FormField>

              <FormField label="Mensaje" htmlFor="message">
                <Textarea id="message" placeholder="Escribe tu mensaje..." />
              </FormField>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Checkbox
                id="terms"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
              />

              <Label htmlFor="terms">Acepto los términos y condiciones</Label>
            </div>
          </CardContent>

          <CardFooter className="gap-3">
            <Button disabled={!checked}>Continuar</Button>

            <Button variant="secondary">Cancelar</Button>
          </CardFooter>
        </Card>

        {/* Dropdown + Modal + Spinner */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dropdown</CardTitle>
              <CardDescription>Menú contextual.</CardDescription>
            </CardHeader>

            <CardContent>
              <Dropdown
                trigger={
                  <span className="inline-flex rounded-md bg-secondary px-4 py-2 text-sm font-medium">
                    Abrir menú
                  </span>
                }
              >
                <DropdownItem onClick={() => alert("Editar")}>
                  Editar
                </DropdownItem>

                <DropdownItem onClick={() => alert("Duplicar")}>
                  Duplicar
                </DropdownItem>

                <DropdownItem destructive onClick={() => alert("Eliminar")}>
                  Eliminar
                </DropdownItem>
              </Dropdown>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modal</CardTitle>
              <CardDescription>Ventana modal.</CardDescription>
            </CardHeader>

            <CardContent>
              <Button onClick={() => setModalOpen(true)}>Abrir modal</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spinner</CardTitle>
              <CardDescription>Estados de carga.</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-6">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Responsive */}
        <Card>
          <CardHeader>
            <CardTitle>Responsive</CardTitle>
            <CardDescription>
              Mobile-first utilizando los breakpoints de Tailwind.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-secondary p-4">
                <p className="font-medium">Mobile</p>
                <p className="mt-1 text-sm text-muted-foreground">1 columna</p>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="font-medium">Tablet</p>
                <p className="mt-1 text-sm text-muted-foreground">2 columnas</p>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="font-medium">Desktop</p>
                <p className="mt-1 text-sm text-muted-foreground">4 columnas</p>
              </div>

              <div className="rounded-lg bg-secondary p-4">
                <p className="font-medium">Container</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ancho limitado
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modal de prueba"
      >
        <p className="text-sm text-muted-foreground">
          Este modal comprueba apertura, cierre, Escape y bloqueo del scroll.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancelar
          </Button>

          <Button onClick={() => setModalOpen(false)}>Aceptar</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
