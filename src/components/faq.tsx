"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is shadcn/ui?",
    answer:
      "shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. It's not a component library, but a set of components you can copy and paste into your apps.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, shadcn/ui is completely free and open-source. You can use it in personal and commercial projects without any restrictions.",
  },
  {
    question: "Can I use it with my existing React project?",
    answer:
      "shadcn/ui components can be integrated into any React project that uses Tailwind CSS.",
  },
  {
    question: "How do I customize the components?",
    answer:
      "You can customize the components by modifying the Tailwind CSS classes or editing the component code directly. The components are designed to be easily customizable.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
