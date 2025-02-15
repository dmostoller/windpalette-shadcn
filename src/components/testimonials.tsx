import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. Highly recommended!",
    avatar: "AJ",
  },
  {
    name: "Bob Smith",
    role: "Designer, CreativeCo",
    content:
      "The user interface is intuitive and beautiful. A joy to use every day.",
    avatar: "BS",
  },
  {
    name: "Carol Davis",
    role: "Developer, InnovateTech",
    content:
      "The API is well-documented and easy to integrate. Saved us weeks of work.",
    avatar: "CD",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
