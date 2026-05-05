import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillsCard } from "./skills-card";
import { Details } from "./profile-card";

export function DetailsSkillsTabs() {
  return (
    <Tabs defaultValue="info" className="flex w-full md:hidden">
      <TabsList className="bg-white/60">
        <TabsTrigger value="info">Info</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="info" className="pt-2">
        <Details />
      </TabsContent>
      <TabsContent value="skills" className="pt-2">
        <SkillsCard />
      </TabsContent>
    </Tabs>
  );
}
