import { createFileRoute } from "@tanstack/react-router";

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
    <section className="flex w-full items-center justify-center bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl rounded-3xl bg-card p-8 shadow-xl sm:p-12 lg:p-16">
        <h1 className="text-center font-heading text-3xl font-bold text-primary sm:text-4xl">
          Our Story
        </h1>
        <p className="mt-6 text-center text-base leading-relaxed text-foreground sm:text-lg">
          Welcome to Velvet Flora. What started as a small creative hobby has
          blossomed into a passion for crafting timeless pieces of art. Every
          single flower and bouquet is 100% handcrafted using high-quality pipe
          cleaners. We pour our patience, love, and creativity into every petal
          to ensure your memories last forever.
        </p>
      </div>
    </section>
  );
}
