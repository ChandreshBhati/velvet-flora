# Velvet Flora Bloom

Build a premium, elegant, and responsive React web application for a handcrafted pipe-cleaner flower boutique named "Velvet Flora". Use Tailwind CSS for styling and Lucide React for icons. The vibe should be luxurious, handcrafted, and welcoming.

**Design System:**

- Primary Color: Deep Brand Purple (#4A0E4E)

- Accent Color: Elegant Gold (#D4AF37)

- Background: Soft off-white/beige (#FAFAF7)

- Typography: Elegant Serif for headings, clean Sans-serif for body text.

**Routing & Layout:**

Create a layout with a fixed sticky Header, a dynamic main content area, and a Footer. Include routing for two pages: "Home" (/) and "About Us" (/about).

**1. Header Component:**

- Left: "Velvet Flora" text logo in Serif, Bold, Purple.

- Right (Desktop): Links for "Home" and "About Us" with gold hover effects.

- Right (Mobile): Hamburger menu icon.

**2. Home Page (Main Landing):**

- **Hero Section:** Light background. Big bold heading "Flowers That Never Fade." Subtext: "Handcrafted pipe-cleaner blooms for gifts, decor, and special moments." Call to action (CTA): A large Gold pill-shaped button saying "Order on WhatsApp" with a MessageCircle icon. The button should link to `https://wa.me/919893264815?text=Hello%20Velvet%20Flora!%20I%20loved%20your%20creations%20and%20want%20to%20place%20an%20order.`

- **Gallery Section:** Title "Our Creations" with Sparkle icons. Subtext "Take a screenshot of what you love and send it to us!". A responsive CSS grid with 6 placeholder cards (aspect-square, gray background, soft shadows, hover scale effects).

- **Reels Section:** Dark Purple background section. Title "Watch The Magic" with Heart icons in gold. Flex container with 2 vertical placeholder cards (w-[300px] h-[533px]) representing Instagram reels.

**3. About Us Page:**

- Clean, centered layout on a light background. 

- A white card in the center with a soft shadow. Title: "Our Story" (Purple, Serif).

- Text: "Welcome to Velvet Flora. What started as a small creative hobby has blossomed into a passion for crafting timeless pieces of art. Every single flower and bouquet is 100% handcrafted using high-quality pipe cleaners. We pour our patience, love, and creativity into every petal to ensure your memories last forever."

**4. Footer Component:**

- Dark purple background, white text.

- Title "Velvet Flora" in gold.

- Short bio text below it.

- Flex container with two text links (font-medium, uppercase, tracking-wide, gold hover effect): "INSTAGRAM" (links to instagram.com) and "WHATSAPP" (with MessageCircle icon, links to `https://wa.me/919893264815`).

- Bottom border with copyright text "© 2026 Velvet Flora. All rights reserved."

Ensure the code is clean, modular, and the UI looks stunning right out of the box with proper padding, margins, and smooth transitions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/197fd148-89fc-492a-8d70-19d093f49403).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
