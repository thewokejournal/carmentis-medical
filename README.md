# Carmentis Medical Centre Website

A warm, family-oriented medical clinic website built with Next.js and Tailwind CSS.

## Overview

This is a Phase 1 demo website for Carmentis Medical Centre, a private family clinic in Borrowdale, Harare. The site is designed to build trust, reassure patients, and make contacting the clinic effortless.

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router) and Tailwind CSS
- **Mobile-First Design**: Fully responsive across all devices
- **Accessibility Focused**: Semantic HTML, proper ARIA labels, high contrast ratios
- **WhatsApp Integration**: Floating WhatsApp button on all pages with pre-filled messages
- **Clean Architecture**: Component-based structure for easy maintenance and updates

## Pages

1. **Home** - Hero section, trust indicators, services overview, doctors preview, location & hours
2. **Services** - Comprehensive list of medical services offered
3. **Doctors** - Meet our medical team with professional profiles
4. **About** - Clinic mission, values, and patient-first philosophy
5. **Contact** - Multiple contact methods, location, and opening hours

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Clinic Information

**Address:**  
Corner Borrowdale Road & Lark Rise Road  
Borrowdale, Harare

**Phone/WhatsApp:**  
+263 77 285 9799

**Email:**  
info@carmentismedical.co.zw

**Opening Hours:**
- Mon–Fri: 07:00 – 20:00
- Saturday: 08:00 – 16:00
- Sun & Holidays: 08:00 – 13:00

## Customization

### Updating Content

All content is easily editable:

- **Clinic Details**: Update in respective page files (`app/page.tsx`, `app/contact/page.tsx`, etc.)
- **Services**: Modify service arrays in `app/services/page.tsx`
- **Doctors**: Update doctor information in `app/doctors/page.tsx`
- **Contact Info**: Update throughout components and pages (search for phone numbers, addresses, etc.)

### Colors & Branding

Colors are defined in `app/globals.css` using Tailwind's inline theme configuration:

- **Primary Blue**: `--color-primary-*` (medical blue)
- **Teal**: `--color-teal-*` (accents)
- **Green**: `--color-green-*` (wellness/WhatsApp)
- **Neutral**: `--color-neutral-*` (backgrounds & text)

### Typography

- **Headings**: Poppins (via Google Fonts)
- **Body**: Inter (via Google Fonts)

Configured in `app/globals.css`

## Key Components

- **Header**: `components/Header.tsx` - Main navigation with mobile menu
- **Footer**: `components/Footer.tsx` - Site footer with contact info and links
- **WhatsAppButton**: `components/WhatsAppButton.tsx` - Floating WhatsApp CTA
- **ServiceCard**: `components/ServiceCard.tsx` - Service display cards
- **DoctorCard**: `components/DoctorCard.tsx` - Doctor profile cards
- **Button**: `components/Button.tsx` - Reusable button component

## Design Principles

- **Warm & Professional**: Calm color palette with generous spacing
- **Family-Oriented**: Friendly, reassuring tone throughout
- **Trust Building**: Clear information, professional presentation
- **Conversion Focused**: Multiple CTAs with WhatsApp as primary channel
- **No Over-Engineering**: Clean, maintainable code

## Phase 2 Considerations

Features planned for Phase 2:
- Online booking system
- Patient portal
- Blog/health resources
- Multi-language support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Carmentis Medical Centre. All rights reserved.
