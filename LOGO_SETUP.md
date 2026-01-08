# Logo & Favicon Setup Guide

## 📋 Quick Setup

I've updated the website to use your beautiful medical logo! Here's how to add it:

### Step 1: Save the Logo

Save your logo image to the public directory:

**File:** `/Users/kevinchisango/Documents/carmentis-medical/public/logo.png`

**Requirements:**
- **Format:** PNG (with transparent background recommended)
- **Size:** 512x512px or larger (square)
- **Quality:** High resolution for crisp display

### Step 2: Create Favicons (Recommended)

For best results across all devices, create multiple sizes:

#### Required Favicon Sizes:

1. **favicon-16x16.png** - 16x16px (browser tabs)
2. **favicon-32x32.png** - 32x32px (browser tabs)
3. **apple-touch-icon.png** - 180x180px (iOS home screen)

#### Easy Way: Use a Favicon Generator

**Recommended Tool:** [RealFaviconGenerator](https://realfavicongenerator.net/)

1. Upload your logo.png
2. Download the generated favicon package
3. Copy these files to `/public/`:
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png

#### Manual Way: Resize with Preview (Mac)

1. Open logo.png in Preview
2. Tools → Adjust Size
3. Create each size:
   - 16x16px → Save as `favicon-16x16.png`
   - 32x32px → Save as `favicon-32x32.png`
   - 180x180px → Save as `apple-touch-icon.png`
4. Save all to `/public/` directory

## ✅ What's Already Done

I've updated:
- ✅ **Header.tsx** - Logo displays in navigation
- ✅ **Footer.tsx** - Logo displays in footer
- ✅ **layout.tsx** - Favicon metadata configured
- ✅ **Image optimization** - Using Next.js Image component

## 🎨 Logo Display Specifications

**Header:**
- Size: 48x48px
- Position: Top left
- Shows on all pages
- Responsive on mobile

**Footer:**
- Size: 48x48px
- Position: Footer left
- Shows on all pages

**Favicon:**
- Browser tabs (16x16, 32x32)
- iOS home screen (180x180)
- Android home screen (uses logo.png)

## 📁 Final File Structure

After adding all images:

```
public/
├── logo.png              # Main logo (512x512 or larger)
├── favicon-16x16.png     # Small favicon
├── favicon-32x32.png     # Medium favicon
├── apple-touch-icon.png  # iOS icon
├── doctor1.svg           # (existing)
└── doctor2.svg           # (existing)
```

## 🚀 Testing

After adding the logo:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check logo displays:**
   - Visit http://localhost:3000
   - Logo should appear in header (top left)
   - Scroll to footer - logo should appear there too
   - Check on mobile view

3. **Check favicon:**
   - Look at browser tab
   - Should see your logo icon
   - May need to hard refresh (Cmd/Ctrl + Shift + R)

## 🎨 Logo Colors

Your logo uses:
- **Blue cross:** Medical theme
- **Green figure:** Wellness & growth
- **Perfect for:** Medical clinic branding

These colors match the website's color scheme!

## 💡 Tips

### Logo Not Showing?
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Restart dev server
- Check file is named exactly `logo.png`
- Check file is in `/public/` directory

### Logo Quality Issues?
- Use higher resolution source (1024x1024 recommended)
- Ensure PNG format with transparency
- Check image isn't corrupted

### Want Different Logo for Dark Mode?
Edit Header.tsx and Footer.tsx to add:
```typescript
<Image
  src="/logo.png"
  alt="Carmentis Medical Centre"
  className="dark:hidden"
/>
<Image
  src="/logo-dark.png"
  alt="Carmentis Medical Centre"
  className="hidden dark:block"
/>
```

## 🔄 Update Logo Later

To change the logo:
1. Replace `/public/logo.png` with new image
2. Replace favicon files if needed
3. Refresh browser
4. Done!

## 📱 Mobile Considerations

The logo is responsive:
- **Desktop:** 48x48px
- **Mobile:** 48x48px (maintains size for visibility)
- **Retina displays:** Automatically optimized by Next.js

## ✨ What Makes This Logo Great

Your logo is perfect because:
- ✅ Medical cross = clear healthcare identity
- ✅ Wellness figure = patient-centered care
- ✅ Blue + green = trust + growth
- ✅ Clean design = professional
- ✅ Works at any size = versatile

## 🆘 Need Help?

**Logo won't display?**
1. Check filename is exactly `logo.png` (lowercase)
2. Check file is in `/public/` folder
3. Restart dev server
4. Hard refresh browser

**Favicon not updating?**
- Favicons are cached heavily
- Try different browser
- Clear all browser cache
- Wait a few minutes

---

**Your logo is integrated and ready to go!** 🎉

Just add the logo.png file and optionally the favicon sizes.

