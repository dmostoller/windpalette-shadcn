import { Button } from "@/components/ui/button";
import { BookOpen, Palette } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl pb-2 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Create Beautiful Themes for shadcn/ui
              </h1>
              <div className="space-y-3">
                <p className="max-w-3xl text-zinc-500 md:text-xl dark:text-zinc-400 mx-auto">
                  See your theme in action with this live preview featuring a
                  variety of shadcn/ui components, powered by next-themes for
                  seamless dark mode support.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <div className="flex justify-center space-x-2">
                <Link href="https://www.windpalette.com/app">
                  <Button>
                    Create Your Theme
                    <Palette className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#component-gallery">
                  <Button variant="secondary">
                    View Components
                    <BookOpen className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
