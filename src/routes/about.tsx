import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Velvet Flora",
      },
      {
        name: "description",
        content:
          "Learn the story behind Velvet Flora, where handcrafted pipe-cleaner flowers become timeless art.",
      },
      {
        property: "og:title",
        content: "About Us — Velvet Flora",
      },
      {
        property: "og:description",
        content:
          "Learn the story behind Velvet Flora, where handcrafted pipe-cleaner flowers become timeless art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="w-full bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Left Side: Contact Us Card */}
          <div className="flex flex-col items-center justify-center rounded-3xl border border-border/50 bg-card p-8 text-center shadow-xl sm:p-12 lg:p-16">
            <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a special request or want a custom handcrafted bouquet? Message us directly, and
              let's craft something beautiful together.
            </p>
            <a
              href="https://wa.link/esv9aq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Side: Our Story Card */}
          <div className="flex flex-col items-center justify-center rounded-3xl border border-border/50 bg-card p-8 text-center shadow-xl sm:p-12 lg:p-16">
            <h1 className="font-heading text-3xl font-bold text-primary sm:text-4xl">Our Story</h1>
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              Welcome to Velvet Flora. What started as a small creative hobby has blossomed into a
              passion for crafting timeless pieces of art. Every single flower and bouquet is 100%
              handcrafted using high-quality pipe cleaners. We pour our patience, love, and
              creativity into every petal to ensure your memories last forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
