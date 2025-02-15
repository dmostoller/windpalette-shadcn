import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Intuitive Design",
    description: "Our user-friendly interface makes navigation a breeze.",
    icon: Lightbulb,
  },
  {
    title: "Lightning Fast",
    description: "Experience unparalleled speed and performance.",
    icon: Zap,
  },
  {
    title: "Secure & Reliable",
    description: "Your data is safe with our advanced security measures.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
