import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-16 md:px-8">
      <div className="mb-6">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/projects">
            <ArrowLeft />
            Back to projects
          </Link>
        </Button>
      </div>

      <Card className="glass-panel rounded-3xl border-primary/15">
        <CardHeader className="gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
            <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.status}
            </span>
          </div>
          <CardTitle className="text-3xl font-semibold md:text-4xl">
            {project.name}
          </CardTitle>
          <p className="text-base text-muted-foreground">{project.description}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Field className="overflow-hidden rounded-2xl border border-border/60 bg-linear-to-br from-primary/20 to-cyan-400/15 p-0 shadow-sm">
            <div className="flex min-h-44 items-center justify-center p-6 text-center md:min-h-56">
              <div>
                <p className="text-sm font-medium tracking-[0.16em] uppercase text-muted-foreground">
                  Preview
                </p>
                <p className="mt-2 text-lg font-semibold md:text-xl">
                  {project.name} Snapshot
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add screenshots here anytime to visually showcase this project.
                </p>
              </div>
            </div>
          </Field>

          <Field className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  Main Language
                </p>
                <p className="text-lg font-semibold">{project.language}</p>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                  Repository
                </p>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {project.repoUrl.replace("https://github.com/", "github.com/")}
                </a>
              </div>
            </div>
          </Field>

          <Field className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm">
            <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={`${project.slug}-${tech}`}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Field>

          <Field className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm">
            <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Highlights
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-foreground/90">
                  - {highlight}
                </li>
              ))}
            </ul>
          </Field>

          <div className="grid gap-4 md:grid-cols-2">
            <Field className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Layers className="size-4" />
                Challenges
              </p>
              <ul className="space-y-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="text-sm text-foreground/90">
                    - {challenge}
                  </li>
                ))}
              </ul>
            </Field>

            <Field className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm">
              <p className="mb-3 flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Sparkles className="size-4" />
                What I Learned
              </p>
              <ul className="space-y-2">
                {project.learned.map((item) => (
                  <li key={item} className="text-sm text-foreground/90">
                    - {item}
                  </li>
                ))}
              </ul>
            </Field>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github />
                Open repository
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink />
                View on GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
