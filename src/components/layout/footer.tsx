import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kapa Escort Agency Ltd. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/etiquette"
            className="text-sm text-muted-foreground hover:underline"
          >
            Etiquette
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/disclaimer"
            className="text-sm text-muted-foreground hover:underline"
          >
            Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
