# Agent Context Guide - Carolina Jardim Website

This document provides context for AI agents working on this repository.

## Repository Overview

This is a **static HTML website** for a Portuguese clinical psychologist's professional portfolio. The site is built with traditional HTML/CSS/JavaScript (no build system, no framework).

## Project Type

- **Type**: Static website
- **Language**: Portuguese (pt)
- **No package manager**: Libraries are included directly in the repository
- **No build process**: Files are served directly
- **Deployment**: Static hosting (likely GitHub Pages, Netlify, or similar)

## Key Files

### Entry Point
- `index.html` - Single-page application (all content in one file)

### Custom Code
- `js/custom.js` - All custom JavaScript functionality
  - Menu handling
  - Carousel initialization
  - Animation setup
  - Mobile menu toggle
  - Scroll animations

### Styling
- `css/style.css` - Main custom stylesheet
- `css/bootstrap.min.css` - Bootstrap framework (v4.4.1)
- Other CSS files are third-party libraries

### Assets
- `images/` - All images (profile, logos, icons, posts)
- `fonts/` - Custom icon fonts (icomoon)

## Architecture Patterns

### JavaScript
- Uses jQuery for DOM manipulation
- Event-driven architecture
- Plugin-based initialization (AOS, Owl Carousel, etc.)
- No module system (all global scope)

### CSS
- Bootstrap 4 grid system
- Custom SCSS compiled to CSS (source files in `.gitignore`)
- Responsive design with mobile-first approach

### HTML Structure
- Single-page with anchor navigation (`#section-id`)
- Semantic HTML5
- Meta tags for SEO and social sharing

## Dependencies

### Current Versions (2024)
- jQuery: **3.5.1** (latest: 3.7.1)
- jQuery Migrate: **3.0.0** (latest: 3.4.1)
- Bootstrap: **4.4.1** (latest: 5.3.3)
- AOS: Unknown version (check file headers)
- Owl Carousel: Unknown version (check file headers)

### Third-Party Services
- Typeform (embedded forms)
- Insights.io (analytics)
- Hotjar (analytics)
- Google Fonts (Crimson Text, Playfair Display)

## Common Tasks

### Adding a New Section
1. Add HTML section to `index.html` with unique `id`
2. Add navigation link in navbar
3. Style in `css/style.css`
4. Add scroll animation if needed (AOS attributes)

### Updating Content
- All content is in `index.html`
- Text is in Portuguese
- Maintain professional tone

### Adding JavaScript Functionality
- Add to `js/custom.js` within the jQuery `$(function() {})` wrapper
- Follow existing patterns (plugin initialization, event handlers)

### Updating Libraries
1. Download new version
2. Replace file in `js/` or `css/` directory
3. Test thoroughly (especially jQuery/Bootstrap updates)
4. Update version notes in README.md

## Important Notes for Agents

### ⚠️ Breaking Changes Risk
- **Bootstrap 4 → 5**: Major breaking changes (class names, JavaScript API)
- **jQuery updates**: Usually safe, but test thoroughly
- Always test on multiple browsers after updates

### 🔒 Security Considerations
- Third-party scripts (Typeform, Insights, Hotjar) load from external domains
- No sensitive data in repository (all public content)
- Analytics IDs are in HTML (not secrets, but be aware)

### 📝 Code Style
- Indentation: 2 spaces
- jQuery: Use `$` shorthand
- Comments: Minimal (mostly in custom.js)
- Portuguese: All user-facing text in Portuguese

### 🎨 Design System
- Color scheme: Teal/green tones (`#afbfb4` background)
- Typography: Playfair Display (headings), Crimson Text (body)
- Icons: Custom icomoon font
- Images: Unsplash for placeholder images

## File Modification Guidelines

### Safe to Modify
- `index.html` - Content updates
- `css/style.css` - Styling changes
- `js/custom.js` - Functionality additions
- `images/` - Asset updates

### Be Careful Modifying
- `js/*.min.js` - Minified libraries (use source if available)
- `css/*.min.css` - Minified stylesheets
- Third-party library files

### Don't Modify
- `.gitignore` - Unless adding new ignore patterns
- Git history files

## Testing Checklist

When making changes, verify:
1. ✅ Mobile menu works
2. ✅ All navigation links scroll correctly
3. ✅ Typeform buttons open popup
4. ✅ Animations trigger on scroll
5. ✅ Images load correctly
6. ✅ Social media links work
7. ✅ Responsive design on mobile/tablet/desktop

## Deployment

- Static files only
- No server-side code
- No environment variables needed
- Can be deployed to any static host

## Contact Information

- **Developer**: André Rodrigo (andrerodrigo.com)
- **Client**: Carolina Jardim (acarolinajardim.psicologia@gmail.com)
- **Website**: acarolinajardim.com

## Quick Reference

```javascript
// Common jQuery patterns in this project
$(function() {
  // Menu toggle
  $(".js-menu-toggle").click(function() { ... });
  
  // Carousel initialization
  $(".owl-single").owlCarousel({ ... });
  
  // AOS animation
  AOS.init({ ... });
  
  // Waypoints (scroll triggers)
  $(".count-numbers").waypoint(function() { ... });
});
```

```css
/* Common CSS patterns */
.custom-hero { /* Hero section */ }
.section { /* Content sections */ }
.site-nav { /* Navigation */ }
.btn-teal { /* Primary buttons */ }
```

---

**Last Updated**: 2024
**Maintained By**: André Rodrigo
