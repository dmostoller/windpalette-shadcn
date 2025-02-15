import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brush, Palette, Code } from "lucide-react";

const features = [
  {
    title: "Theme Customization",
    description: "Effortlessly create unique themes tailored to your brand.",
    icon: Brush,
    color: "text-primary",
    ring: "ring-primary",
    border: "border-primary/50",
  },
  {
    title: "Real-time Preview",
    description: "Instantly visualize your theme changes with a live preview.",
    icon: Palette,
    color: "text-secondary",
    ring: "ring-secondary",
    border: "border-secondary/50",
  },
  {
    title: "Code Export",
    description: "Easily export your customized theme as ready-to-use code.",
    icon: Code,
    color: "text-accent",
    ring: "ring-accent",
    border: "border-accent/50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`transition-colors duration-200 border ${feature.border} hover:ring-1 ${feature.ring}`}
            >
              <CardHeader>
                <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                <CardTitle className="">{feature.title}</CardTitle>
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
