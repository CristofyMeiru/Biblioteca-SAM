import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const mockDays = [
  {
    name: "Segunda-feira",
  },
  {
    name: "Terça-feira",
  },
  {
    name: "Quarta-feira",
  },
  {
    name: "Quinta-feira",
  },
  {
    name: "Sexta-feira",
  },
];

console.log(mockDays);

export default function Monitores() {
  return (
    <div className=" p-4 ">
      <Card className=" w-1/5 ">
        <CardHeader>
          <CardTitle>Dias da semana</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator className=" mb-4 " />
          <div className=" flex flex-col space-y-2 ">
            {mockDays.map((item) => (
              <Button className=" flex justify-start " variant={"ghost"}>{item.name}</Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
