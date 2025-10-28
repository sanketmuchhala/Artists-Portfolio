# Image Replacement Guide

Quick reference for replacing placeholder images with actual artwork from Google Drive.

## 📥 Download from Google Drive

**Google Drive Folder:**
https://drive.google.com/drive/folders/1-TQjxr01TvqyQyuRTzqBBskhd_YLN9MV

Download all artwork images to your computer.

## 🖼️ Image Specifications

### Full-Size Artwork Images
- **Format:** JPG
- **Long Edge:** 2400px maximum
- **Short Edge:** Proportional (maintain aspect ratio)
- **Quality:** 80-85%
- **Color Space:** sRGB
- **File Size Target:** 1-3 MB per image

### Recommended Aspect Ratios
- Portrait: 3:4 (e.g., 1800 x 2400)
- Landscape: 4:3 (e.g., 2400 x 1800)
- Square: 1:1 (e.g., 2000 x 2000)

## 📝 Placeholder Mapping

Match downloaded images to these placeholder filenames:

| Placeholder File | Artwork Title | Series | Location |
|-----------------|---------------|--------|----------|
| placeholder-01.jpg | Woven Memory I | Textile Works | assets/art/ |
| placeholder-02.jpg | Threaded Landscape | Textile Works | assets/art/ |
| placeholder-03.jpg | Portrait in Fragments | Portraits | assets/art/ |
| placeholder-04.jpg | Untitled Composition No. 7 | Abstract Studies | assets/art/ |
| placeholder-05.jpg | Material Echo | Abstract Studies | assets/art/ |
| placeholder-06.jpg | Woven Memory II | Textile Works | assets/art/ |
| placeholder-07.jpg | Interlude | Textile Works | assets/art/ |
| placeholder-08.jpg | Self-Portrait (Abstract) | Portraits | assets/art/ |
| placeholder-09.jpg | Grid Study #3 | Abstract Studies | assets/art/ |
| placeholder-10.jpg | Coastal Impression | Textile Works | assets/art/ |
| placeholder-11.jpg | Figure Study in Thread | Portraits | assets/art/ |
| placeholder-12.jpg | Threshold | Abstract Studies | assets/art/ |

## 🔄 Step-by-Step Replacement Process

### Option A: Replace Existing Placeholders (Simplest)

1. **Download images** from Google Drive
2. **Resize/optimize** each image to 2400px long edge
3. **Rename** to match placeholder filenames (e.g., `placeholder-01.jpg`)
4. **Copy** to `assets/art/` folder (overwrite existing)
5. **Test locally:** `bundle exec jekyll serve`
6. **Deploy:** `git add . && git commit -m "Add artwork images" && git push`

### Option B: Use Actual Filenames (More Work)

1. **Download images** from Google Drive
2. **Resize/optimize** to 2400px
3. **Keep original filenames** (e.g., `woven-memory-detail-2024.jpg`)
4. **Copy** to `assets/art/`
5. **Update each `_works/*.md` file** to change image path:
   ```yaml
   image: "/assets/art/woven-memory-detail-2024.jpg"
   ```
6. **Test and deploy**

**Recommendation:** Use Option A for speed and simplicity.

## 🛠️ Image Optimization Tools

### macOS

**Preview (Built-in):**
```
1. Open image in Preview
2. Tools > Adjust Size...
3. Set width or height to 2400px
4. Ensure "Scale proportionally" is checked
5. File > Export... > Quality: 85%
```

**ImageOptim (Free):**
```
1. Download from https://imageoptim.com/
2. Drag images onto app
3. Automatically optimizes
```

**Command Line (ImageMagick):**
```bash
brew install imagemagick
cd ~/Downloads/artwork-images

# Resize and optimize all JPGs
for img in *.jpg; do
  magick "$img" -resize 2400x2400\> -quality 82 -strip "../Artists-Portfolio/assets/art/placeholder-${img}"
done
```

### Windows

**IrfanView (Free):**
```
1. Download from https://www.irfanview.com/
2. Open image
3. Image > Resize/Resample
4. Set longest side to 2400
5. Save with quality 85
```

**RIOT (Free):**
```
1. Download from https://riot-optimizer.com/
2. Drag image in
3. Adjust quality slider to 80-85
4. Save
```

### Cross-Platform

**Photoshop:**
```
1. Image > Image Size > 2400px
2. File > Export > Save for Web
3. Quality: 80-85, sRGB
```

**GIMP (Free):**
```
1. Image > Scale Image > 2400px
2. File > Export As > JPG
3. Quality: 82-85
```

**Squoosh (Online):**
```
1. Visit https://squoosh.app/
2. Drag image
3. Resize to 2400px
4. Quality: 80-85
5. Download
```

## 📋 Batch Processing Script

For multiple images at once (macOS/Linux):

```bash
#!/bin/bash
# Save as: optimize-artwork.sh

INPUT_DIR="~/Downloads/artwork-images"
OUTPUT_DIR="./assets/art"
MAX_SIZE=2400
QUALITY=82

mkdir -p "$OUTPUT_DIR"

counter=1
for img in "$INPUT_DIR"/*.{jpg,jpeg,JPG,JPEG} 2>/dev/null; do
  [ -e "$img" ] || continue

  output_name=$(printf "placeholder-%02d.jpg" $counter)

  magick "$img" \
    -resize "${MAX_SIZE}x${MAX_SIZE}>" \
    -quality $QUALITY \
    -strip \
    "$OUTPUT_DIR/$output_name"

  echo "Processed: $output_name"
  ((counter++))
done

echo "Done! Processed $((counter-1)) images."
```

**Usage:**
```bash
chmod +x optimize-artwork.sh
./optimize-artwork.sh
```

## ✅ Verification Checklist

After replacing images:

- [ ] All 12 placeholder files are replaced
- [ ] Each file is under 3 MB
- [ ] Each file is at least 1500px on the long edge
- [ ] Images are JPG format (not PNG or TIFF)
- [ ] Color space is sRGB (not CMYK)
- [ ] Files are named correctly (placeholder-01.jpg through placeholder-12.jpg)
- [ ] Test locally: `bundle exec jekyll serve`
- [ ] Check home page - images load correctly
- [ ] Check works page - thumbnails display
- [ ] Check individual work pages - full images show
- [ ] Lightbox works when clicking images

## 🚨 Common Issues

### Image Too Large (>5 MB)
**Solution:** Reduce quality to 75-80% or resize to 2000px instead of 2400px

### Image Looks Pixelated
**Solution:** Original image is too small. Use highest resolution available from Google Drive.

### Wrong Aspect Ratio
**Solution:** Crop image before resizing to desired aspect ratio (3:4, 4:3, or 1:1)

### Colors Look Dull
**Solution:** Convert color space to sRGB:
```bash
magick input.jpg -colorspace sRGB output.jpg
```

### File Won't Upload to GitHub
**Solution:** GitHub has 100MB file limit. Ensure each image is under 5MB.

## 📦 What to Keep

**Original High-Res Files:**
- Keep originals backed up separately
- Don't delete after optimization
- Store in cloud backup (Google Drive, Dropbox, etc.)

**Optimized Web Files:**
- These go in `assets/art/`
- Commit to Git repository
- Will be deployed to website

## 🎯 Quick Reference

**TL;DR Process:**
1. Download from Google Drive
2. Resize to 2400px (long edge)
3. Export as JPG, quality 80-85%
4. Rename to placeholder-XX.jpg
5. Copy to assets/art/
6. Test: `bundle exec jekyll serve`
7. Deploy: `git add . && git commit && git push`

**Time Estimate:** 30-60 minutes for all 12 images

---

**Need Help?** See README.md Section: "Image Management" or assets/art/README.md
