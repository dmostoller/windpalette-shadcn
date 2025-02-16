"use client";

import Link from "next/link";
import { Menu, Palette } from "lucide-react";
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
import Image from "next/image";

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
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="https://github.com/shadcn.png"
                alt="shadcn/ui"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="absolute -right-1 -bottom-1 bg-[var(--card-background)] rounded-full p-0.5 z-10">
                <Palette className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-base md:text-xl">Shadcn/ui Theme Demo</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
          <Link href="https://www.windpalette.com/app">
            <Button>Back To App</Button>
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
                <DrawerDescription>Mobile Drawer</DrawerDescription>
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
