"use client";

import { ProfileCard } from "@/components/local/profile-card";
import { ProjectsCard } from "@/components/local/projects-card";
import { Typewriter } from "@/components/local/type-writer";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

function Greeting({ text }: { text: string }) {
  return <Typewriter text={text} speed={90} />;
}

function Bio({ text, magicPhrase }: { text: string; magicPhrase: string }) {
  const firstHalf = text.slice(0, text.indexOf("Since"));
  const secondHalf = text.slice(text.indexOf("Since"), text.length);

  return (
    <div className="flex flex-col gap-5 text-xl md:text-3xl text-center w-fit md:w-300">
      <Field>{firstHalf}</Field>
      <Field className="flex flex-col justify-center items-center">
        {secondHalf}
        <span className="font-semibold w-fit!">{magicPhrase}</span>
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
    <Button className="cursor-pointer shadow-xl" onClick={handleClick}>
      Profile
    </Button>
  );
}

function NavProjects() {
  const handleClick = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      className="cursor-pointer shadow-xl"
      onClick={handleClick}
    >
      Projects
    </Button>
  );
}

function WelcomeSection() {
  return (
    <section className="flex flex-col gap-15 h-screen items-center justify-center p-2">
      <Greeting text="Hi, my name is Thanasis Georgalis and i am a developer" />
      <Bio
        text="
          I study at the Department of Information and Electronic Engineering 
          at the International Hellenic University in Thessaloniki, Greece.
          Since my childhood, i play videogames and spend time with my PC, 
          but i had never been involded in coding. Things changed when i entered
          the university. Through it, i discovered a whole new fascinating world 
          and learned a new art . . .
        "
        magicPhrase="the art of Code"
      />
      <div className="flex flex-row gap-5 justify-center items-center">
        <NavProfile />
        <NavProjects />
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="h-screen items-center p-5">
      <ProfileCard />
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="h-screen items-center p-5">
      <ProjectsCard />
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <WelcomeSection />
      <ProfileSection />
      <ProjectsSection />
    </div>
  );
}
