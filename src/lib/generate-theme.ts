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
  const primary = hexToHSL(colors.primary as string);
  const secondary = colors.secondary
    ? hexToHSL(colors.secondary as string)
    : { h: 0, s: 0, l: 96.1 };
  const accent = colors.accent
    ? hexToHSL(colors.accent as string)
    : { h: 0, s: 0, l: 96.1 };

  // Generate variations for backgrounds and borders
  const subtleBackground = { ...primary, s: primary.s * 0.02, l: 100 };
  const subtleCard = { ...primary, s: primary.s * 0.05, l: 99 };
  const subtleBorder = { ...primary, s: primary.s * 0.1, l: 90 };

  // Generate chart colors based on primary hue shifts
  const chartColors = [
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

export function getThemeFromURL(): ThemeColors {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    primary: params.get("primary") || undefined,
    secondary: params.get("secondary") || undefined,
    accent: params.get("accent") || undefined,
  };
}
