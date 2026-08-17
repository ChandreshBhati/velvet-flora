import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-heading text-2xl font-bold text-accent">
            Velvet Flora
          </h3>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/80">
            Handcrafted pipe-cleaner flowers that bring everlasting beauty to
            your most cherished moments.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-widest text-primary-foreground/90 transition-colors duration-200 hover:text-accent"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919893264815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary-foreground/90 transition-colors duration-200 hover:text-accent"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/60">
            © 2026 Velvet Flora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
