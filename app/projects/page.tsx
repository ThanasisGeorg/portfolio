import Link from "next/link";
import { projects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-16 md:px-8">
      <div className="mb-6">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="mb-10 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
          GitHub Projects
        </p>
        <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
          Project Collection
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
          Browse selected repositories from my GitHub profile and open a
          detailed page for each project.
        </p>
      </div>

      <Card className="glass-panel rounded-3xl border-primary/15">
        <CardHeader>
          <CardTitle className="text-base tracking-wide uppercase text-muted-foreground">
            All Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Field
                key={project.slug}
                className="rounded-2xl border border-border/60 bg-white/55 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="mb-1 text-xs font-medium tracking-wide text-primary uppercase">
                  {project.category}
                </p>
                <h2 className="mb-2 text-xl font-semibold">{project.name}</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={`${project.slug}-${tech}`}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-primary/25 bg-white/70"
                >
                  <Link href={`/projects/${project.slug}`}>View details</Link>
                </Button>
              </Field>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
