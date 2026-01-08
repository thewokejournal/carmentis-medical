# Testing Checklist

Use this checklist to verify the website is working correctly before and after deployment.

## 🏠 Home Page Testing

- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Headline and subheading are readable
- [ ] WhatsApp CTA button works
- [ ] Phone CTA button works (opens phone app on mobile)
- [ ] Trust indicators section displays (3 cards)
- [ ] All service cards visible (8 cards)
- [ ] "View All Services" button links to /services
- [ ] Doctor preview cards show correctly (2 doctors)
- [ ] "Meet Our Team" button links to /doctors
- [ ] Location section displays
- [ ] Opening hours are correct
- [ ] Contact information is accurate
- [ ] Final CTA section shows
- [ ] All CTAs link correctly

## 🏥 Services Page Testing

- [ ] Page loads correctly
- [ ] Hero section displays
- [ ] All 8 service cards render
- [ ] Service descriptions are complete
- [ ] Icons display correctly
- [ ] "Personalized Care" section shows
- [ ] Bottom CTA section works
- [ ] WhatsApp link functions
- [ ] Phone link functions

## 👨‍⚕️ Doctors Page Testing

- [ ] Page loads successfully
- [ ] Hero section displays
- [ ] Both doctor cards show
- [ ] Doctor images load
- [ ] Names and roles display
- [ ] Biographies are readable
- [ ] "Our Commitment" section shows
- [ ] CTA buttons work
- [ ] Links are functional

## ℹ️ About Page Testing

- [ ] Page loads correctly
- [ ] Hero section displays
- [ ] Introduction text shows
- [ ] All 4 value cards display
- [ ] Icons in value cards show
- [ ] Philosophy section is readable
- [ ] Background gradients look good
- [ ] CTA section works
- [ ] Links function properly

## 📞 Contact Page Testing

- [ ] Page loads successfully
- [ ] Hero section displays
- [ ] All 4 contact cards show (Phone, WhatsApp, Email, Address)
- [ ] Phone number is clickable
- [ ] WhatsApp link opens correctly
- [ ] Email link opens mail client
- [ ] Address is displayed correctly
- [ ] Map placeholder shows
- [ ] "Open in Google Maps" link works
- [ ] Opening hours table displays
- [ ] Hours are formatted correctly
- [ ] Quick action buttons work

## 🧭 Navigation Testing

### Desktop Navigation
- [ ] Header is visible
- [ ] Logo displays correctly
- [ ] All menu items show (Home, Services, Doctors, About, Contact)
- [ ] Menu items are clickable
- [ ] Active page indicator works (if implemented)
- [ ] "Call Us" button in header works
- [ ] Header sticks to top on scroll

### Mobile Navigation
- [ ] Hamburger menu icon shows
- [ ] Menu opens when clicked
- [ ] All navigation items visible
- [ ] Items are tappable
- [ ] Menu closes when item clicked
- [ ] Menu closes when X clicked
- [ ] "Call Us" button shows in mobile menu

## 🦶 Footer Testing

- [ ] Footer displays on all pages
- [ ] Logo shows correctly
- [ ] About text is readable
- [ ] Quick Links section shows all pages
- [ ] All links work
- [ ] Contact info section displays
- [ ] Address, phone, email are correct
- [ ] Icons show correctly
- [ ] Opening hours display
- [ ] Hours are formatted properly
- [ ] Copyright year is current
- [ ] Background color is correct

## 💬 WhatsApp Button Testing

- [ ] Button visible on all pages
- [ ] Button stays in bottom-right corner
- [ ] Button floats above content
- [ ] Pulse animation works
- [ ] Clicking opens WhatsApp
- [ ] Pre-filled message is correct
- [ ] Opens in new tab
- [ ] Works on mobile devices
- [ ] Works on desktop (WhatsApp Web)

## 📱 Mobile Responsiveness

### Small Phones (320px - 375px)
- [ ] All text is readable
- [ ] No horizontal scroll
- [ ] Buttons are tappable
- [ ] Images scale correctly
- [ ] Cards stack vertically
- [ ] Navigation works
- [ ] Footer looks good

### Large Phones (375px - 640px)
- [ ] Layout looks balanced
- [ ] Images are proportional
- [ ] Text hierarchy is clear
- [ ] CTAs are prominent
- [ ] Spacing is adequate

### Tablets (640px - 1024px)
- [ ] 2-column grids show
- [ ] Navigation expands
- [ ] Images scale well
- [ ] Text is comfortable to read
- [ ] Cards use available space

### Desktop (1024px+)
- [ ] Multi-column layouts work
- [ ] Max-width containers center content
- [ ] Images are high quality
- [ ] Text doesn't stretch too wide
- [ ] Navigation is fully expanded

## ♿ Accessibility Testing

- [ ] All images have alt text
- [ ] Headings follow hierarchy (h1 → h2 → h3)
- [ ] Color contrast is sufficient
- [ ] Links have descriptive text
- [ ] Buttons are labeled correctly
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus states are visible
- [ ] Screen reader friendly

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicator is visible
- [ ] Enter key activates buttons/links
- [ ] Escape key closes mobile menu
- [ ] No keyboard traps

## 🎨 Visual Testing

- [ ] Colors match brand guidelines
- [ ] Fonts load correctly (Poppins & Inter)
- [ ] Icons display properly
- [ ] Images load without errors
- [ ] Rounded corners on cards
- [ ] Shadows look good
- [ ] Gradients render smoothly
- [ ] No layout shifts on load
- [ ] Animations are smooth
- [ ] No visual glitches

## ⚡ Performance Testing

- [ ] Pages load quickly (< 3 seconds)
- [ ] No console errors
- [ ] No console warnings
- [ ] Images are optimized
- [ ] Fonts load efficiently
- [ ] No unnecessary re-renders
- [ ] Smooth scrolling
- [ ] Transitions are fluid

### Lighthouse Scores (Target: 90+)
- [ ] Performance: ___/100
- [ ] Accessibility: ___/100
- [ ] Best Practices: ___/100
- [ ] SEO: ___/100

## 🔍 SEO Testing

- [ ] Page titles are unique
- [ ] Meta descriptions are present
- [ ] Title includes "Carmentis Medical Centre"
- [ ] URLs are clean
- [ ] Headings are structured
- [ ] Images have alt text
- [ ] Internal links work
- [ ] Mobile-friendly (Google test)

## 🌐 Browser Testing

### Chrome
- [ ] Desktop version works
- [ ] Mobile version works
- [ ] No console errors

### Firefox
- [ ] Desktop version works
- [ ] Mobile version works
- [ ] No console errors

### Safari
- [ ] Desktop version works (Mac)
- [ ] iOS version works
- [ ] No console errors

### Edge
- [ ] Desktop version works
- [ ] No console errors

## 🔗 Link Testing

- [ ] All internal links work
- [ ] All external links work
- [ ] External links open in new tab
- [ ] No broken links (404 errors)
- [ ] Phone links work (tel:)
- [ ] Email links work (mailto:)
- [ ] WhatsApp links work (wa.me)
- [ ] Social links work (if added)

## 📊 Content Testing

- [ ] No typos or grammar errors
- [ ] Contact information is accurate
- [ ] Phone number is correct
- [ ] Email address is correct
- [ ] Address is correct
- [ ] Opening hours are current
- [ ] Services list is complete
- [ ] Doctor information is accurate
- [ ] Professional tone maintained
- [ ] Warm, family-friendly language

## 🔒 Security Testing

- [ ] HTTPS enabled (after deployment)
- [ ] SSL certificate valid
- [ ] No mixed content warnings
- [ ] No exposed sensitive data
- [ ] Forms use proper validation (Phase 2)
- [ ] No XSS vulnerabilities
- [ ] Dependencies are up to date

## 🚀 Deployment Testing

- [ ] Build completes successfully
- [ ] No build errors
- [ ] No build warnings
- [ ] Production bundle size is reasonable
- [ ] All assets load on production
- [ ] Environment variables set correctly
- [ ] Domain points to site
- [ ] www redirect works
- [ ] 404 page works

## 📈 Analytics Testing (if implemented)

- [ ] Tracking code installed
- [ ] Page views recorded
- [ ] Events tracked correctly
- [ ] No PII collected
- [ ] GDPR compliant

## ✅ Final Checks

- [ ] All pages tested
- [ ] All devices tested
- [ ] All browsers tested
- [ ] No critical issues
- [ ] Performance is acceptable
- [ ] Accessibility standards met
- [ ] Content is accurate
- [ ] CTAs work correctly
- [ ] Contact info verified
- [ ] Client approval received

---

## 🐛 Bug Reporting Template

If you find issues, document them:

**Issue:**
Describe the problem

**Location:**
Which page/section?

**Steps to Reproduce:**
1. Go to...
2. Click on...
3. See error

**Expected:**
What should happen

**Actual:**
What actually happens

**Device/Browser:**
e.g., iPhone 13, Safari

**Screenshot:**
Attach if possible

---

**Testing Complete!** 🎉

Date: ___________
Tester: ___________
Result: PASS / FAIL
Notes: ___________

