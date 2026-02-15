import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field } from "../ui/field";

function Avatar() {
  return (
    <div className="aspect-square rounded-full w-150 h-150 overflow-hidden border-2"></div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2">
      <Label className="text-base text-muted-foreground">{label}</Label>
      <Field>{value}</Field>
    </div>
  );
}

function Details() {
  return (
    <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
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
        {/* <Detail label="Focus" value="Web Development" />
        <Detail label="Tech Stack" value="React, Next.js, TypeScript" />
        <Detail label="Availability" value="Open to opportunities" /> */}
        <Detail label="Email" value="thanasisgeorg03@gmail.com" />
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
      <CardContent>
        <div className="flex flex-row items-center justify-between gap-10 w-full h-full">
          <Avatar />
          <Details />
        </div>
      </CardContent>
    </Card>
  );
}
