# AGENTS.md

## Mission

Build a premium, mobile-first, one-page website for **SM Driving School Ltd** that feels modern, trustworthy, personal, and conversion-focused.

The site must highlight **Clifford Sta Maria** as the expert instructor, build trust quickly, and drive visitors to **call** or **submit the contact form**.

This is a polished marketing site, not a dashboard and not a generic template.

---

## Working rules

- Use **React + TypeScript + Tailwind CSS + Motion**.
- Use **Context7 MCP** for all frameworks, libraries, tools, implementation research, and debugging. This is mandatory.
- Keep code clean, typed, reusable, and easy to maintain.
- Prefer composition over duplication.
- Do not hardcode section content inside UI components.
- Store all copy, labels, lists, prices, FAQs, reviews, service data, navigation items, and image references in `src/content/`.
- Keep components presentational where possible.
- Most users will be on mobile. Treat mobile quality as equal to or higher priority than desktop.
- Use semantic HTML, accessible interactions, and clear focus states.
- Avoid unnecessary dependencies. Only add a dependency when it clearly improves UX, maintainability, or accessibility.

---

## Tech and library expectations

Required:

- React
- TypeScript
- Tailwind CSS
- Motion

Allowed and recommended when useful:

- React Hook Form
- Zod
- Lucide React
- clsx
- tailwind-merge
- Embla Carousel
- shadcn/ui (selectively, not excessively)

Do not introduce heavy or flashy libraries for simple problems.

---

## Product scope for V1

Implement a **single-page website** with these sections in this order:

1. Header / Navigation
2. Hero
3. Trust Strip
4. Services
5. Pricing
6. Reviews
7. About
8. FAQs
9. Contact
10. Footer

Use anchor navigation for section jumps.

Do not add V2 features yet. Do not build CMS, login, chatbot, or booking systems in V1.

---

## Brand direction

The site should feel:

- practical
- modern
- trustworthy
- premium
- local
- human
- polished

It must **not** feel:

- corporate
- childish
- generic
- gimmicky
- over-animated

### Brand positioning

SM Driving School helps Auckland learners, test candidates, and overseas drivers become safe, confident, test-ready drivers through practical, transparent one-on-one instruction.

### Core differentiators

Make these clear across the site:

- Learn directly from **Clifford Sta Maria**
- **NZTA Approved Driving Instructor**
- **Street Talk Driver Education Provider**
- Strong focus on:
  - learner drivers
  - restricted licence preparation
  - full licence preparation
  - overseas licence conversions
- Familiarity with local test expectations, especially **VTNZ Glenfield**
- Practical, honest teaching
- Support for tricky manoeuvres like **reverse parallel parking**
- Modern coaching supported by **video assessments**

---

## Visual design system

### Color direction

Use the logo colors as core brand anchors:

- Red: `#ed3337`
- Blue: `#2f5496`

Preferred overall visual direction:

- light-first layouts
- strong navy / dark sections for contrast
- red used for CTA emphasis and key accents
- blue used for trust, structure, and brand identity

Do not overuse bright red as a large background color.

### Typography

Preferred default pairing:

- Headings: **Sora**
- Body/UI: **Inter**

Typography must feel strong, modern, readable, and premium on mobile.

### Motion

Use smooth, restrained animation only where it improves the experience:

- section reveals
- card entrances
- FAQ transitions
- button and hover states
- mobile menu transitions
- subtle hero accents

Do not overdo animation.
Do not create distracting motion.
The site should feel alive, not busy.

---

## Content architecture

All user-facing content must live in `src/content/`.

Suggested structure:

- `brand.ts`
- `navigation.ts`
- `hero.ts`
- `trust.ts`
- `services.ts`
- `pricing.ts`
- `reviews.ts`
- `about.ts`
- `faqs.ts`
- `contact.ts`
- `footer.ts`

Image references should also be driven from content files where appropriate.

Do not bury copy directly inside JSX unless it is truly trivial UI text.

---

## Asset rules

The initial Codex prompt will include these attachments:

- `image1` = photo of **Clifford Sta Maria**
- `image2` = **SM Driving School logo** (`logo.png`)

### Required usage rules

- Treat Clifford’s real image as a major trust-building asset.
- Treat the logo as the primary brand anchor.
- Use the real Clifford photo in the **About** section at minimum.
- Use the Clifford photo in the **Hero** section as well if it improves the design.
- Do not distort, stretch, or over-style the logo or photo.
- Use tasteful cropping and layout integration.

### AI-generated visuals

OpenAI-generated images may be created and used when they genuinely improve the website.

Good use cases:

- subtle road/route-themed hero art
- abstract branded visual accents
- premium supporting illustrations
- section graphics that match the site style

Generated visuals must feel:

- modern
- premium
- clean
- brand-consistent
- non-generic

Avoid cheesy, unrealistic, cartoonish, or obviously low-quality imagery.

Priority order:

1. real brand assets
2. real Clifford photo
3. high-quality generated supporting visuals
4. generic filler imagery only as a last resort

---

## Section requirements

### Header / Navigation

Include:

- logo
- brand name
- anchor links to major sections
- primary CTA: **Book a Lesson**
- mobile-friendly navigation
- sticky behavior on scroll

### Hero

Must communicate:

- what the business offers
- who it is for
- why it is trustworthy
- how to take action quickly

Use this direction:

- strong headline about learning to drive with confidence in Auckland
- supporting copy about learner lessons, restricted/full prep, and overseas conversions
- mention Clifford and his NZTA approval
- show clear CTAs:
  - **Book a Lesson**
  - **Call Now**

Include compact trust highlights such as:

- NZTA Approved Instructor
- Restricted & Full Test Prep
- Overseas Licence Support
- Auckland Based

### Trust Strip

Use a compact row or grid of trust items:

- NZTA Approved Driving Instructor
- Street Talk Driver Education Provider
- Local Test Preparation
- Practical One-on-One Lessons

### Services

Create 4 clear service cards:

- Learner Driver Lessons
- Restricted Licence Preparation
- Full Licence Preparation
- Overseas Licence Conversion Support

Each card should explain:

- who it is for
- what the lesson focus is
- what outcome the student gets

### Pricing

Show:

- **NZ$80 per hour**
- **NZ$120 per hour on weekends and public holidays**

Keep pricing simple, clean, and transparent.

### Reviews

Include a polished reviews section with support for:

- student name
- quote
- optional tag or outcome label

Good review tag examples:

- Passed Restricted
- Full Licence Prep
- Overseas Conversion
- Nervous Beginner
- Parallel Parking Help

If real reviews are not yet available, use tasteful placeholder content in `src/content/reviews.ts` that is easy to replace later.

### About

This section is important.

Position Clifford as:

- founder
- lead instructor
- credible expert
- practical and transparent teacher
- someone focused on long-term safe driving, not just test passing

Use the provided About copy as the base and refine lightly for website readability without changing its meaning.

Must include:

- Clifford Sta Maria
- founder / lead instructor
- NZTA Approved Driving Instructor
- Street Talk Driver Education Provider
- specializations and teaching approach

### FAQs

Implement a smooth accordion.

Include these FAQ topics:

- complete beginners
- restricted prep
- full licence prep
- overseas conversions
- Auckland coverage
- weekend lessons
- what to bring
- parking / manoeuvres
- lesson duration
- contact method

### Contact

Must include:

- phone: `+64 21 055 3275`
- email: `info@smdriving.co.nz`

Include a working enquiry form with:

- First Name
- Last Name
- Email
- Phone Number
- License Type
  - Learners License
  - Restricted License
  - Overseas License
- Experience in Driving
  - Zero to little experience
  - Some experience
  - Can drive but needs to learn the NZ rules
- Message
- Send Message button

Form requirements:

- use **Formspree**
- send to `info@smdriving.co.nz`
- proper validation
- success state
- error state
- accessible labels
- mobile-friendly UX

### Footer

Include:

- logo
- business name
- phone
- email
- quick anchor links
- short brand line
- copyright

---

## Content facts locked for V1

Business name:

- **SM Driving School Ltd**
- short form: **SM Driving School**

Instructor:

- **Clifford Sta Maria**

Credentials:

- **NZTA Approved Driving Instructor**
- **Street Talk Driver Education Provider (NZTA Approved)**

Teaching focus:

- practical, transparent coaching
- learner drivers
- restricted licence prep
- full licence prep
- overseas licence conversions
- reverse parallel parking
- mock/video assessments
- VTNZ Glenfield familiarity

Contact:

- `+64 21 055 3275`
- `info@smdriving.co.nz`

Pricing:

- `NZ$80 per hour`
- `NZ$120 per hour on weekends and public holidays`

---

## UX and quality standards

The website must be:

- mobile-first
- responsive across small, medium, and large screens
- fast and visually polished
- accessible
- professional and conversion-focused

Required UX qualities:

- clear visual hierarchy
- generous spacing
- large tap targets
- strong CTA visibility
- clean card layouts
- no clutter
- no broken states
- no confusing interaction patterns

Avoid:

- template-looking layouts
- weak typography
- overcrowded hero sections
- generic stock feel
- sloppy spacing
- animation jank

---

## SEO and local intent

Write naturally for local relevance without keyword stuffing.

Work these ideas into copy where appropriate:

- Auckland driving lessons
- driving instructor Auckland
- restricted licence preparation
- full licence preparation
- overseas licence conversion
- VTNZ Glenfield preparation
- NZTA Approved Driving Instructor

---

## Implementation standards

- Build reusable section and shared UI components.
- Keep styling tidy and consistent.
- Prefer clean data-driven rendering from `src/content/`.
- Maintain a clear folder structure.
- Use accessible form controls and semantic headings.
- Respect reduced-motion preferences where appropriate.
- Optimize image usage and avoid unnecessary performance costs.

---

## Review guidelines

Before declaring the task complete, verify all of the following:

### Functional checks

- all required sections exist and appear in the correct order
- navigation links scroll correctly
- primary CTAs are visible and sensible
- contact form is wired correctly
- form validation works
- success and error states are handled
- no dead buttons or placeholder links without intent

### Visual checks

- mobile layout feels premium, not compressed
- desktop layout remains polished
- typography is strong and readable
- colors align with brand direction
- Clifford image and logo are used well
- animations are subtle and smooth
- spacing is consistent
- there are no obvious visual bugs

### Code checks

- no hardcoded content in components
- content is organized in `src/content/`
- components are reusable
- TypeScript is clean
- no unnecessary duplication
- no obvious unused code or dead abstractions

### Accessibility and quality checks

- semantic structure is sensible
- focus states are visible
- contrast is acceptable
- inputs have labels
- keyboard interaction works for nav and FAQ
- reduced-motion behavior is not ignored

### Build checks

Run all relevant repo checks before finishing, at minimum:

- install dependencies if needed
- lint
- typecheck
- build

Do not stop at “looks done.”
Verify it.

---

## Completion contract

A task is only complete when:

1. the full V1 site is implemented
2. the design matches the brand direction
3. content is data-driven from `src/content/`
4. the attached assets are used appropriately
5. the contact form works with Formspree
6. mobile experience is polished
7. lint, typecheck, and build pass
8. there are no obvious functional or visual bugs
9. the final summary explains what was built, what files were touched, and what was verified

Do not finish early with partial implementation unless explicitly asked for a partial result.

---

## Future scope

These are V2 ideas only. Do not build them in V1 unless explicitly asked:

- AI chatbot
- login for Clifford
- CMS / content editing
- booking system
- admin features
