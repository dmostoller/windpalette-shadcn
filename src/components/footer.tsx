import Image from "next/image";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            {" "}
            {/* Added margin for mobile */}
            <Image
              src="/windpalettelogo.png"
              alt="WindPalette"
              width={24}
              height={24}
              className="rounded-full"
            />
            <a
              href="https://windpalette.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              WindPalette
            </a>
            <span className="hidden md:inline">&copy; {currentYear}</span>
          </div>

          <div className="text-center md:text-left">
            {/* Center text on mobile */}
            Made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500 align-middle" />{" "}
            by{" "}
            <a
              href="https://windpalette.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              WindPalette
            </a>
            .
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-1 md:space-y-0 md:space-x-2">
              {" "}
              {/* Added flex container */}
              <span className="block">
                Powered by{" "}
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  shadcn/ui
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  Tailwind CSS
                </a>
              </span>
              <span className="block">
                &nbsp;View source on{" "}
                <a
                  href="https://github.com/dmostoller/windpalette-shadcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  GitHub
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
