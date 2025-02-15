"use client";

import { useState, useEffect, useCallback } from "react";
import { Copy, Check, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  getThemeFromURL,
  generateShadcnThemeExport,
} from "@/lib/generate-theme";

type CopyShadcnThemeButtonProps = {
  variant?: "default" | "icon";
};

export default function CopyShadcnThemeButton({
  variant = "default",
}: CopyShadcnThemeButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [colors, setColors] = useState<ReturnType<typeof getThemeFromURL>>({});
  const [themeCode, setThemeCode] = useState("");

  useEffect(() => {
    const themeColors = getThemeFromURL();
    setColors(themeColors);
    if (themeColors.primary) {
      setThemeCode(generateShadcnThemeExport(themeColors));
    }
    setMounted(true);
  }, []);

  const copyToClipboard = useCallback(async () => {
    if (themeCode) {
      await navigator.clipboard.writeText(themeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [themeCode]);

  const renderButtonContent = () => {
    if (!mounted) {
      return (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy Theme Code</span>
        </>
      );
    }

    if (!colors.primary) {
      return (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy Theme Code</span>
        </>
      );
    }

    if (variant === "default") {
      return (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy Theme Code</span>
        </>
      );
    } else {
      return <Braces className="h-4 w-4" />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2"
          disabled={!mounted || !colors.primary}
        >
          {renderButtonContent()}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Theme Configuration</DialogTitle>
          <DialogDescription>
            Copy the generated shadcn/ui theme code based on your selected
            colors.
          </DialogDescription>
        </DialogHeader>
        <div className="relative mt-4">
          <pre className="p-4 rounded-lg bg-muted max-h-[60vh] overflow-x-auto">
            <code className="text-sm font-mono">{themeCode}</code>
          </pre>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-4 h-8 w-8"
            onClick={copyToClipboard}
            disabled={!mounted || !colors.primary}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
