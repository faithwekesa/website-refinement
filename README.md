# Jawaka Catering – website refinement

A page-by-page visual and UX refinement of the Jawaka Catering website (jawaka.co.ke), rebuilt in Next.js. The goal was a simple, modern and minimal look: white and orange used sparingly, soft motion, short sections and no clutter.

This is a front-end project. Forms open WhatsApp or Gmail with the details already filled in, so there is no backend to run yet.

## Pages

| Page | What it does |
| --- | --- |
| Home | Full-screen hero slider, services preview, how it works, trusted-by strip and client testimonials |
| About | Story, directors, mission and vision, core values and team |
| Services | Catering for corporate events, weddings and private parties, plus an infographic-style "Why choose us" section |
| Menu | One categorised menu (Breakfast, Lunch, Dinner, Supper) with search by dish or by price, and a quick-order basket |
| Accommodation | Room cards with price per night, details, amenities, click-to-enlarge photos and a WhatsApp booking link |
| Request a quote | Event quote form that sends the details to WhatsApp, with a link back to where the visitor came from |
| Contact | Map, phone, email and WhatsApp, and a message form that opens a Gmail draft |

There is also a styled 404 page, a sitemap and a robots file.

## Features worth noting

- **Menu search:** type a dish name, or a number like 200 to see dishes up to Ksh 200.
- **Quick order:** add dishes with the + button, adjust or remove them in the order sheet, and send the order to WhatsApp. The basket is remembered if the page is refreshed.
- **Photo viewer:** room photos open full size on click, and close with Esc or a click outside.
- **Phone check:** the order and quote forms accept Kenyan mobile numbers only (for example 0712 345 678).
- **Working contact links:** emails open Gmail on desktop and the mail app on phones, phone numbers dial, and WhatsApp links open a chat.
- **Responsive:** checked from 320px phones up to large desktops with no sideways scrolling.
- **Reduced motion:** animations are switched off for visitors who ask for less movement.

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Plain CSS in one stylesheet (`app/globals.css`) with CSS variables for colours and spacing
- Plus Jakarta Sans through `next/font`

Next.js 16 has breaking changes from older versions. The docs that match this version are in `node_modules/next/dist/docs/`.

## Getting started

```
npm install
npm run dev
```

Then open http://localhost:3000. To use another port:

```
npm run dev -- --port 3100
```

Build for production:

```
npm run build
npm run start
```

## Project structure

```
app/            pages, layout, sitemap, robots and the global stylesheet
components/     Nav, Footer, Hero, MenuBrowser, RoomCard, QuoteForm, ContactForm and the rest
lib/site.ts     contact details and helpers shared across the site
public/images/  logos, hero photos, menu photos and room photos
scripts/        image optimiser
```

## Changing the contact details

All phone numbers, emails, the address and the WhatsApp number live in one file: `lib/site.ts`. Change them there and every page updates.

## Photos

- Menu photos go in `public/images/menu/` and are named after the dish, for example `chapo-and-tea.jpg`. A dish with no photo shows a small icon instead.
- Room photos go in `public/images/rooms/` and are named after the room, for example `cosy.jpg`.

To shrink large photos (max width 1400px) run:

```
npm run optimize:images
```


