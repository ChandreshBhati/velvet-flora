import { MessageCircle } from "lucide-react";
// Yahan dhyan rakhein ki humne .png kar diya hai background hate hue logo ke liye
import logoImage from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Bada Logo Image */}
          <img
            src={logoImage}
            alt="Velvet Flora Logo"
            className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />

          {/* Nayi Lines */}
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            Handcrafted pipe-cleaner blooms, made with love. Everlasting beauty for your everyday
            life and forever memories.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/velvetflora.1111?igsh=MTQ2cmg2NmxzN2puMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-widest text-primary-foreground/90 transition-colors duration-200 hover:text-accent"
            >
              Instagram
            </a>
            <a
              href="https://wa.link/esv9aq"
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
