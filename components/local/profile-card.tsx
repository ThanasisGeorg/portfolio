import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SkillsCard } from "./skills-card";
import { DetailsSkillsTabs } from "./details-skills-tabs";
import { Separator } from "../ui/separator";

function Avatar() {
  return (
    <div className="glass-panel flex aspect-square w-28 items-center justify-center rounded-full border-2 border-primary/35 text-2xl font-bold text-primary md:w-40">
      TG
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </Label>
      <Field className="rounded-xl border border-border/60 bg-white/45 px-3 py-2 text-sm shadow-sm backdrop-blur-sm md:text-base">
        {value}
      </Field>
    </div>
  );
}

function Media({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs md:text-sm text-muted-foreground">
        {label}
      </Label>
      {label === "Github" ? (
        <a
          href="https://github.com/ThanasisGeorg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <Button className="w-fit cursor-pointer rounded-full">
            <SiGithub />
            <span>{value}</span>
          </Button>
        </a>
      ) : (
        <a
          href="https://www.linkedin.com/in/athanasios-georgalis-3a848a23a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <Button variant="outline" className="w-fit cursor-pointer rounded-full">
            <SiLinkedin />
            <span>{value}</span>
          </Button>
        </a>
      )}
    </div>
  );
}

export function Details() {
  return (
    <div className="glass-panel grid w-full gap-6 rounded-2xl p-4 md:grid-cols-2 md:gap-8 md:p-6">
      <div className="flex flex-col gap-6">
        <Detail label="Full Name" value="Thanasis Georgalis" />
        <Detail label="Location" value="Thessaloniki, Greece" />
        <Detail label="University" value="International Hellenic University" />
        <Detail
          label="Department"
          value="Information & Electronic Engineering"
        />
        <Detail label="Languages" value="Greek, English" />
      </div>
      <div className="flex flex-col gap-6">
        <Detail label="Role" value="Software Developer" />
        <Detail label="Email" value="thanasisgeorg03@gmail.com" />
        <Media label="Github" value="ThanasisGeorg" />
        <Media label="Linkedin" value="Athanasios Georgalis" />
      </div>
    </div>
  );
}

export function ProfileCard() {
  return (
    <Card className="glass-panel h-full w-full rounded-3xl border-primary/15 text-2xl">
      <CardHeader>
        <CardTitle className="text-base tracking-wide uppercase text-muted-foreground">
          My Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 h-full">
        <div className="flex h-fit w-full flex-col items-center gap-5 md:flex-row md:gap-10">
          <Avatar />
          <div className="hidden md:block w-full">
            <Details />
          </div>
          <div className="block md:hidden w-full">
            <DetailsSkillsTabs />
          </div>
        </div>
        <Separator className="hidden md:block bg-primary/20" />
        <div className="hidden md:block">
          <SkillsCard />
        </div>
      </CardContent>
    </Card>
  );
}
