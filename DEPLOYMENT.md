# Deployment Guide for NovaZphere Solutions Website

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/yourusername/novazphere-website.git
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Redeploy if needed

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Pre-Deployment Checklist

- [ ] Logo files are in `/public` directory
- [ ] All environment variables are set
- [ ] Contact form endpoint is configured (if using external service)
- [ ] Analytics tracking code is added (Google Analytics, etc.)
- [ ] Domain is configured in Vercel (if using custom domain)
- [ ] SSL certificate is active (automatic with Vercel)

## Post-Deployment Steps

1. **Verify Site is Live**
   - Visit your Vercel deployment URL
   - Test all pages and navigation
   - Check mobile responsiveness

2. **Submit Sitemap to Google**
   - Go to Google Search Console
   - Add your property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

3. **Set Up Analytics**
   - Add Google Analytics tracking code
   - Configure conversion goals
   - Set up event tracking

4. **Test Contact Forms**
   - Submit test form submissions
   - Verify email notifications work
   - Check form validation

5. **Performance Check**
   - Run PageSpeed Insights
   - Check Core Web Vitals
   - Optimize any issues found

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration:**
   - Add CNAME record pointing to Vercel
   - Or add A records as instructed
   - Wait for DNS propagation (up to 48 hours)

## Environment Variables

If you need environment variables, add them in Vercel:

1. Go to Project Settings → Environment Variables
2. Add variables for:
   - Contact form API endpoint
   - Analytics IDs
   - API keys (if needed)

## Monitoring & Maintenance

- **Uptime Monitoring**: Set up monitoring (UptimeRobot, Pingdom)
- **Error Tracking**: Configure error tracking (Sentry)
- **Performance Monitoring**: Use Vercel Analytics or Google Analytics
- **Regular Updates**: Keep dependencies updated

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure Node.js version is compatible

### Images Not Loading
- Verify images are in `/public` directory
- Check image paths in components
- Ensure proper Next.js Image component usage

### 404 Errors
- Verify all routes exist in `/app` directory
- Check sitemap includes all pages
- Review Next.js routing structure

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Contact: info@novazphere.com
