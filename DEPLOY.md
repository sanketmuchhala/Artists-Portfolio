# Deployment Guide - GitHub Pages

This guide walks you through deploying your Briannon Sullivan portfolio to GitHub Pages, step by step.

## 📋 Prerequisites

Before deploying, make sure you have:

- [ ] A GitHub account
- [ ] Git installed on your computer
- [ ] All placeholder images replaced (or at least aware they're placeholders)
- [ ] Content reviewed and ready
- [ ] Site tested locally (`bundle exec jekyll serve`)

## 🚀 Deployment Steps

### Step 1: Create a GitHub Repository

1. **Go to GitHub** and sign in: https://github.com

2. **Click the "+" icon** in the top-right corner and select "New repository"

3. **Configure the repository**:
   - **Repository name:** `briannon-sullivan-portfolio` (or any name you prefer)
   - **Description:** "Minimalist artist portfolio for Briannon Sullivan"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

4. **Click "Create repository"**

### Step 2: Connect Your Local Project to GitHub

Open Terminal and navigate to your project directory:

```bash
cd /Users/sanketmuchhala/Documents/GitHub/Artists-Portfolio
```

Initialize Git (if not already initialized):

```bash
git init
```

Add all files to Git:

```bash
git add .
```

Create your first commit:

```bash
git commit -m "Initial commit - Briannon Sullivan Portfolio"
```

**Important:** Replace `YOUR-USERNAME` with your actual GitHub username in the next command:

```bash
git remote add origin https://github.com/YOUR-USERNAME/briannon-sullivan-portfolio.git
```

Set the default branch to `main`:

```bash
git branch -M main
```

Push to GitHub:

```bash
git push -u origin main
```

You may be prompted to log in to GitHub. Follow the authentication steps.

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub:
   `https://github.com/YOUR-USERNAME/briannon-sullivan-portfolio`

2. **Click "Settings"** (top navigation)

3. **Click "Pages"** (left sidebar under "Code and automation")

4. **Under "Build and deployment":**
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main` and `/ (root)`
   - **Click "Save"**

5. **Wait 2-5 minutes** for the initial build and deployment

6. **Refresh the page** - you should see a success message:
   ```
   Your site is live at https://YOUR-USERNAME.github.io/briannon-sullivan-portfolio/
   ```

7. **Visit your live site!** Click the "Visit site" button or copy the URL

### Step 4: Update Configuration for GitHub Pages

If your repository name is **not** at the root of your GitHub Pages domain, update `_config.yml`:

**Example:** If your URL is `https://yourusername.github.io/briannon-sullivan-portfolio/`

```yaml
# _config.yml
baseurl: "/briannon-sullivan-portfolio"  # Add this if your repo has a name
url: "https://yourusername.github.io"
```

**If your URL is** `https://yourusername.github.io` (repo named `yourusername.github.io`):

```yaml
# _config.yml
baseurl: ""  # Leave empty
url: "https://yourusername.github.io"
```

After updating `_config.yml`, commit and push:

```bash
git add _config.yml
git commit -m "Update baseurl for GitHub Pages"
git push
```

Wait 2-5 minutes for redeployment.

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `briannonsullivan.com`):

### Step 1: Configure DNS

Go to your domain registrar (Namecheap, GoDaddy, etc.) and add these DNS records:

**Option A: Use A Records (Apex domain)**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Option B: Use CNAME (Subdomain)**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR-USERNAME.github.io |

### Step 2: Add CNAME File

1. **Edit the `CNAME` file** in your project root:

```
briannonsullivan.com
```

Or for subdomain:

```
www.briannonsullivan.com
```

2. **Commit and push**:

```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### Step 3: Configure GitHub Pages

1. Go to **Settings > Pages** in your GitHub repository
2. Under "Custom domain", enter your domain: `briannonsullivan.com`
3. Click "Save"
4. Wait for DNS check (can take 24-48 hours)
5. **Check "Enforce HTTPS"** once DNS is verified

### Step 4: Update _config.yml

```yaml
# _config.yml
baseurl: ""  # Remove baseurl when using custom domain
url: "https://briannonsullivan.com"
```

Commit and push:

```bash
git add _config.yml
git commit -m "Update URL for custom domain"
git push
```

## 🔄 Making Updates

After initial deployment, any changes you make can be deployed with:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy your site within 2-5 minutes.

### Quick Update Workflow

```bash
# 1. Make changes to files
# 2. Test locally
bundle exec jekyll serve

# 3. Commit and push
git add .
git commit -m "Update artwork images"
git push

# 4. Wait 2-5 minutes, then check your live site
```

## ✅ Post-Deployment Checklist

After your site is live, verify:

### Functionality
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Individual artwork pages display properly
- [ ] Image lightbox works on artwork detail pages
- [ ] Filters work on Works page
- [ ] Mobile view is responsive
- [ ] No broken images or 404 errors

### SEO & Metadata
- [ ] Page titles are correct
- [ ] Meta descriptions are present
- [ ] Open Graph images load when sharing on social media
- [ ] Sitemap is accessible: `your-site.com/sitemap.xml`
- [ ] RSS feed works: `your-site.com/feed.xml`
- [ ] robots.txt is accessible: `your-site.com/robots.txt`

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools)
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Test on mobile device
- [ ] Check page load times

### Content
- [ ] All artwork images display correctly
- [ ] Artist portrait shows on About page
- [ ] CV download link works (if added)
- [ ] Exhibition dates are correct
- [ ] Press links work
- [ ] Contact email is correct
- [ ] Social media links work

## 📊 Submit to Google Search Console

1. **Go to** https://search.google.com/search-console

2. **Add your site** using the URL prefix method:
   ```
   https://yourusername.github.io/briannon-sullivan-portfolio/
   ```

3. **Verify ownership** via HTML tag or DNS (follow Google's instructions)

4. **Submit your sitemap**:
   ```
   https://yourusername.github.io/briannon-sullivan-portfolio/sitemap.xml
   ```

5. **Wait 1-2 weeks** for Google to index your site

## 🐛 Troubleshooting

### Site not building

**Check the Actions tab** in your GitHub repo:
- Go to repository > Actions tab
- Look for failed builds (red X icon)
- Click to see error details

**Common issues:**
- Syntax errors in YAML front matter
- Missing files referenced in `_config.yml`
- Incompatible plugins (must be GitHub Pages compatible)

### 404 errors on pages

**If using a project subdirectory** (e.g., `/briannon-sullivan-portfolio/`):
- Make sure `baseurl` is set in `_config.yml`
- Use `{{ site.baseurl }}` or `relative_url` filter in links

**Check file paths:**
```liquid
<!-- Correct: -->
{{ '/assets/images/logo.png' | relative_url }}
{{ site.baseurl }}/assets/images/logo.png

<!-- Incorrect: -->
/assets/images/logo.png
```

### Images not loading

1. **Check file paths** in YAML front matter:
   ```yaml
   image: "/assets/art/placeholder-01.jpg"  # Correct
   # NOT: "assets/art/placeholder-01.jpg"
   ```

2. **Verify files exist** in the correct directory

3. **Check case sensitivity** - GitHub is case-sensitive:
   - `Image.jpg` ≠ `image.jpg`

4. **Check file size** - very large images (>10MB) may timeout
   - Optimize images to 2-3MB or less

### CSS/JavaScript not loading

1. **Check paths** use `relative_url` filter:
   ```liquid
   <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
   ```

2. **Clear browser cache**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

3. **Check for syntax errors** in CSS/JS files

### Changes not appearing

1. **Wait 2-5 minutes** after pushing - GitHub Pages takes time to rebuild

2. **Check Actions tab** to ensure build succeeded

3. **Hard refresh** your browser: Cmd+Shift+R or Ctrl+Shift+R

4. **Clear Jekyll cache** locally and rebuild:
   ```bash
   bundle exec jekyll clean
   bundle exec jekyll build
   ```

### Custom domain not working

1. **Wait 24-48 hours** for DNS propagation

2. **Verify DNS records**:
   ```bash
   dig yourdomain.com
   ```

3. **Check CNAME file** is in repository root with correct domain

4. **Ensure "Enforce HTTPS"** is checked in GitHub Pages settings (after DNS verifies)

## 📱 Social Media Preview

Test how your site looks when shared:

- **Twitter:** https://cards-dev.twitter.com/validator
- **Facebook:** https://developers.facebook.com/tools/debug/
- **LinkedIn:** https://www.linkedin.com/post-inspector/

Make sure Open Graph images are 1200x630px and under 1MB.

## 🔒 HTTPS / SSL

GitHub Pages automatically provides HTTPS for:
- *.github.io domains (immediate)
- Custom domains (after DNS verification)

Always use HTTPS URLs in `_config.yml`:
```yaml
url: "https://briannonsullivan.com"  # Not http://
```

## 📞 Support Resources

- **Jekyll Docs:** https://jekyllrb.com/docs/
- **GitHub Pages Docs:** https://docs.github.com/pages
- **GitHub Pages Status:** https://www.githubstatus.com/
- **Jekyll Talk Forum:** https://talk.jekyllrb.com/

## 🎉 Success!

Your portfolio is now live! Share your URL:

```
https://yourusername.github.io/briannon-sullivan-portfolio/
```

Or with custom domain:

```
https://briannonsullivan.com
```

---

**Next Steps:**
1. Share with friends and colleagues for feedback
2. Add to business cards and artist CV
3. Link from social media profiles
4. Submit to artist directories and portfolios
5. Keep content updated with new work!

Happy exhibiting! 🎨
