# MELP Design System

## Overview
This design system is built around a carefully curated 4-color palette with **#EE4136** as the brand accent color (used sparingly at 10%) and sophisticated neutral tones for the primary interface. The system follows modern design principles with comprehensive color scales, typography, spacing, and component patterns.

## 🎨 Color System

### Color Philosophy
Our design system follows the **10% Brand Color Rule** - the vibrant brand color (#EE4136) is used strategically in only 10% of the interface for maximum impact, while neutral tones create a sophisticated, readable foundation.

### Brand Colors (10% Usage)
The brand color (#EE4136) is available in 11 shades for accent elements:
- `--brand-50` to `--brand-950` 
- Main brand color: `--brand-500` (#EE4136)
- **Usage**: Call-to-action buttons, key highlights, interactive states

### Neutral Colors (90% Usage)
Based on your custom palette (#EEF0F2, #C6C7C4, #353B3C):
- `--neutral-50` to `--neutral-950`
- **Light**: #EEF0F2 (backgrounds, cards)
- **Medium**: #C6C7C4 (borders, subtle elements)  
- **Dark**: #353B3C (text, headers)

### Semantic Colors
- **Success**: Complementary green tones for positive actions
- **Warning**: Amber tones for cautionary messages
- **Error**: Harmonious red tones for destructive actions

### Usage Classes
```css
/* Brand Colors (Use Sparingly - 10% Rule) */
.text-brand-500      /* Brand accent text */
.bg-brand-500        /* Brand accent background */
.border-brand-500    /* Brand accent border */

/* Neutral Colors (Primary Interface - 90% Usage) */
.text-neutral-900    /* Primary text (#353B3C) */
.text-neutral-600    /* Secondary text */
.text-neutral-400    /* Muted text */
.bg-neutral-50       /* Light background (#EEF0F2) */
.bg-neutral-100      /* Card backgrounds */
.bg-neutral-900      /* Dark backgrounds */
.border-neutral-300  /* Subtle borders (#C6C7C4) */

/* Semantic Colors */
.text-success-600    /* Success text */
.text-warning-600    /* Warning text */
.text-error-600      /* Error text */
.bg-success-50       /* Success background */
.bg-warning-50       /* Warning background */
.bg-error-50         /* Error background */
```

## 📐 Border Radius Scale
```css
.rounded-xs     /* 4px */
.rounded-sm     /* 6px */
.rounded-md     /* 8px */
.rounded-lg     /* 10px (default) */
.rounded-xl     /* 12px */
.rounded-2xl    /* 16px */
.rounded-3xl    /* 24px */
.rounded-full   /* 9999px */
```

## 🎭 Shadow System
```css
.shadow-xs      /* Subtle shadow */
.shadow-sm      /* Small shadow */
.shadow-md      /* Medium shadow */
.shadow-lg      /* Large shadow */
.shadow-xl      /* Extra large shadow */
.shadow-2xl     /* 2x large shadow */
.shadow-primary /* Primary color shadow */
```

## 🔮 Glass Effects
```css
.glass-effect   /* Light glassmorphism */
.glass-dark     /* Dark glassmorphism */
.glass-strong   /* Strong blur effect */
.navbar-glass   /* Navbar specific glass */
```

## 🎨 Gradient Utilities
```css
.gradient-primary      /* Primary gradient */
.gradient-primary-soft /* Soft primary gradient */
.gradient-radial-primary /* Radial primary gradient */
```

## 🎯 Interactive Elements

### Button Variants
```css
.btn-primary    /* Brand accent button (limited use) */
.btn-secondary  /* Neutral outlined button */
.btn-ghost      /* Transparent hover button */
```

### Card Variants
```css
.card-elevated  /* Elevated card with shadow */
.card-flat      /* Flat card with neutral border */
.card-brand     /* Brand accent card (limited use) */
```

### Interactive States
```css
.interactive    /* Hover lift effect */
.focus-ring     /* Focus ring styling */
```

## 🌙 Dark Mode Support
All colors automatically adapt to dark mode using CSS custom properties. The design system provides proper contrast ratios for both light and dark themes.

## 📱 Responsive Design
The design system is built mobile-first and scales beautifully across all device sizes.

## 🛠 Implementation Examples

### Primary Button (Brand Accent - Limited Use)
```jsx
<button className="btn-primary px-6 py-3 rounded-lg font-medium">
  Get Started
</button>
```

### Secondary Button (Neutral - Primary Use)
```jsx
<button className="bg-neutral-100 text-neutral-900 border border-neutral-300 px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
  Learn More
</button>
```

### Card Component
```jsx
<div className="card-elevated bg-neutral-50 p-6 space-y-4">
  <h3 className="text-xl font-semibold text-neutral-900">Card Title</h3>
  <p className="text-neutral-600">Card description with proper contrast</p>
</div>
```

### Navigation
```jsx
<nav className="bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-300 px-6 py-4">
  <div className="flex items-center justify-between">
    {/* Brand logo with accent color */}
    <div className="text-brand-500 font-bold">MELP</div>
    {/* Navigation items in neutral colors */}
    <div className="space-x-6 text-neutral-700">
      <a href="#" className="hover:text-neutral-900">Features</a>
      <a href="#" className="hover:text-neutral-900">Pricing</a>
    </div>
  </div>
</nav>
```

### Alert Components
```jsx
{/* Success Alert */}
<div className="bg-success-50 border border-success-200 text-success-800 p-4 rounded-lg">
  <div className="flex items-center space-x-2">
    <span className="text-success-600">✓</span>
    <span>Success message</span>
  </div>
</div>

{/* Warning Alert */}
<div className="bg-warning-50 border border-warning-200 text-warning-800 p-4 rounded-lg">
  <div className="flex items-center space-x-2">
    <span className="text-warning-600">⚠</span>
    <span>Warning message</span>
  </div>
</div>

{/* Error Alert */}
<div className="bg-error-50 border border-error-200 text-error-800 p-4 rounded-lg">
  <div className="flex items-center space-x-2">
    <span className="text-error-600">✕</span>
    <span>Error message</span>
  </div>
</div>
```

## 🎨 Color Reference

### Brand Palette (#EE4136) - 10% Usage Rule
Use sparingly for maximum impact:
- **50**: Very light tint for subtle brand hints
- **100**: Light tint for brand backgrounds  
- **200**: Light for hover states on neutral elements
- **300**: Medium light for secondary brand elements
- **400**: Medium for less prominent brand text
- **500**: Main brand color (#EE4136) - Primary CTAs only
- **600**: Darker for hover states on brand elements
- **700**: Dark for active/pressed states
- **800**: Very dark for high contrast brand text
- **900**: Darkest for maximum brand contrast
- **950**: Near black for extreme contrast needs

### Neutral Palette (Your Custom Colors) - 90% Usage
Primary interface colors based on your palette:
- **50**: #EEF0F2 - Light backgrounds, cards
- **100**: Lighter variant for subtle backgrounds
- **200**: Light borders and dividers
- **300**: #C6C7C4 - Medium borders, disabled states
- **400**: Medium text, placeholders
- **500**: Balanced neutral for icons
- **600**: Secondary text, labels
- **700**: Primary text alternative
- **800**: Strong text on light backgrounds
- **900**: #353B3C - Primary text, headers
- **950**: Darkest for maximum contrast

### Usage Guidelines
1. **90% Neutral**: Use neutral colors for layouts, text, backgrounds, borders
2. **10% Brand**: Use brand color only for key actions, highlights, brand elements
3. **Semantic**: Use success/warning/error for specific UI states
4. **Accessibility**: Always maintain WCAG AA contrast ratios (4.5:1 minimum)
5. **Hierarchy**: Use lighter neutrals for backgrounds, darker for text

### Brand Color Usage Examples
✅ **Good Uses (10%)**:
- Primary CTA buttons
- Active navigation states  
- Key icons and highlights
- Form focus states
- Progress indicators

❌ **Avoid Overuse**:
- Large background areas
- All text content
- Every interactive element
- Decorative elements

## 🔧 Customization
To customize the design system, modify the CSS custom properties in `app/globals.css`:

```css
:root {
  /* Brand Colors - Use Sparingly (10% Rule) */
  --brand-500: oklch(0.6307 0.211 28.41); /* #EE4136 */
  
  /* Neutral Colors - Primary Interface (90% Usage) */
  --neutral-50: oklch(0.947 0.003 258.98);  /* #EEF0F2 */
  --neutral-300: oklch(0.794 0.005 151.33); /* #C6C7C4 */
  --neutral-900: oklch(0.244 0.01 172.61);  /* #353B3C */
  
  /* Design System Settings */
  --radius: 0.625rem; /* Default border radius */
}
```

## 🚀 Migration Guide
When updating from the previous color system:

1. Replace `primary-*` classes with `brand-*` for accent colors
2. Use `neutral-*` classes for 90% of your interface
3. Update button components to use neutral colors as primary
4. Reserve brand colors for CTAs and key highlights only
5. Test contrast ratios with new color combinations
