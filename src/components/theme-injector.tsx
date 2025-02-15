"use client";

import { useEffect, useState } from "react";
import { generateShadcnTheme, getThemeFromURL } from "@/lib/generate-theme";
import { LoadingScreen } from "./loading-screen";

export function ThemeInjector() {
  const [themeStyle, setThemeStyle] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const applyTheme = () => {
      const colors = getThemeFromURL();
      if (colors.primary) {
        const theme = generateShadcnTheme(colors);
        setThemeStyle(theme);
      }
      setIsLoading(false);
    };

    applyTheme();
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      {themeStyle && (
        <>
          <style id="dynamic-theme">{themeStyle}</style>
          <style>{`
            /* Override the default theme variables when custom theme is active */
            :root, .dark {
              --background: var(--dynamic-background);
              --foreground: var(--dynamic-foreground);
              --card: var(--dynamic-card);
              --card-foreground: var(--dynamic-card-foreground);
              --popover: var(--dynamic-popover);
              --popover-foreground: var(--dynamic-popover-foreground);
              --primary: var(--dynamic-primary);
              --primary-foreground: var(--dynamic-primary-foreground);
              --secondary: var(--dynamic-secondary);
              --secondary-foreground: var(--dynamic-secondary-foreground);
              --muted: var(--dynamic-muted);
              --muted-foreground: var(--dynamic-muted-foreground);
              --accent: var(--dynamic-accent);
              --accent-foreground: var(--dynamic-accent-foreground);
              --destructive: var(--dynamic-destructive);
              --destructive-foreground: var(--dynamic-destructive-foreground);
              --border: var(--dynamic-border);
              --input: var(--dynamic-input);
              --ring: var(--dynamic-ring);
              --chart-1: var(--dynamic-chart-1);
              --chart-2: var(--dynamic-chart-2);
              --chart-3: var(--dynamic-chart-3);
              --chart-4: var(--dynamic-chart-4);
              --chart-5: var(--dynamic-chart-5);
            }
          `}</style>
        </>
      )}
    </>
  );
}
