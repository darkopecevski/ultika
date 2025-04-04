# Ultika Website - Deployment Guide

This guide provides step-by-step instructions for deploying the Ultika website to production.

## Table of Contents

1. [Pre-Deployment Steps](#pre-deployment-steps)
2. [Building the Website](#building-the-website)
3. [Deployment Options](#deployment-options)
   - [Option 1: Netlify](#option-1-netlify)
   - [Option 2: Vercel](#option-2-vercel)
   - [Option 3: Traditional Hosting](#option-3-traditional-hosting)
4. [Post-Deployment Steps](#post-deployment-steps)
5. [Setting Up a Custom Domain](#setting-up-a-custom-domain)
6. [Troubleshooting](#troubleshooting)

## Pre-Deployment Steps

Before deploying the website, ensure you have completed the following steps:

1. **Replace Placeholder Images**: Add real images of your vehicles, services, and partners to the `public/images/` directory, and update the image paths in the component files.

2. **Update Contact Information**: Ensure all contact information (phone numbers, email addresses, physical address) is accurate and up-to-date.

3. **Run Quality Checks**:
   ```bash
   # Verify that the site builds correctly
   npm run build
   
   # Preview the production build locally
   npm run preview
   ```

4. **Check Responsive Design**: Test the website on various device sizes to ensure it displays correctly.

5. **Validate SEO Elements**: Ensure meta titles and descriptions are optimized for all pages.

## Building the Website

To create a production-ready version of the website:

```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build
```

The build output will be in the `dist/` directory, which contains all the static files needed for deployment.

## Deployment Options

### Option 1: Netlify

Netlify offers a simple and efficient way to deploy static websites with continuous deployment.

1. **Create a Netlify Account**: Sign up at [netlify.com](https://www.netlify.com/)

2. **Deploy via Git Repository**:
   - Connect your Git repository to Netlify
   - Set the build command to: `npm run build`
   - Set the publish directory to: `dist`
   - Click "Deploy Site"

3. **Manual Deployment**:
   - Install Netlify CLI: `npm install -g netlify-cli`
   - Run: `netlify deploy --prod`
   - Follow the prompts to select the `dist` folder

### Option 2: Vercel

Vercel is another excellent platform for static site hosting.

1. **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com/)

2. **Deploy via Git Repository**:
   - Import your Git repository to Vercel
   - It should automatically detect Astro and configure the build settings
   - Click "Deploy"

3. **Manual Deployment**:
   - Install Vercel CLI: `npm install -g vercel`
   - Run: `vercel --prod`
   - Follow the prompts

### Option 3: Traditional Hosting

For traditional web hosting:

1. **FTP Upload**:
   - Build the site locally: `npm run build`
   - Upload the contents of the `dist/` directory to your web server using an FTP client

2. **Server Requirements**:
   - Static file hosting capability
   - HTTPS support (recommended)
   - Ability to serve custom 404 pages (optional but recommended)

## Post-Deployment Steps

After deploying the website, complete these important steps:

1. **Test All Links**: Navigate through the entire site to ensure all links work correctly.

2. **Submit Sitemap**: Create and submit a sitemap to search engines (Google Search Console, Bing Webmaster Tools).

3. **Set Up Analytics**: Implement Google Analytics or another analytics platform to track website usage.

4. **Check Page Speed**: Use tools like Google PageSpeed Insights to identify any performance issues.

5. **Browser Testing**: Verify the site works correctly in all major browsers (Chrome, Firefox, Safari, Edge).

## Setting Up a Custom Domain

To use your `ultika.mk` domain:

### On Netlify:

1. Go to Site settings > Domain management > Add custom domain
2. Enter `ultika.mk`
3. Follow the DNS configuration instructions

### On Vercel:

1. Go to Project settings > Domains
2. Add your domain `ultika.mk`
3. Configure DNS settings as instructed

### For Traditional Hosting:

1. In your domain registrar's DNS settings, point the A record to your hosting server's IP address
2. Set up CNAME records for www subdomain if needed

## Troubleshooting

Common deployment issues and solutions:

### 404 Errors on Page Refresh:

- For Netlify: Create a `_redirects` file in the `public/` directory with:
  ```
  /* /index.html 200
  ```

- For Vercel: Create a `vercel.json` file in the project root with:
  ```json
  {
    "routes": [
      { "handle": "filesystem" },
      { "src": "/(.*)", "dest": "/index.html" }
    ]
  }
  ```

### Missing Images or Assets:

- Ensure all asset paths are correct and relative to the root
- Check that all files were properly uploaded to the hosting provider

### Performance Issues:

- Optimize images further using tools like ImageOptim or TinyPNG
- Enable browser caching through your hosting provider

For additional support, refer to the Astro documentation at [astro.build/docs](https://astro.build/docs/) or contact your hosting provider's support team.