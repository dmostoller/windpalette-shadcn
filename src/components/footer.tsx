export default function Footer() {
  return (
    <footer className="py-6 px-2 md:px-8 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          <a
            href="https://windpalette.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            WindPalette
          </a>{" "}
          makes it easy to generate and customize stunning color themes for{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          . Design, preview, and export your theme in minutes. View the source
          code for this demo on{" "}
          <a
            href="https://github.com/dmostoller/windpalette-shadcn"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
