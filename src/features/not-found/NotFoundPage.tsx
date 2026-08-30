import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="container flex min-h-[60vh] items-center justify-center py-12">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-primary">404</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Página no encontrada
        </h1>

        <p className="mt-4 text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
