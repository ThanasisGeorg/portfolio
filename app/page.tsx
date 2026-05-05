"use client";

import { ProfileCard } from "@/components/local/profile-card";
import { ProjectsCard } from "@/components/local/projects-card";
import { Typewriter } from "@/components/local/type-writer";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Greeting({ text }: { text: string }) {
  return <Typewriter text={text} speed={90} />;
}

function Bio() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 text-center">
      <Field className="glass-panel reveal-up rounded-2xl p-4 text-base leading-relaxed md:p-6 md:text-xl">
        I study at the Department of Information and Electronic Engineering at
        the International Hellenic University in Thessaloniki, Greece.
      </Field>
      <Field className="glass-panel reveal-up reveal-delay-1 rounded-2xl p-4 text-base leading-relaxed md:p-6 md:text-xl">
        Since my childhood, I have loved videogames and computers. University
        helped me discover a new world and turn that passion into
        <span className="ml-1 font-semibold text-primary">the art of code.</span>
      </Field>
    </div>
  );
}

function NavProfile() {
  const handleClick = () => {
    const section = document.getElementById("profile");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      className="cursor-pointer rounded-full px-6 shadow-md hover:shadow-lg"
      onClick={handleClick}
    >
      Profile
    </Button>
  );
}

function NavProjects() {
  return (
    <Button
      asChild
      variant="outline"
      className="rounded-full border-primary/25 bg-white/50 px-6 shadow-md hover:shadow-lg"
    >
      <Link href="/projects">Projects</Link>
    </Button>
  );
}

function WelcomeSection() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-16 md:px-8"
    >
      <Greeting text="Hi, my name is Thanasis Georgalis and I am a developer." />
      <Bio />
      <div className="reveal-up reveal-delay-2 flex flex-row items-center justify-center gap-4">
        <NavProfile />
        <NavProjects />
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section
      id="profile"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-16 md:px-8"
    >
      <h2 className="section-title mb-4">Profile</h2>
      <Separator className="mb-6 bg-primary/20" />
      <div className="reveal-up">
        <ProfileCard />
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-16 md:px-8"
    >
      <h2 className="section-title mb-4">Projects</h2>
      <Separator className="mb-6 bg-primary/20" />
      <div className="reveal-up">
        <ProjectsCard />
      </div>
      <div className="mt-6 flex justify-center">
        <Button asChild className="rounded-full px-6 shadow-md hover:shadow-lg">
          <Link href="/projects">Open full projects page</Link>
        </Button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-4 py-16 md:px-8"
    >
      <h2 className="section-title mb-4">Contact</h2>
      <Separator className="mb-6 bg-primary/20" />
      <Field className="glass-panel reveal-up rounded-3xl p-6 text-center md:p-10">
        <p className="text-sm tracking-[0.16em] uppercase text-muted-foreground">
          Let&apos;s build something together
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground md:text-lg">
          Feel free to reach out for collaborations, opportunities, or project
          discussions.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="rounded-full px-6">
            <a href="mailto:thanasisgeorg03@gmail.com">Email me</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <a
              href="https://www.linkedin.com/in/athanasios-georgalis-3a848a23a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
          </Button>
        </div>
      </Field>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <WelcomeSection />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
