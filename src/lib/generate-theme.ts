type HSLColor = {
  h: number;
  s: number;
  l: number;
};

type ThemeColors = {
  primary?: string;
  secondary?: string;
  accent?: string;
};

export function hexToHSL(hex: string): HSLColor {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function generateShadcnTheme(colors: ThemeColors) {
  // Handle different numbers of colors
  const primary = hexToHSL(colors.primary as string);
  const secondary = colors.secondary
    ? hexToHSL(colors.secondary as string)
    : { ...primary, l: Math.min(primary.l + 10, 96.1) }; // Lighter version of primary
  const accent = colors.accent
    ? hexToHSL(colors.accent as string)
    : colors.secondary
      ? { ...primary, l: Math.min(primary.l + 5, 96.1) } // Slightly lighter than primary
      : { ...primary, l: Math.min(primary.l + 15, 96.1) }; // Even lighter version of primary

  // Generate variations for backgrounds and borders
  const subtleBackground = { ...primary, s: primary.s * 0.02, l: 100 };
  const subtleCard = { ...primary, s: primary.s * 0.05, l: 99 };
  const subtleBorder = { ...primary, s: primary.s * 0.1, l: 90 };

  // Generate chart colors based on available colors
  const chartColors =
    colors.secondary && colors.accent
      ? [
          { h: primary.h, s: 70, l: 50 },
          { h: secondary.h, s: 65, l: 45 },
          { h: accent.h, s: 60, l: 55 },
          { h: (primary.h + 180) % 360, s: 55, l: 60 },
          { h: (secondary.h + 180) % 360, s: 50, l: 65 },
        ]
      : colors.secondary
        ? [
            { h: primary.h, s: 70, l: 50 },
            { h: secondary.h, s: 65, l: 45 },
            { h: (primary.h + 120) % 360, s: 60, l: 55 },
            { h: (secondary.h + 120) % 360, s: 55, l: 60 },
            { h: (primary.h + 240) % 360, s: 50, l: 65 },
          ]
        : [
            { h: primary.h, s: 70, l: 50 },
            { h: (primary.h + 72) % 360, s: 65, l: 45 },
            { h: (primary.h + 144) % 360, s: 60, l: 55 },
            { h: (primary.h + 216) % 360, s: 55, l: 60 },
            { h: (primary.h + 288) % 360, s: 50, l: 65 },
          ];

  return `@layer base {
  :root {
    --dynamic-background: ${Math.round(subtleBackground.h)} ${Math.round(subtleBackground.s)}% ${Math.round(subtleBackground.l)}%;
    --dynamic-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --dynamic-card: ${Math.round(subtleCard.h)} ${Math.round(subtleCard.s)}% ${Math.round(subtleCard.l)}%;
    --dynamic-card-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --dynamic-popover: ${Math.round(subtleCard.h)} ${Math.round(subtleCard.s)}% ${Math.round(subtleCard.l)}%;
    --dynamic-popover-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --dynamic-primary: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --dynamic-primary-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 98%;
    --dynamic-secondary: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% ${Math.round(secondary.l)}%;
    --dynamic-secondary-foreground: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% 95%;
    --dynamic-muted: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 96.1%;
    --dynamic-muted-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 45.1%;
    --dynamic-accent: ${Math.round(accent.h)} ${Math.round(accent.s)}% ${Math.round(accent.l)}%;
    --dynamic-accent-foreground: ${Math.round(accent.h)} ${Math.round(accent.s)}% 95%;
    --dynamic-destructive: 0 84.2% 60.2%;
    --dynamic-destructive-foreground: 0 0% 98%;
    --dynamic-border: ${Math.round(subtleBorder.h)} ${Math.round(subtleBorder.s)}% ${Math.round(subtleBorder.l)}%;
    --dynamic-input: ${Math.round(subtleBorder.h)} ${Math.round(subtleBorder.s)}% ${Math.round(subtleBorder.l)}%;
    --dynamic-ring: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --dynamic-radius: 0.5rem;
    --dynamic-chart-1: ${Math.round(chartColors[0].h)} ${Math.round(chartColors[0].s)}% ${Math.round(chartColors[0].l)}%;
    --dynamic-chart-2: ${Math.round(chartColors[1].h)} ${Math.round(chartColors[1].s)}% ${Math.round(chartColors[1].l)}%;
    --dynamic-chart-3: ${Math.round(chartColors[2].h)} ${Math.round(chartColors[2].s)}% ${Math.round(chartColors[2].l)}%;
    --dynamic-chart-4: ${Math.round(chartColors[3].h)} ${Math.round(chartColors[3].s)}% ${Math.round(chartColors[3].l)}%;
    --dynamic-chart-5: ${Math.round(chartColors[4].h)} ${Math.round(chartColors[4].s)}% ${Math.round(chartColors[4].l)}%;
  }

  .dark {
    --dynamic-background: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 3.9%;
    --dynamic-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --dynamic-card: ${Math.round(primary.h)} ${Math.round(primary.s * 0.15)}% 4.9%;
    --dynamic-card-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --dynamic-popover: ${Math.round(primary.h)} ${Math.round(primary.s * 0.15)}% 4.9%;
    --dynamic-popover-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --dynamic-primary: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --dynamic-primary-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 9%;
    --dynamic-secondary: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% ${Math.round(secondary.l)}%;
    --dynamic-secondary-foreground: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% 95%;
    --dynamic-muted: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 14.9%;
    --dynamic-muted-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 63.9%;
    --dynamic-accent: ${Math.round(accent.h)} ${Math.round(accent.s)}% ${Math.round(accent.l)}%;
    --dynamic-accent-foreground: ${Math.round(accent.h)} ${Math.round(accent.s)}% 95%;
    --dynamic-destructive: 0 62.8% 30.6%;
    --dynamic-destructive-foreground: 0 0% 98%;
    --dynamic-border: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 14.9%;
    --dynamic-input: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 14.9%;
    --dynamic-ring: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --dynamic-chart-1: ${Math.round(chartColors[0].h)} ${Math.round(chartColors[0].s - 10)}% ${Math.round(chartColors[0].l + 10)}%;
    --dynamic-chart-2: ${Math.round(chartColors[1].h)} ${Math.round(chartColors[1].s - 10)}% ${Math.round(chartColors[1].l + 10)}%;
    --dynamic-chart-3: ${Math.round(chartColors[2].h)} ${Math.round(chartColors[2].s - 10)}% ${Math.round(chartColors[2].l + 10)}%;
    --dynamic-chart-4: ${Math.round(chartColors[3].h)} ${Math.round(chartColors[3].s - 10)}% ${Math.round(chartColors[3].l + 10)}%;
    --dynamic-chart-5: ${Math.round(chartColors[4].h)} ${Math.round(chartColors[4].s - 10)}% ${Math.round(chartColors[4].l + 10)}%;
  }
}`;
}

export function generateShadcnThemeExport(colors: ThemeColors) {
  // Use the same color generation logic as generateShadcnTheme
  const primary = hexToHSL(colors.primary as string);
  const secondary = colors.secondary
    ? hexToHSL(colors.secondary as string)
    : { ...primary, l: Math.min(primary.l + 10, 96.1) };
  const accent = colors.accent
    ? hexToHSL(colors.accent as string)
    : colors.secondary
      ? { ...primary, l: Math.min(primary.l + 5, 96.1) }
      : { ...primary, l: Math.min(primary.l + 15, 96.1) };

  const subtleBackground = { ...primary, s: primary.s * 0.02, l: 100 };
  const subtleCard = { ...primary, s: primary.s * 0.05, l: 99 };
  const subtleBorder = { ...primary, s: primary.s * 0.1, l: 90 };

  const chartColors =
    colors.secondary && colors.accent
      ? [
          { h: primary.h, s: 70, l: 50 },
          { h: secondary.h, s: 65, l: 45 },
          { h: accent.h, s: 60, l: 55 },
          { h: (primary.h + 180) % 360, s: 55, l: 60 },
          { h: (secondary.h + 180) % 360, s: 50, l: 65 },
        ]
      : colors.secondary
        ? [
            { h: primary.h, s: 70, l: 50 },
            { h: secondary.h, s: 65, l: 45 },
            { h: (primary.h + 120) % 360, s: 60, l: 55 },
            { h: (secondary.h + 120) % 360, s: 55, l: 60 },
            { h: (primary.h + 240) % 360, s: 50, l: 65 },
          ]
        : [
            { h: primary.h, s: 70, l: 50 },
            { h: (primary.h + 72) % 360, s: 65, l: 45 },
            { h: (primary.h + 144) % 360, s: 60, l: 55 },
            { h: (primary.h + 216) % 360, s: 55, l: 60 },
            { h: (primary.h + 288) % 360, s: 50, l: 65 },
          ];

  return `@layer base {
  :root {
    --background: ${Math.round(subtleBackground.h)} ${Math.round(subtleBackground.s)}% ${Math.round(subtleBackground.l)}%;
    --foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --card: ${Math.round(subtleCard.h)} ${Math.round(subtleCard.s)}% ${Math.round(subtleCard.l)}%;
    --card-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --popover: ${Math.round(subtleCard.h)} ${Math.round(subtleCard.s)}% ${Math.round(subtleCard.l)}%;
    --popover-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 3.9%;
    --primary: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --primary-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 98%;
    --secondary: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% ${Math.round(secondary.l)}%;
    --secondary-foreground: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% 95%;
    --muted: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 96.1%;
    --muted-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 45.1%;
    --accent: ${Math.round(accent.h)} ${Math.round(accent.s)}% ${Math.round(accent.l)}%;
    --accent-foreground: ${Math.round(accent.h)} ${Math.round(accent.s)}% 95%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: ${Math.round(subtleBorder.h)} ${Math.round(subtleBorder.s)}% ${Math.round(subtleBorder.l)}%;
    --input: ${Math.round(subtleBorder.h)} ${Math.round(subtleBorder.s)}% ${Math.round(subtleBorder.l)}%;
    --ring: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --radius: 0.5rem;
    --chart-1: ${Math.round(chartColors[0].h)} ${Math.round(chartColors[0].s)}% ${Math.round(chartColors[0].l)}%;
    --chart-2: ${Math.round(chartColors[1].h)} ${Math.round(chartColors[1].s)}% ${Math.round(chartColors[1].l)}%;
    --chart-3: ${Math.round(chartColors[2].h)} ${Math.round(chartColors[2].s)}% ${Math.round(chartColors[2].l)}%;
    --chart-4: ${Math.round(chartColors[3].h)} ${Math.round(chartColors[3].s)}% ${Math.round(chartColors[3].l)}%;
    --chart-5: ${Math.round(chartColors[4].h)} ${Math.round(chartColors[4].s)}% ${Math.round(chartColors[4].l)}%;
  }

  .dark {
    --background: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 3.9%;
    --foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --card: ${Math.round(primary.h)} ${Math.round(primary.s * 0.15)}% 4.9%;
    --card-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --popover: ${Math.round(primary.h)} ${Math.round(primary.s * 0.15)}% 4.9%;
    --popover-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 98%;
    --primary: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --primary-foreground: ${Math.round(primary.h)} ${Math.round(primary.s)}% 9%;
    --secondary: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% ${Math.round(secondary.l)}%;
    --secondary-foreground: ${Math.round(secondary.h)} ${Math.round(secondary.s)}% 95%;
    --muted: ${Math.round(primary.h)} ${Math.round(primary.s * 0.1)}% 14.9%;
    --muted-foreground: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 63.9%;
    --accent: ${Math.round(accent.h)} ${Math.round(accent.s)}% ${Math.round(accent.l)}%;
    --accent-foreground: ${Math.round(accent.h)} ${Math.round(accent.s)}% 95%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 14.9%;
    --input: ${Math.round(primary.h)} ${Math.round(primary.s * 0.2)}% 14.9%;
    --ring: ${Math.round(primary.h)} ${Math.round(primary.s)}% ${Math.round(primary.l)}%;
    --chart-1: ${Math.round(chartColors[0].h)} ${Math.round(chartColors[0].s - 10)}% ${Math.round(chartColors[0].l + 10)}%;
    --chart-2: ${Math.round(chartColors[1].h)} ${Math.round(chartColors[1].s - 10)}% ${Math.round(chartColors[1].l + 10)}%;
    --chart-3: ${Math.round(chartColors[2].h)} ${Math.round(chartColors[2].s - 10)}% ${Math.round(chartColors[2].l + 10)}%;
    --chart-4: ${Math.round(chartColors[3].h)} ${Math.round(chartColors[3].s - 10)}% ${Math.round(chartColors[3].l + 10)}%;
    --chart-5: ${Math.round(chartColors[4].h)} ${Math.round(chartColors[4].s - 10)}% ${Math.round(chartColors[4].l + 10)}%;
  }
}`;
}

export function getThemeFromURL(): ThemeColors {
  try {
    if (typeof window === "undefined") {
      return {};
    }
    const params = new URLSearchParams(window.location.search);
    return {
      primary: params.get("primary") || undefined,
      secondary: params.get("secondary") || undefined,
      accent: params.get("accent") || undefined,
    };
  } catch (error) {
    console.error("Error getting theme from URL:", error);
    return {};
  }
}
