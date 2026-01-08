# Content Update Guide

This guide helps non-technical users update content on the Carmentis Medical Centre website.

## 📱 Updating Contact Information

### Phone Number & WhatsApp

Search and replace `+263 77 285 9799` or `263772859799` across these files:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`
- `app/page.tsx`
- `app/contact/page.tsx`
- All service pages

### Email Address

Search and replace `info@carmentismedical.co.zw` in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (metadata)

### Physical Address

Update "Corner Borrowdale Road & Lark Rise Road, Borrowdale, Harare" in:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/page.tsx`

## 🕐 Updating Opening Hours

Edit the opening hours in:
- `components/Footer.tsx` (appears on every page)
- `app/contact/page.tsx` (detailed hours)
- `app/page.tsx` (home page display)

Current format:
```
Mon–Fri: 07:00 – 20:00
Sat: 08:00 – 16:00
Sun & Holidays: 08:00 – 13:00
```

## 🏥 Updating Services

### Adding a New Service

In `app/services/page.tsx`, find the `services` array and add:

```typescript
{
  icon: <Stethoscope size={28} />,
  title: "Your Service Name",
  description: "Detailed description of the service...",
}
```

Available icons from lucide-react:
- `Stethoscope` - General medical
- `Heart` - Cardiology, women's health
- `Baby` - Pediatrics
- `Activity` - Diagnostics, health monitoring
- `Shield` - Preventative care
- `Users` - Family services
- `Microscope` - Laboratory services
- `Syringe` - Vaccinations, injections

### Editing Existing Services

Find the service in the `services` array and modify the `title` or `description` fields.

## 👨‍⚕️ Updating Doctor Information

### Editing Doctor Profiles

In `app/doctors/page.tsx`, find the `doctors` array:

```typescript
{
  name: "Dr. Name Here",
  role: "Specialty/Role",
  bio: "Professional biography...",
  imageUrl: "/doctor1.svg",
}
```

### Adding a New Doctor

1. Add doctor image to `/public` directory (e.g., `doctor3.jpg` or `doctor3.svg`)
2. Add new entry to doctors array
3. Update the grid layout if needed (currently 2 columns)

### Replacing Doctor Images

1. Add new image to `/public` directory
2. Update `imageUrl` field to match filename
3. Recommended size: 400x400px (square)
4. Supported formats: JPG, PNG, SVG

## 📄 Updating Page Content

### Home Page (`app/page.tsx`)

**Hero Section:**
- Line 19-24: Main headline and subheading
- Line 26-46: CTA buttons

**Trust Indicators:**
- Lines 60-94: Three feature cards

**Services Preview:**
- Lines 103-164: Service cards shown on home

**Doctors Preview:**
- Lines 178-195: Doctor cards on home

**Final CTA:**
- Lines 238-266: Bottom call-to-action section

### About Page (`app/about/page.tsx`)

**Mission Statement:**
- Lines 26-42: Main introduction text

**Values:**
- Lines 49-106: Four value cards (edit icons, titles, descriptions)

**Philosophy:**
- Lines 111-135: Patient-first philosophy text

### Services Page (`app/services/page.tsx`)

**Service List:**
- Lines 22-67: Array of all services

**Additional Content:**
- Lines 82-104: Personalized care section

### Contact Page (`app/contact/page.tsx`)

All contact information is here - update as needed.

## 🎨 Updating Colors & Branding

### Logo

Current logo is a simple "C" in a colored box. To replace:

1. Create your logo image (PNG or SVG)
2. Add to `/public` directory
3. Update `components/Header.tsx` lines 26-39
4. Update `components/Footer.tsx` lines 11-24

### Colors

Edit `app/globals.css` starting at line 6.

Current theme:
- Primary: Medical blue (#0ea5e9)
- Teal: Accents (#14b8a6)
- Green: WhatsApp/wellness (#22c55e)
- Neutral: Backgrounds and text

To change colors, update the hex values in the CSS variables.

### Fonts

Current fonts: Poppins (headings) + Inter (body)

To change fonts:
1. Update Google Fonts import in `app/globals.css` line 2
2. Update font families in lines 58-66

## 📝 SEO & Metadata

### Page Titles & Descriptions

Each page has metadata at the top:

```typescript
export const metadata = {
  title: "Page Title | Carmentis Medical Centre",
  description: "Page description for search engines...",
};
```

Update these for better SEO.

### Site-Wide Metadata

Edit `app/layout.tsx` lines 7-10 for default metadata.

## 🔧 Common Tasks

### Changing WhatsApp Message

In `components/WhatsAppButton.tsx`, line 7:
```typescript
const message = encodeURIComponent("Your custom message here");
```

### Adding Navigation Link

1. Edit `components/Header.tsx` lines 9-15
2. Add your new page to the navigation array

### Updating Footer Links

Edit `components/Footer.tsx` lines 29-54

## ⚠️ Important Notes

1. **Always test locally** before deploying changes
2. **Keep backups** of files before major edits
3. **Maintain consistent tone** - warm, professional, family-friendly
4. **Check mobile view** after changes
5. **Run `npm run dev`** to preview changes

## 🆘 Getting Help

If you encounter issues:
1. Check the main `README.md` for setup instructions
2. Review `PROJECT_SUMMARY.md` for architecture overview
3. Ensure Node.js and npm are installed
4. Run `npm install` if dependencies are missing

---

**Remember:** Content should always be warm, professional, and family-oriented!

