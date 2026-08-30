import PageContainer from "../../components/ui/PageContainer";

function HomePage() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <PageContainer>
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
      </PageContainer>
    </section>
  );
}

export default HomePage;
