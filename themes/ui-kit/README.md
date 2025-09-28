# UI Kit (Modern Dark/Cyan Theme)

A standalone, portable UI Kit built on Bootstrap 5.3+, AOS animations, and a modern dark/cyan aesthetic. Includes rich component examples, auth forms, layouts, utilities, and JavaScript enhancements.

## Features
- Responsive grid & layout helpers
- Navbars (sticky, transparent, scrolling)
- Hero sections (centered, split, gradient, glassmorphism)
- Cards (stats, pricing, feature, interactive hover)
- Forms (login, register, contact, newsletter, multi-step)
- Buttons (variants, outline, soft, ghost, gradient)
- Badges, alerts, toasts, modals, offcanvas
- Accordions, tabs, timelines, progress, steps
- Tables (striped, interactive, responsive)
- Footers (simple, extended, newsletter, social)
- Dark/Light theme toggle with CSS variables
- Back to top button, ScrollSpy, smooth scrolling
- AOS (Animate On Scroll) integration
- Utility classes for spacing, shadows, glass, gradients, depth, motion
- Accessible markup (ARIA attributes where applicable)

## Structure
```
themes/ui-kit/
  README.md
  index.html                # Overview landing page
  components.html           # Core components catalog
  forms.html                # All form variants & auth screens
  utilities.html            # Utility classes showcase
  layouts.html              # Layout patterns (dashboard, marketing)
  pricing.html              # Pricing tables & plans
  docs.html                 # How to use & extend
  assets/
    css/
      ui-kit.css            # Core theme styles
      ui-kit-extensions.css # Optional extras
    js/
      ui-kit.js             # Interactions & helpers
    img/
      placeholders/         # Placeholder images (optional)
```

## Usage
Open `index.html` directly in a browser or integrate pieces into your project. No build step required.

## Dependencies (CDN)
- Bootstrap 5.3.x CSS & JS Bundle
- AOS (Animate On Scroll)
- Font Awesome 6.x (icons)
- (Optional) Google Fonts: Inter, Poppins or similar

## Theming
Customize via CSS variables in `:root` and `[data-theme="dark"]` blocks inside `ui-kit.css`.

## JavaScript Enhancements
`ui-kit.js` includes:
- Theme toggle (persisted in localStorage)
- Back-to-top visibility + smooth scroll
- ScrollSpy activation
- AOS init with custom easing
- Helper: copy code snippets
- Demo: dynamic counters

## License
Follows project root license (MIT). You may extract and reuse freely.
