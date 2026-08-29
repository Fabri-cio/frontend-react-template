import { useTheme } from "./hooks/useTheme";

function App() {
  const {setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container flex min-h-16 items-center justify-between gap-4">
          <span className="font-semibold">Frontend Template</span>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className="rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground"
            >
              Light
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className="rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground"
            >
              Dark
            </button>

            <button
              type="button"
              onClick={() => setTheme("system")}
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
            >
              System
            </button>
          </div>
        </div>
      </header>

      <section className="container py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Frontend Template</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Una base simple para construir cualquier frontend.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            React, TypeScript, Vite y Tailwind con una arquitectura sencilla,
            responsive y preparada para crecer.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
