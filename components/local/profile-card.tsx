import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { SkillsCard } from "./skills-card";
import { DetailsSkillsTabs } from "./details-skills-tabs";

function Avatar() {
  return (
    <div className="aspect-square rounded-full w-25 md:w-140 overflow-hidden border-2"></div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs md:text-sm text-muted-foreground">
        {label}
      </Label>
      <Field className="text-sm md:text-base wrap-anywhere">{value}</Field>
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
          <Button className="w-fit cursor-pointer">
            <SiGithub />
            <span className="hidden md:block">{value}</span>
          </Button>
        </a>
      ) : (
        <a
          href="https://www.linkedin.com/in/athanasios-georgalis-3a848a23a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <Button variant="outline" className="w-fit cursor-pointer">
            <SiLinkedin />
            <span className="hidden md:block">{value}</span>
          </Button>
        </a>
      )}
    </div>
  );
}

export function Details() {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12 w-full rounded-2xl border p-5 bg-[#d0d0d0]">
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
    <Card className="w-full h-full text-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-base">My Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 h-full">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-full h-fit">
          <Avatar />
          <div className="hidden md:block w-full">
            <Details />
          </div>
          <div className="block md:hidden w-full">
            <DetailsSkillsTabs />
          </div>
        </div>
        <div className="hidden md:block">
          <SkillsCard />
        </div>
      </CardContent>
    </Card>
  );
}
