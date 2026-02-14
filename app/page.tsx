import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

function Greeting({ text }: { text: string }) {
  return (
    <Label className="text-5xl md:text-8xl text-center w-fit md:w-400 font-semibold text-shadow-lg">
      {text}
    </Label>
  );
}

function Bio({ text, magicWord }: { text: string; magicWord: string }) {
  const firstHalf = text.slice(0, text.indexOf("Since"));
  const secondHalf = text.slice(text.indexOf("Since"), text.length);

  return (
    <div className="flex flex-col gap-5 text-xl md:text-3xl text-center w-fit md:w-300">
      <Field>{firstHalf}</Field>
      <Field>
        {secondHalf}
        <span className="font-semibold">{magicWord}</span>
      </Field>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-15 min-h-screen items-center justify-center p-2">
      <Greeting text="Hi, my name is Thanasis Georgalis and i am a developer." />
      <Bio
        text="
          I study at the Department of Information and Electronic Engineering 
          at the International Hellenic University in Thessaloniki, Greece.
          Since my childhood, i play videogames and spend time with my PC, 
          but i had never been involded in coding. Things changed when i entered
          the university. Through it, i discovered a whole new fascinating world 
          and learned a new art . . .
        "
        magicWord="the art of Code"
      />
    </div>
  );
}
