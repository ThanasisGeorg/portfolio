import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Field } from "../ui/field";

export function ProjectsCard() {
  return (
    <Card className="w-full h-full text-2xl shadow-xl">
      <CardHeader>
        <CardTitle>My Top Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-center justify-start gap-10 w-full h-full"></div>
      </CardContent>
    </Card>
  );
}
