# 🚀 Quick Deployment Guide - Deploy in 5 Minutes!

## Method 1: Deploy via Vercel (Easiest - No Node.js Required)

### Step 1: Push to GitHub

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it: `novazphere-website`
   - Make it **Public** (free Vercel requires public repos)
   - Click "Create repository"

3. **Upload your code to GitHub**:
   
   **Option A: Using GitHub Desktop** (Easiest)
   - Download: https://desktop.github.com/
   - Install and sign in
   - Click "File" → "Add Local Repository"
   - Select this folder: `D:\NovaZphere Solutions\Automation Website`
   - Click "Publish repository"
   - Make it public
   - Click "Publish"

   **Option B: Using Git Command Line** (If you have Git installed)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NovaZphere website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/novazphere-website.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**: https://vercel.com

2. **Sign up/Login**:
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Find your `novazphere-website` repository
   - Click "Import"

4. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete

6. **Get Your URL**:
   - Once deployed, you'll see: `https://novazphere-website.vercel.app`
   - **This is your live website URL!**

### Step 3: Access Your Website

Your website will be live at:
- **Production URL**: `https://novazphere-website-XXXXX.vercel.app`
- Vercel will show you the exact URL after deployment

**That's it! Your website is now live! 🎉**

---

## Method 2: Install Node.js and Deploy Locally

If you prefer to test locally first:

### Step 1: Install Node.js

1. Download Node.js: https://nodejs.org/
2. Install the LTS version (recommended)
3. Restart your computer

### Step 2: Install Dependencies

Open PowerShell in this folder and run:
```bash
npm install
```

### Step 3: Test Locally

```bash
npm run dev
```

Visit: http://localhost:3000

### Step 4: Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

---

## 🌐 How to Browse Your Deployed Website

Once deployed, you'll get a URL like:
- `https://novazphere-website-abc123.vercel.app`

**To access it:**
1. Copy the URL from Vercel dashboard
2. Paste it in any web browser
3. Your website is live!

**Share it with others:**
- Send the URL to anyone
- It works on all devices (phone, tablet, computer)
- No special software needed - just a web browser!

---

## 📝 Custom Domain (Optional)

If you have a custom domain (like novazphere.com):

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

---

## 🔄 Updating Your Website

After making changes:

1. **If using GitHub Desktop:**
   - Make your changes
   - Commit and push to GitHub
   - Vercel automatically redeploys!

2. **If using Git:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
   - Vercel automatically redeploys!

---

## ❓ Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Contact**: info@novazphere.com

---

## ✅ Quick Checklist

- [ ] Create GitHub account
- [ ] Create GitHub repository
- [ ] Upload code to GitHub
- [ ] Sign up for Vercel
- [ ] Import project in Vercel
- [ ] Deploy!
- [ ] Get your live URL
- [ ] Share with the world! 🎉
