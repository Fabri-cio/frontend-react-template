import PageContainer from "../../components/ui/PageContainer";

function AboutPage() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <PageContainer>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">About</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Sobre esta plantilla
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Una base sencilla para construir aplicaciones frontend con React,
            TypeScript, Vite y Tailwind CSS.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

export default AboutPage;
