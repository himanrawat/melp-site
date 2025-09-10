# MELP Design System

## Overview
This design system is built around the primary brand color **#EE4136** and follows modern design principles with comprehensive color scales, typography, spacing, and component patterns.

## 🎨 Color System

### Primary Colors
Our primary color (#EE4136) is available in 11 shades:
- `--primary-50` to `--primary-950`
- Main brand color: `--primary-500` (#EE4136)

### Semantic Colors
- **Success**: Green tones for positive actions
- **Warning**: Amber tones for cautionary messages
- **Error**: Red tones for destructive actions
- **Neutral**: Grayscale for text and backgrounds

### Usage Classes
```css
/* Text Colors */
.text-primary-500    /* Primary text */
.text-success-500    /* Success text */
.text-warning-500    /* Warning text */
.text-error-500      /* Error text */

/* Background Colors */
.bg-primary-500      /* Primary background */
.bg-primary-50       /* Light primary background */
.bg-neutral-100      /* Light neutral background */

/* Border Colors */
.border-primary-500  /* Primary border */
.border-neutral-200  /* Light border */
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
.btn-primary    /* Solid primary button */
.btn-secondary  /* Outlined primary button */
.btn-ghost      /* Transparent hover button */
```

### Card Variants
```css
.card-elevated  /* Elevated card with shadow */
.card-flat      /* Flat card with border */
.card-primary   /* Primary gradient card */
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

### Primary Button
```jsx
<button className="btn-primary px-6 py-3 rounded-lg font-medium">
  Get Started
</button>
```

### Card Component
```jsx
<div className="card-elevated p-6 space-y-4">
  <h3 className="text-xl font-semibold text-foreground">Card Title</h3>
  <p className="text-muted-foreground">Card description</p>
</div>
```

### Glass Navigation
```jsx
<nav className="navbar-glass px-6 py-4">
  <div className="flex items-center justify-between">
    {/* Navigation content */}
  </div>
</nav>
```

### Alert Components
```jsx
{/* Success Alert */}
<div className="bg-success-50 border border-success-500 text-success-700 p-4 rounded-lg">
  Success message
</div>

{/* Warning Alert */}
<div className="bg-warning-50 border border-warning-500 text-warning-700 p-4 rounded-lg">
  Warning message
</div>

{/* Error Alert */}
<div className="bg-error-50 border border-error-500 text-error-700 p-4 rounded-lg">
  Error message
</div>
```

## 🎨 Color Reference

### Primary Palette (#EE4136)
- **50**: Very light tint for backgrounds
- **100**: Light tint for subtle highlights
- **200**: Light for disabled states
- **300**: Medium light for borders
- **400**: Medium for secondary text
- **500**: Main brand color (#EE4136)
- **600**: Darker for hover states
- **700**: Dark for active states
- **800**: Very dark for emphasis
- **900**: Darkest for high contrast
- **950**: Near black for maximum contrast

### Usage Guidelines
1. Use `primary-500` for main brand elements
2. Use `primary-50` and `primary-100` for light backgrounds
3. Use `primary-600` and `primary-700` for hover/active states
4. Use `primary-800` and `primary-900` for text on light backgrounds
5. Always maintain proper contrast ratios for accessibility

## 🔧 Customization
To customize the design system, modify the CSS custom properties in `app/globals.css`:

```css
:root {
  /* Modify these values to customize your design system */
  --primary-500: oklch(0.59 0.2 15); /* Main brand color */
  --radius: 0.625rem; /* Default border radius */
  /* Add more customizations as needed */
}
```
