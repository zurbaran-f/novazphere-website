# NovaZphere Solutions Website

A modern, high-performance corporate website for NovaZphere Solutions, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern & Fast**: Built with Next.js 14 for optimal performance
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Brand-Aligned**: Uses NovaZphere's color palette and branding
- 🔍 **SEO Optimized**: Comprehensive SEO implementation with sitemap and robots.txt
- ♿ **Accessible**: WCAG-compliant design and semantic HTML
- 🎯 **Conversion-Focused**: Strategic CTA placement and user journey optimization

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About Us pages
│   ├── services/          # Services pages
│   ├── solutions/         # Industry solutions
│   ├── case-studies/      # Case studies
│   ├── resources/         # Resources and blog
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   └── Color-logo.png    # Company logo
└── package.json           # Dependencies
```

## Color Palette

The website uses NovaZphere's brand colors:

- **Navy Dark**: `#112d4e` - Primary brand color
- **Navy Medium**: `#1a4578` - Secondary brand color
- **Navy Darker**: `#0c366a` - Dark accent
- **Navy Darkest**: `#081524` - Text color
- **Grey Medium**: `#aaabab` - Secondary text
- **Grey Light**: `#c4c4c4` - Backgrounds
- **Grey Cool**: `#c1c6c6` - Alternative backgrounds
- **White**: `#ffffff` - Primary background

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Manual Build

```bash
npm run build
npm start
```

## SEO Features

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Structured data ready
- ✅ Optimized page titles and descriptions

## Performance

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Optimized CSS with Tailwind
- ✅ Fast page loads with Next.js App Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 NovaZphere Solutions LLC. All rights reserved.

## Support

For questions or support, contact: info@novazphere.com
