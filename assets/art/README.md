# Artwork Images

This folder should contain all artwork images referenced in the `_works/` collection.

## Required Files

The following placeholder images are referenced by the demo artworks and need to be replaced with actual artwork images:

```
placeholder-01.jpg  → Woven Memory I
placeholder-02.jpg  → Threaded Landscape
placeholder-03.jpg  → Portrait in Fragments
placeholder-04.jpg  → Untitled Composition No. 7
placeholder-05.jpg  → Material Echo
placeholder-06.jpg  → Woven Memory II
placeholder-07.jpg  → Interlude
placeholder-08.jpg  → Self-Portrait (Abstract)
placeholder-09.jpg  → Grid Study #3
placeholder-10.jpg  → Coastal Impression
placeholder-11.jpg  → Figure Study in Thread
placeholder-12.jpg  → Threshold
```

## Image Specifications

### Full-Size Images
- **Format:** JPG
- **Long edge:** 2400px maximum
- **Quality:** 80-85% (balance between quality and file size)
- **Color space:** sRGB
- **Purpose:** Used on individual work detail pages

### Thumbnails (optional)
If you want faster loading times on the home and works pages, create separate thumbnail versions:
- **Format:** JPG
- **Long edge:** 1200px
- **Quality:** 80%
- **Naming:** Same as full-size (will be used automatically)

## Google Drive Reference

Download the actual artwork images from this Google Drive folder:
https://drive.google.com/drive/folders/1-TQjxr01TvqyQyuRTzqBBskhd_YLN9MV

## How to Replace Placeholders

1. Download images from Google Drive
2. Resize/optimize images using the specifications above
3. Rename to match the placeholder filenames (e.g., `placeholder-01.jpg`)
4. Replace files in this directory
5. Run `bundle exec jekyll serve` to preview
6. Commit and push to deploy

## Image Optimization Tools

- **macOS:** Preview (built-in), ImageOptim (free)
- **Windows:** IrfanView, RIOT
- **Cross-platform:** GIMP, Photoshop
- **Online:** TinyJPG, Squoosh.app
- **Command line:** ImageMagick

### Quick ImageMagick Command
```bash
# Resize and optimize all images in a folder
for img in *.jpg; do
  magick "$img" -resize 2400x2400\> -quality 82 -strip "placeholder-${img}"
done
```

## Notes

- Keep aspect ratios close to 4:3 or 3:4 for best grid display
- Include width/height attributes in YAML front matter for better performance
- All images should have meaningful, descriptive alt text in the YAML front matter
- Original high-resolution files should be backed up separately
