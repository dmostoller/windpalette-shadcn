import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for individuals",
    features: ["1 user", "10 projects", "5GB storage", "Basic support"],
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Ideal for small teams",
    features: [
      "5 users",
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
