import {
  SiSharp,
  SiJavascript,
  SiPython,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiLaravel,
  SiUnity,
  SiAndroidstudio,
  SiCoffeescript,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IconType } from "react-icons";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

function SkillItem({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <Button className="flex items-center gap-2 px-2 md:px-4 md:py-2 rounded-full border-2 text-base hover:scale-110 hover:shadow-2xl transition-all duration-300">
      <Icon size={18} className="hidden md:block" />
      <span className="font-medium text-xs md:text-sm">{label}</span>
    </Button>
  );
}

function Skills() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap gap-1 w-fit">
        <SkillItem icon={SiSharp} label="C#" />
        <SkillItem icon={SiCoffeescript} label="Java" />
        <SkillItem icon={SiHtml5} label="HTML" />
        <SkillItem icon={SiCss3} label="CSS" />
        <SkillItem icon={SiJavascript} label="JavaScript" />
        <SkillItem icon={SiPython} label="Python" />
        <SkillItem icon={SiKotlin} label="Kotlin" />
        <SkillItem icon={SiPhp} label="Php" />
        <SkillItem icon={SiReact} label="React" />
        <SkillItem icon={SiNextdotjs} label="Next.js" />
        <SkillItem icon={SiLaravel} label="Laravel" />
        {/* <Separator orientation="horizontal" className="bg-[#d0d0d0]" /> */}
      </div>
      <div className="flex flex-wrap gap-1 w-fit">
        <SkillItem icon={SiPostgresql} label="PostgreSQL" />
        <SkillItem icon={SiSqlite} label="SQLite" />
        {/* <Separator orientation="horizontal" className="bg-[#d0d0d0]" /> */}
      </div>
      <div className="flex flex-wrap gap-1 w-fit">
        <SkillItem icon={SiUnity} label="Unity" />
        <SkillItem icon={BiLogoVisualStudio} label="Visual Studio Code" />
        <SkillItem icon={SiAndroidstudio} label="Android Studio" />
        {/* <Separator orientation="horizontal" className="bg-[#d0d0d0]" /> */}
      </div>
    </div>
  );
}

export function SkillsCard() {
  return (
    <Card className="w-full h-fit border-none shadow-none">
      <CardHeader className="hidden md:block p-0">
        <CardTitle className="text-base">My Skills</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Skills />
      </CardContent>
    </Card>
  );
}
