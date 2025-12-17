# Shri Krishna Core Cutting & Rebaring - Website

A modern, SEO-optimized website for Shri Krishna Core Cutting and Rebaring, a professional construction services company based in Kharar, Punjab.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: DM Sans, Outfit (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── faq/               # FAQ page
│   ├── gallery/           # Project gallery
│   ├── services/          # Services listing
│   ├── thank-you/         # Thank you page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer, Logo, WhatsApp button
│   ├── sections/          # Home page sections
│   └── ui/                # Reusable UI components
├── config/                # Configuration files
│   ├── site.config.ts     # Business info, navigation
│   ├── seo.config.ts      # SEO metadata, JSON-LD schemas
│   ├── services.config.ts # Services data
│   ├── theme.config.ts    # Theme colors, animations
│   ├── contact.config.ts  # Contact form config, FAQ data
│   └── testimonials.config.ts # Customer reviews
└── lib/                   # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd shrikrishnawebsite
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

All website content is config-driven. To update content, edit the files in `src/config/`:

### Business Information

Edit `src/config/site.config.ts`:

- Company name, tagline
- Phone number, email, address
- Coordinates for Google Maps
- Working hours
- Social links

### Services

Edit `src/config/services.config.ts`:

- Add/modify services
- Update descriptions, use cases, benefits
- Modify service areas

### Testimonials

Edit `src/config/testimonials.config.ts`:

- Add customer reviews
- Update ratings and dates

### FAQ

Edit `src/config/contact.config.ts`:

- Add/modify FAQ questions and answers

### SEO

Edit `src/config/seo.config.ts`:

- Page titles and descriptions
- JSON-LD structured data
- Keywords

## 🎨 Customization

### Colors

The theme uses a deep navy blue primary color and warm orange accent. Modify in `src/app/globals.css`:

```css
@theme {
  --color-primary-500: #1e3a5f;
  --color-accent-500: #f5a623;
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`. Currently using:

- **Headings**: Outfit
- **Body**: DM Sans

## 📱 Features

- ✅ Fully responsive design
- ✅ SEO optimized with JSON-LD structured data
- ✅ WhatsApp integration
- ✅ Click-to-call functionality
- ✅ Contact form with validation
- ✅ Google Maps embed
- ✅ Smooth animations
- ✅ Accessible (WCAG compliant)
- ✅ Fast performance (optimized images, fonts)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

### Other Platforms

Build the production version:

```bash
npm run build
```

The output will be in the `.next` folder.

## 📄 License

This project is proprietary software for Shri Krishna Core Cutting and Rebaring.

## 📞 Contact

**Shri Krishna Core Cutting and Rebaring**

- Phone: 078887 84324
- Address: #169, Krishna Enclave, KHANPUR, Kharar, Punjab 140301
- [Google Maps](https://www.google.com/maps/place/Shri+Krishna+Core+Cutting+and+Rebaring)
