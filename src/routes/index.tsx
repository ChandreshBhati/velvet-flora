import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Sparkles, Heart, Quote, Gift } from "lucide-react";

import heroImage from "../assets/hero.jpg";
import promoImage from "../assets/promo.jpg";
import creation1 from "../assets/creation-1.jpg";
import creation2 from "../assets/creation-2.jpg";
import creation3 from "../assets/creation-3.jpg";
import creation4 from "../assets/creation-4.jpg";
import creation5 from "../assets/creation-5.jpg";
import creation6 from "../assets/creation-6.jpg";
import reel1 from "../assets/reel1.mp4";
import reel2 from "../assets/reel2.mp4";

const WHATSAPP_LINK =
  "https://wa.link/esv9aq";

const creations = [
  { src: creation1, alt: "Handcrafted pipe-cleaner lavender roses in a glass vase" },
  { src: creation2, alt: "Handmade pipe-cleaner sunflower bouquet" },
  { src: creation3, alt: "Pipe-cleaner tulip bunch tied with a gold ribbon" },
  { src: creation4, alt: "Deep purple pipe-cleaner blooms on a gift box" },
  { src: creation5, alt: "Pipe-cleaner lavender stems in a ceramic vase" },
  { src: creation6, alt: "White and gold pipe-cleaner daisy bouquet" },
];

const testimonials = [
  {
    quote:
      "Absolutely loved these handmade sunflowers! 🌻✨ Quality bohot acchi hai aur dekhne mein bohot hi pyaare lagte hain. And affordable hai bohot Perfect for room decor or gifting. Thank you so much!",
    name: "Ananya S.",
    role: "Indore",
  },
  {
    quote:
      "Myy Mom was really happy with this gift. Thank you @velvetflora.1111 ✨",
    name: "Aryan Singh",
    role: "Indore",
  },
  {
    quote:
      "Itna beautiful handmade bouquet expect nahi kiya tha. 😍 Sabko bahut pasand aaya. Thank you Velvet Flora! Highly recommended. ✨❤️",
    name: "Nirmala Rathore",
    role: "Indore",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Velvet Flora — Handcrafted Pipe-Cleaner Flowers",
      },
      {
        name: "description",
        content:
          "Flowers that never fade. Handcrafted pipe-cleaner blooms for gifts, decor, and special moments.",
      },
      {
        property: "og:title",
        content: "Velvet Flora — Handcrafted Pipe-Cleaner Flowers",
      },
      {
        property: "og:description",
        content:
          "Flowers that never fade. Handcrafted pipe-cleaner blooms for gifts, decor, and special moments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full bg-background py-16 sm:py-24 lg:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              <Sparkles size={14} /> Handcrafted Boutique
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Flowers That Never Fade.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
              Handcrafted pipe-cleaner blooms for gifts, decor, and special
              moments — made petal by petal, by hand.
            </p>
            <a
              href="https://www.instagram.com/velvetflora.1111?igsh=MTQ2cmg2NmxzN2puMw=="
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Our Creations
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
            <img
              src={heroImage}
              alt="Luxurious handcrafted purple and gold pipe-cleaner flower bouquet"
              width={1408}
              height={1008}
              className="relative w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-secondary/50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Sparkles className="text-accent" size={24} />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Creations
              </h2>
              <Sparkles className="text-accent" size={24} />
            </div>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Take a screenshot of what you love and send it to us!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creations.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="w-full bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-accent/30 bg-card shadow-xl">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <img
                src={promoImage}
                alt="Festive Velvet Flora gift promotion with purple blooms and gold ribbons"
                loading="lazy"
                width={1408}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="p-8 sm:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                  <Gift size={14} /> Festive Offer
                </span>
                <h2 className="mt-5 font-heading text-3xl font-bold text-primary sm:text-4xl">
                  Gift Beauty, Share Joy
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Order any bouquet this season and receive complimentary luxury
                  gift wrapping with a handwritten note — crafted to make your
                  moment unforgettable.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground">
                  <li>• Free gift wrapping</li>
                  <li>• Personalised handwritten card</li>
                  <li>• Custom colours on request</li>
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  Claim This Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="w-full bg-primary py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Heart className="text-accent" size={24} fill="currentColor" />
              <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Watch The Magic
              </h2>
              <Heart className="text-accent" size={24} fill="currentColor" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[reel1, reel2].map((videoSrc, i) => (
              <div
                key={i}
                className="h-[533px] w-[300px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-primary-foreground/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              >
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-secondary/50 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved By Our Customers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Little notes from the people who welcomed our blooms into their
              homes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Quote className="text-accent" size={28} />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-heading text-lg font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Order on WhatsApp — final CTA */}
      <section id="order" className="w-full bg-background py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready To Order Your Forever Bouquet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Message us on WhatsApp with the design you love and we will craft it
            just for you.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle size={22} />
            Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
