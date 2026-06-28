# Leonardo Nkuba - Portfolio

A modern, tech-focused personal portfolio website featuring a terminal-inspired design system with responsive layout and smooth interactions.

## 🎨 Design System

### Typography
- **Headings**: Archivo Black (uppercase, 700 weight)
- **Body/Mono**: JetBrains Mono (400–700 weight, for code-like styling)

### Color Palette
- **Terminal Green**: `#2DE2A1` — Primary accent and interactive elements
- **Deep Charcoal**: `#070707` — Background and dark text
- **System Gray**: `#606060` — Secondary text and borders
- **Pure White**: `#FFFFFF` — Primary text
- **Dark Border Gray**: `#1C1C1C` — Subtle dividers

### Components
- Terminal-style navbar with mono logo (`>_ LEONARDO _`)
- Navigation links with `//` prefix (e.g., `// BIO`, `// EXPERIENCE`)
- Green CTA button (`CONNECT_`) with hover effects
- Hero section with green text highlights
- Responsive hamburger menu (mobile)
- Scroll-reveal animations for sections
- Project cards with tech tags

## 📂 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Complete styling system
├── js/
│   └── script.js       # Interactivity and animations
├── data/
│   └── content.json    # Dynamic content (bio, skills, experience, projects)
├── images/
│   ├── favicon.ico     # Browser tab icon
│   └── [demo images]   # Project screenshots
└── README.md           # This file
```

## 🚀 Features

- **Responsive Design** — Mobile-first approach with breakpoints at 480px, 768px, 1080px
- **Dynamic Content** — All content loaded from `data/content.json` via Fetch API
- **Smooth Animations** — Scroll reveal with IntersectionObserver, fade-in effects
- **Navigation** — Fixed navbar with sticky scroll behavior and mobile toggle menu
- **Accessibility** — Semantic HTML, ARIA labels, Font Awesome 6.4.0 icons

## 🛠 Setup

1. **No build tools required** — vanilla HTML/CSS/JavaScript stack
2. **Local Development**:
   ```bash
   # Open in a local server (required for CORS with JSON fetch)
   npx http-server
   # or
   python -m http.server 8000
   ```
3. **Deploy** — Upload files to any static hosting (Vercel, Netlify, GitHub Pages)

## 📝 Customization

### Update Your Content
Edit `data/content.json`:
```json
{
  "name": "Your Name",
  "tagline": "Your professional tagline",
  "bio": "About you...",
  "skills": ["Skill1", "Skill2"],
  "experience": [...],
  "projects": [...],
  "social": [...]
}
```

### Modify Styling
CSS variables in `css/style.css`:
```css
:root {
  --green: #2de2a1;
  --dark-navy: #070707;
  --slate: #606060;
  --white: #ffffff;
  --border-gray: #1c1c1c;
  --heading-font: 'Archivo Black';
  --mono-font: 'JetBrains Mono';
}
```

## 📱 Responsive Breakpoints

| Device | Width | Behavior |
|--------|-------|----------|
| Mobile | ≤480px | Stack layout, hamburger menu, full-width sections |
| Tablet | 481–768px | Medium spacing, dropdown nav |
| Desktop | ≥769px | Fixed sidebar nav, horizontal layouts |
| Wide | ≥1080px | Optimized padding, max-width containers |

## 🔧 Key Functions (JavaScript)

- `loadContent()` — Fetch and render content from JSON
- `renderContent(data)` — Populate hero, about, experience, projects, contact
- Menu toggle with `active` class and smooth transitions
- Smooth scroll to sections with `preventDefault`
- Scroll reveal animations using IntersectionObserver

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📋 Performance Tips

- Minify CSS/JS for production
- Compress images (hero screenshots, project demos)
- Use lazy loading for project images if needed
- Consider CDN for Google Fonts and Font Awesome

## 📜 License

Personal portfolio — feel free to fork and customize for your own use.

---

**Last Updated**: June 28, 2026  
**Live Site**: [Your deployment URL]
