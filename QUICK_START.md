# Quick Start Guide

Get the Carmentis Medical Centre website running in 2 minutes.

## 🚀 Start Development Server

```bash
cd /Users/kevinchisango/Documents/carmentis-medical
npm run dev
```

Open browser: **http://localhost:3000**

---

## 📱 View the Website

Visit these pages:

- **Home:** http://localhost:3000
- **Services:** http://localhost:3000/services
- **Doctors:** http://localhost:3000/doctors
- **About:** http://localhost:3000/about
- **Contact:** http://localhost:3000/contact

---

## ✏️ Make Changes

### Update Contact Info

1. Open `components/Footer.tsx`
2. Find phone number/email/address
3. Replace with your info
4. Save file
5. Refresh browser

### Add a Service

1. Open `app/services/page.tsx`
2. Find the `services` array (line 22)
3. Add your service:
```typescript
{
  icon: <Stethoscope size={28} />,
  title: "New Service Name",
  description: "Service description here...",
}
```
4. Save and refresh

### Update Doctor Info

1. Open `app/doctors/page.tsx`
2. Find `doctors` array (line 14)
3. Edit name, role, bio
4. Replace image in `/public`
5. Save and refresh

---

## 🎨 Change Colors

1. Open `app/globals.css`
2. Find color variables (line 6)
3. Change hex values
4. Save and refresh

---

## 🚀 Deploy to Production

### Easiest: Vercel (Free)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Go to vercel.com
# 3. Import your repository
# 4. Deploy (automatic)
```

**Done!** Your site is live.

---

## 📚 Need More Help?

- **Update Content:** Read `CONTENT_GUIDE.md`
- **Deployment:** Read `DEPLOYMENT.md`
- **Full Details:** Read `PROJECT_SUMMARY.md`
- **Testing:** Read `TESTING_CHECKLIST.md`

---

## 🆘 Troubleshooting

**Problem:** Server won't start  
**Solution:** Run `npm install` first

**Problem:** Changes don't show  
**Solution:** Hard refresh browser (Cmd/Ctrl + Shift + R)

**Problem:** Build errors  
**Solution:** Delete `.next` folder, run `npm run build`

---

## ✅ Before Launch Checklist

- [ ] Update phone number
- [ ] Update email address
- [ ] Update address
- [ ] Replace doctor photos
- [ ] Verify opening hours
- [ ] Test WhatsApp button
- [ ] Test on mobile
- [ ] Deploy to Vercel

---

**That's it! You're ready to go! 🎉**

