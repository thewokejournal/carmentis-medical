# Deployment Guide

This guide covers deploying the Carmentis Medical Centre website to production.

## 📋 Pre-Deployment Checklist

- [ ] All content reviewed and approved
- [ ] Contact information verified (phone, email, address)
- [ ] Doctor images updated with actual photos
- [ ] Opening hours confirmed
- [ ] Services list finalized
- [ ] WhatsApp number tested
- [ ] All pages tested on mobile and desktop
- [ ] No console errors
- [ ] SEO metadata complete

## 🚀 Recommended Hosting: Vercel (Easiest)

Vercel is the easiest way to deploy Next.js applications and offers a generous free tier.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "Add New Project" in Vercel dashboard
   - Select your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Configure Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., carmentismedical.co.zw)
   - Update DNS records as instructed

### Vercel Advantages:
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Excellent Next.js optimization
- ✅ Zero configuration needed

## 🌐 Alternative: Netlify

Similar to Vercel, great for static sites.

### Steps:

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with Git provider

2. **Deploy from Git**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Configure Domain**
   - Settings → Domain Management
   - Add custom domain

## 🐳 Alternative: Docker Deployment

For self-hosted or cloud providers (AWS, DigitalOcean, etc.)

### Create Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run:

```bash
docker build -t carmentis-medical .
docker run -p 3000:3000 carmentis-medical
```

## ☁️ Alternative: Traditional VPS (DigitalOcean, Linode, etc.)

### Steps:

1. **Set up VPS**
   - Ubuntu 22.04 LTS recommended
   - At least 1GB RAM

2. **Install Dependencies**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2 (process manager)
   sudo npm install -g pm2
   ```

3. **Clone and Build**
   ```bash
   git clone your-repo-url
   cd carmentis-medical
   npm install
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "carmentis-medical" -- start
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx (Reverse Proxy)**
   ```bash
   sudo apt install nginx
   ```

   Create `/etc/nginx/sites-available/carmentis`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/carmentis /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Add SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use platform environment variable settings
   - Rotate sensitive keys regularly

2. **HTTPS**
   - Always use SSL/TLS
   - Redirect HTTP to HTTPS
   - Free certificates from Let's Encrypt

3. **Regular Updates**
   ```bash
   npm audit
   npm update
   ```

4. **Firewall**
   ```bash
   sudo ufw allow 80
   sudo ufw allow 443
   sudo ufw enable
   ```

## 📊 Post-Deployment

### 1. Set Up Analytics

Add Google Analytics or similar:
```typescript
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### 2. Monitor Performance

Use tools like:
- Google PageSpeed Insights
- Lighthouse (built into Chrome DevTools)
- GTmetrix
- WebPageTest

### 3. Set Up Monitoring

Consider:
- Vercel Analytics (built-in with Vercel)
- Google Search Console
- Uptime monitoring (UptimeRobot, Pingdom)

### 4. Backup Strategy

- Regular database backups (if Phase 2 adds booking system)
- Git repository backups
- Automated backup schedule

## 🔄 Continuous Deployment

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test # if you add tests
```

## 📱 Testing After Deployment

- [ ] Visit all pages
- [ ] Test on mobile devices
- [ ] Click all WhatsApp buttons
- [ ] Test phone number links
- [ ] Check email links
- [ ] Verify navigation works
- [ ] Test form submissions (Phase 2)
- [ ] Check page load speed
- [ ] Verify SSL certificate
- [ ] Test on different browsers

## 🌍 Domain Configuration

### Registering Domain

1. **Choose registrar**: Namecheap, GoDaddy, Google Domains
2. **Search**: carmentismedical.co.zw
3. **Purchase** domain

### DNS Configuration

Point your domain to hosting:

**For Vercel:**
- A record: 76.76.21.21
- CNAME www: cname.vercel-dns.com

**For Custom Server:**
- A record: Your-Server-IP
- CNAME www: yourdomain.com

## 💰 Estimated Costs

### Free Tier (Recommended for Launch)
- **Vercel Free**: $0/month
  - Perfect for small to medium sites
  - 100GB bandwidth
  - Unlimited websites

### Paid Options
- **Vercel Pro**: $20/month (if you need more resources)
- **VPS (DigitalOcean)**: $6-12/month
- **Domain**: $10-15/year

### Recommended Start:
Use Vercel Free + custom domain = ~$10-15/year

## 📞 Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

---

**Recommendation:** Start with Vercel for easiest deployment and scaling

