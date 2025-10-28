# Site Images

This folder contains general site images including portrait, Open Graph images, and favicons.

## Required Files

### Portrait
```
portrait-placeholder.jpg
```
- Artist portrait for About page
- Recommended size: 800x1000px (4:5 ratio)
- Format: JPG, quality 85%

### Open Graph / Social Sharing
```
og-default.jpg
```
- Used when sharing site on social media
- Size: 1200x630px (required by Open Graph)
- Format: JPG
- Include site/artist name if desired

### Favicons
```
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png (180x180)
```

#### Creating Favicons

**Option 1: Use an online generator**
- Upload a square logo/image to https://realfavicongenerator.net/
- Download the generated files
- Place them in this directory

**Option 2: Manual creation**
Starting with a square image (at least 512x512px):

```bash
# Using ImageMagick
magick logo.png -resize 16x16 favicon-16x16.png
magick logo.png -resize 32x32 favicon-32x32.png
magick logo.png -resize 180x180 apple-touch-icon.png
```

**Suggested favicon design:**
- Simple, recognizable mark
- High contrast (will be very small)
- Monogram or abstract symbol works well
- Consider a colored background square with initials "BS"

## File Checklist

- [ ] portrait-placeholder.jpg (800x1000px)
- [ ] og-default.jpg (1200x630px)
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180px)

## Current Status

All files are currently **missing/placeholder**. The site will work without them, but you'll see broken image icons. Add these files before deployment.
