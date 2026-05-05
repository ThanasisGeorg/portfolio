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
import { Button } from "../ui/button";

function SkillItem({ icon: Icon, label }: { icon: IconType; label: string }) {
  return (
    <Button
      variant="outline"
      className="h-9 rounded-full border-primary/20 bg-white/50 px-3 text-xs shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/80 hover:shadow-md md:h-10 md:px-4 md:text-sm"
    >
      <Icon size={16} />
      <span className="font-medium">{label}</span>
    </Button>
  );
}

function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-fit flex-wrap gap-2">
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
      </div>
      <div className="flex w-fit flex-wrap gap-2">
        <SkillItem icon={SiPostgresql} label="PostgreSQL" />
        <SkillItem icon={SiSqlite} label="SQLite" />
      </div>
      <div className="flex w-fit flex-wrap gap-2">
        <SkillItem icon={SiUnity} label="Unity" />
        <SkillItem icon={BiLogoVisualStudio} label="Visual Studio Code" />
        <SkillItem icon={SiAndroidstudio} label="Android Studio" />
      </div>
    </div>
  );
}

export function SkillsCard() {
  return (
    <Card className="h-fit w-full border-none bg-transparent shadow-none">
      <CardHeader className="hidden md:block p-0">
        <CardTitle className="mb-2 text-base tracking-wide uppercase text-muted-foreground">
          My Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Skills />
      </CardContent>
    </Card>
  );
}
