"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#charts", label: "Charts" },
  { href: "#component-gallery", label: "Components" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-4 px-4  mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Shadcn/ui Theme Demo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
          <Link href="https://www.windpalette.com/app">
            <Button>Main Site</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 lg:hidden">
          <ModeToggle />
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
                <DrawerDescription>
                  Access all sections of the site
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button variant="ghost" className="w-full justify-start">
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  <Separator className="my-2" />
                  <Link href="https://www.windpalette.com/app">
                    <Button className="w-full">Main Site</Button>
                  </Link>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
