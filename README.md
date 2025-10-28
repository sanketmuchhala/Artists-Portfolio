# Briannon Sullivan - Artist Portfolio

A minimalist portfolio website built with Jekyll, optimized for GitHub Pages. Features ultra-minimal design, typography-forward aesthetics, and responsive grid galleries.

## 🎨 Design Features

- **Typography:** Times New Roman, generous whitespace, clear hierarchy
- **Layout:** Clean grid system with responsive breakpoints
- **Color Palette:** Black on white with subtle grays (#f5f5f5 dividers)
- **Interactions:** Smooth animations, accessible focus states, keyboard navigation
- **Performance:** Lazy loading, optimized images, minimal JavaScript

## 📁 Project Structure

```
Artists-Portfolio/
├── _config.yml              # Jekyll configuration
├── _data/                   # Data files
│   ├── exhibitions.yml      # Exhibition history
│   ├── navigation.yml       # Site navigation
│   └── press.yml           # Press mentions
├── _includes/              # Reusable components
│   ├── site-header.html
│   ├── site-footer.html
│   ├── work-card.html
│   ├── filters.html
│   └── analytics.html
├── _layouts/               # Page templates
│   ├── default.html        # Base layout
│   ├── home.html          # Home page
│   ├── page.html          # Standard pages
│   └── work.html          # Artwork detail
├── _works/                # Artwork collection
│   ├── 01-woven-memory.md
│   ├── 02-threaded-landscape.md
│   └── ...
├── assets/
│   ├── art/               # Artwork images
│   ├── css/main.css       # Main stylesheet
│   ├── documents/         # PDFs, press kits
│   ├── images/            # Site images, favicons
│   └── js/site.js         # Main JavaScript
├── about.md               # About page
├── contact.md             # Contact page
├── exhibitions.md         # Exhibitions page
├── index.md               # Home page
├── press.md               # Press page
├── works.md               # All works page
├── Gemfile                # Ruby dependencies
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Ruby** (2.7.0 or higher)
- **Bundler** gem
- **Git**

### Installation

1. **Clone the repository** (or navigate to existing folder):
   ```bash
   cd Artists-Portfolio
   ```

2. **Install Ruby dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**:
   Open http://localhost:4000 in your browser

### First-Time Ruby Setup (macOS)

If you don't have Ruby/Bundler installed:

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby via rbenv
brew install rbenv ruby-build
rbenv install 3.2.0
rbenv global 3.2.0

# Add to ~/.zshrc or ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install Bundler
gem install bundler

# Now proceed with bundle install
bundle install
```

### Development Commands

```bash
# Serve with live reload
bundle exec jekyll serve

# Serve with drafts
bundle exec jekyll serve --drafts

# Build for production
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean
```

## ✏️ Content Management

### Adding a New Artwork

1. **Create a new markdown file** in `_works/`:
   ```bash
   touch _works/13-your-artwork-title.md
   ```

2. **Add YAML front matter**:
   ```yaml
   ---
   title: "Your Artwork Title"
   year: 2024
   medium: "Mixed media on canvas"
   dimensions: "48 x 36 inches"
   series: "Series Name"
   image: "/assets/art/your-image.jpg"
   thumbnail: "/assets/art/your-image-thumb.jpg"  # optional
   alt: "Descriptive alt text for accessibility"
   order: 13
   featured: true  # Appears on home page
   description: |
     Detailed description of the artwork.
     Supports **markdown** formatting.
   ---
   ```

3. **Add the artwork image** to `assets/art/`

4. **Preview locally**:
   ```bash
   bundle exec jekyll serve
   ```

### Adding an Exhibition

Edit `_data/exhibitions.yml`:

```yaml
- year: 2025
  exhibitions:
    - title: "Exhibition Title"
      venue: "Gallery Name"
      city: "City, State"
      type: "Solo"  # or Group, Two-Person
      date: "Month Day - Month Day, Year"
```

### Adding Press

Edit `_data/press.yml`:

```yaml
- title: "Article Title"
  outlet: "Publication Name"
  year: 2024
  date: "Month Year"
  url: "https://example.com/article"  # optional
```

### Updating About Page

Edit `about.md` directly. Markdown formatting is supported.

### Updating Contact Information

Edit `_config.yml`:

```yaml
author:
  name: Briannon Sullivan
  email: your-email@example.com
  instagram: yourusername
```

## 🖼️ Image Management

### Required Images

**Artwork Images** (`assets/art/`):
- Place artwork images here
- See `assets/art/README.md` for detailed specifications
- Recommended: 2400px long edge, JPG, 80-85% quality

**Site Images** (`assets/images/`):
- `portrait-placeholder.jpg` (800x1000px) - Artist portrait
- `og-default.jpg` (1200x630px) - Social sharing image
- Favicons (16x16, 32x32, 180x180) - Site icons

**Documents** (`assets/documents/`):
- `briannon-sullivan-cv.pdf` - Artist CV
- `press-kit.zip` - Optional press materials

### Replacing Demo Images

The site currently uses placeholder images. To replace with actual artworks:

1. **Download images** from Google Drive:
   https://drive.google.com/drive/folders/1-TQjxr01TvqyQyuRTzqBBskhd_YLN9MV

2. **Resize and optimize**:
   - Long edge: 2400px maximum
   - Format: JPG
   - Quality: 80-85%
   - sRGB color space

3. **Rename to match** placeholder filenames:
   - `placeholder-01.jpg` → your first artwork
   - `placeholder-02.jpg` → your second artwork
   - etc.

4. **Replace files** in `assets/art/`

5. **Test locally** before deploying

### Quick Optimization

Using ImageMagick:
```bash
cd assets/art
for img in *.jpg; do
  magick "$img" -resize 2400x2400\> -quality 82 -strip "optimized-$img"
done
```

## 🔧 Customization

### Changing Colors

Edit `assets/css/main.css`:

```css
/* Find these variables and adjust */
body {
  color: #000;           /* Text color */
  background: #fff;      /* Background */
}

/* Dividers */
border-color: #f5f5f5;

/* Hover states */
opacity: 0.7;
```

### Changing Typography

Currently using Times New Roman stack. To change, edit `assets/css/main.css`:

```css
body {
  font-family: "Times New Roman", Times, serif;  /* Change this */
  font-size: 1rem;  /* Base size: 16px */
}
```

### Modifying Grid Columns

Edit breakpoints in `assets/css/main.css`:

```css
.works-grid {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

@media (min-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
```

### Adding Google Analytics

1. Uncomment code in `_includes/analytics.html`
2. Add your GA4 tracking ID
3. Push to production

## 🌐 Deployment

See **[DEPLOY.md](DEPLOY.md)** for complete GitHub Pages deployment instructions.

### Quick Deploy

```bash
# 1. Create repo on GitHub: briannon-sullivan-portfolio

# 2. Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# 3. Push to GitHub
git remote add origin https://github.com/yourusername/briannon-sullivan-portfolio.git
git branch -M main
git push -u origin main

# 4. Enable GitHub Pages in repo Settings > Pages
# Select: Deploy from branch 'main' / (root)

# 5. Visit: https://yourusername.github.io/briannon-sullivan-portfolio
```

## ✅ Pre-Launch Checklist

### Content
- [ ] Replace all placeholder images with actual artworks
- [ ] Add artist portrait (`assets/images/portrait-placeholder.jpg`)
- [ ] Add CV PDF (`assets/documents/briannon-sullivan-cv.pdf`)
- [ ] Update About page bio and education
- [ ] Add actual exhibition history
- [ ] Add real press links
- [ ] Update contact information

### Images & Media
- [ ] Create favicons (16x16, 32x32, 180x180)
- [ ] Create Open Graph image (1200x630)
- [ ] Optimize all artwork images (2400px, 80% quality)
- [ ] Add descriptive alt text to all images

### Configuration
- [ ] Update `_config.yml` with actual URLs and info
- [ ] Update `robots.txt` with actual sitemap URL
- [ ] Review `CNAME` if using custom domain
- [ ] Add Google Analytics ID (optional)

### Testing
- [ ] Test all internal links
- [ ] Test external links (press, social)
- [ ] Test forms/email links
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test keyboard navigation
- [ ] Validate HTML/CSS

### SEO
- [ ] Add meta descriptions to pages
- [ ] Verify Open Graph tags
- [ ] Submit sitemap to Google Search Console
- [ ] Test social sharing previews

## 🐛 Troubleshooting

### "Command not found: bundle"

Install Bundler:
```bash
gem install bundler
```

### "Permission denied" errors

Use rbenv or RVM instead of system Ruby:
```bash
brew install rbenv
rbenv install 3.2.0
rbenv global 3.2.0
```

### Jekyll won't build

```bash
# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll build
```

### Changes not showing

```bash
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
# Or clear Jekyll cache:
bundle exec jekyll clean
```

### GitHub Pages not updating

- Check repo Settings > Pages is enabled
- Verify branch is set to `main`
- Check the Actions tab for build errors
- Wait 2-5 minutes for deployment

## 📄 License

This portfolio template is provided as-is. Modify and use freely.

## 💬 Support

For Jekyll documentation: https://jekyllrb.com/docs/
For GitHub Pages: https://docs.github.com/pages

---

Built with Jekyll • Hosted on GitHub Pages • © 2025 Briannon Sullivan
