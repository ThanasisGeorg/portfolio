import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillsCard } from "./skills-card";
import { Details } from "./profile-card";

export function DetailsSkillsTabs() {
  return (
    <Tabs defaultValue="info" className="flex md:hidden w-full">
      <TabsList>
        <TabsTrigger value="info">Info</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <Details />
      </TabsContent>
      <TabsContent value="skills">
        <SkillsCard />
      </TabsContent>
    </Tabs>
  );
}
