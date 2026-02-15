import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Avatar() {
  return (
    <div className="aspect-square rounded-full w-40 md:w-150 overflow-hidden border-2"></div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs md:text-base text-muted-foreground">
        {label}
      </Label>
      <Field className="text-sm md:text-2xl wrap-anywhere">{value}</Field>
    </div>
  );
}

function Media({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-base text-muted-foreground">{label}</Label>
      {label === "Github" ? (
        <a
          href="https://github.com/ThanasisGeorg"
          target="_blank"
          rel="noopener noreferrer"
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

function Details() {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl">
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
        <CardTitle>My Profile</CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 w-full h-full">
          <Avatar />
          <Details />
        </div>
      </CardContent>
    </Card>
  );
}
