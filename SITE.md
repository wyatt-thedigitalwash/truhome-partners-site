# TruHome Partners — Client Website

## Business Info
- **Business Name:** TruHome Partners
- **Industry:** Real Estate Wholesaling
- **Location:** Tampa Bay Area, FL
- **What they do:** Buy houses directly from motivated sellers for cash — any condition, fast closing. They connect distressed properties with cash buyers/investors.
- **Target Audiences:**
  1. Motivated sellers (primary) — homeowners facing foreclosure, divorce, inherited property, tax liens, code violations, relocation, behind on payments
  2. Cash buyers/investors (secondary) — looking for off-market deals in Tampa Bay

## Brand & Design
- **Tone:** Trustworthy, straightforward, local, no-pressure. Speak like a helpful neighbor, not a used car salesman.
- **Brand Colors:**
  - Brand Green (accent): #3FA380 — buttons, CTAs, icons, section labels, stat numbers, interactive accents
  - Dark Charcoal (primary): #2F343A — dark section backgrounds, hero sections, footer, primary body text
  - White: #FFFFFF — card backgrounds, light section backgrounds
  - Black (minimal): #000000 — used sparingly if needed
- **Design System Colors:**
  - Light Gray: #F5F5F5 — alternating section backgrounds, input backgrounds
  - Muted Text: #6B6B6B — secondary/supporting text
  - Green Hover: #358E6E — hover state for green buttons (~10% darker)
- **Typography:** Inter (Google Fonts), clean modern sans-serif.
- **Logo Files:** `/public/branding/`
  - `logo-lockup-dark.svg` — horizontal logo, dark text + green icon (navbar scrolled, light backgrounds)
  - `logo-lockup-white.svg` — horizontal logo, white text + green icon (navbar transparent, footer, dark backgrounds)
  - `logo-mark-colored.svg` — green house icon only (favicon, small accents)
  - `logo-stacked-dark.svg` — stacked logo (social media, square placements)
  - `banner-on-dark.svg` — wide banner, dark bg (OG/social sharing image)
  - See `/public/branding/` for full set of logo variants
- **Favicon:** `/public/favicon/favicon.png`
- **OG Image:** `/public/images/og-image.svg` (copy of banner-on-dark.svg)
- **Style:** Clean, minimal, professional. Not flashy. Think modern real estate, not techy startup. Generous whitespace, strong green CTAs, easy to scan on mobile.

## Site Structure

### Pages:
1. **Home** (`/`)
   - Hero section with headline + subheadline + CTA form (name, phone, property address)
   - "How It Works" 3-step section (Contact Us → Get Your Offer → Close On Your Timeline)
   - Why TruHome Partners (trust signals — fast closing, no fees, no repairs, any condition)
   - Short testimonial section (placeholder quotes for now)
   - Final CTA section

2. **Sell Your House** (`/sell-your-house`)
   - This is the SEO landing page and future Google Ads destination
   - Headline targeting "sell my house fast Tampa" intent
   - Multi-step or simple form (name, email, phone, property address, property condition, timeline)
   - Pain point sections: foreclosure, inherited property, divorce, tax issues, code violations, bad tenants
   - Trust signals and FAQ section

3. **How It Works** (`/how-it-works`)
   - Detailed 3-step breakdown with visuals/icons
   - "What makes us different" section
   - CTA to sell your house form

4. **About Us** (`/about`)
   - Founder story (placeholder copy)
   - Mission/values
   - Local Tampa Bay focus
   - Photo placeholder

5. **Cash Buyers** (`/buyers`)
   - "Get Access to Off-Market Deals"
   - Simple signup form (name, email, phone, buy criteria, budget range)
   - Benefits of joining the buyer list

6. **Testimonials** (`/testimonials`)
   - Grid or card layout with placeholder testimonials
   - Mix of seller and buyer testimonials
   - CTA at bottom

7. **Blog** (`/blog`)
   - Blog listing page with card layout
   - Individual blog post template (`/blog/[slug]`)
   - 2-3 placeholder posts (we'll add real SEO content later)

8. **FAQ** (`/faq`)
   - Accordion-style FAQ
   - Questions targeting common seller concerns and search queries
   - Sections: Selling Process, Costs & Fees, Timeline, Property Conditions

9. **Contact** (`/contact`)
   - Contact form (name, email, phone, message)
   - Phone number, email address (placeholders)
   - Service area mention (Tampa Bay)

### Global Components:
- **Navbar:** Logo (text for now) + nav links + "Get My Cash Offer" CTA button
- **Footer:** Logo, quick links, contact info, service area, copyright
- **CTA Banner:** Reusable section that can go on any page — "Ready to sell? Get your no-obligation cash offer today."

## Technical Notes
- All forms should use Resend for email delivery to a placeholder address
- Mobile-first responsive design
- SEO meta tags on every page (title, description, OG tags)
- Schema markup for local business on homepage
- Fast loading — no heavy images, optimize everything
- Google Analytics and Meta Pixel placeholders in layout

## Placeholder Content Guidelines
- Use realistic but clearly placeholder copy — not lorem ipsum
- Testimonials should feel real (use first name + last initial format like "Mark R.")
- Property scenarios should reference Tampa Bay neighborhoods and situations
- Phone: (813) 555-0100
- Email: info@truhomepartners.com
