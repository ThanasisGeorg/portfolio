import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectsCard() {
  return (
    <Card className="glass-panel h-full w-full rounded-3xl border-primary/15 text-2xl">
      <CardHeader>
        <CardTitle className="text-base tracking-wide uppercase text-muted-foreground">
          My Top Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <Field
              key={project.slug}
              className="rounded-2xl border border-border/60 bg-white/55 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.name}
              </h3>
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
  );
}
