# Deployment Guide

This guide focuses on **Netlify** (recommended) but also covers alternative platforms.

---

## Pre-Deployment Checklist

- [ ] All tests pass: `bun run test`
- [ ] No linting errors: `bun run lint`
- [ ] TypeScript compiles: `bun run type-check`
- [ ] Build succeeds: `bun run build`
- [ ] Preview locally: `bun run preview`
- [ ] No console errors/warnings
- [ ] Environment variables configured

---

## 🚀 Netlify (Recommended)

### Quick Deploy (3 minutes)

**Option A: Connect GitHub (Recommended)**

```bash
# 1. Push code to GitHub
git push

# 2. Go to https://app.netlify.com
# 3. Click "Add new site" → "Import an existing project"
# 4. Select GitHub → Select repository
# 5. Configure build settings:
#    - Build command: bun run build
#    - Publish directory: dist
#    - Node version: 18
# 6. Click "Deploy site" → Done! 🎉
```

Your site will auto-deploy on every push to main branch.

**Option B: CLI Deploy**

```bash
# Install Netlify CLI (if not already installed)
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Configuration

Netlify auto-reads [netlify.toml](netlify.toml) which includes:
- ✅ Build command: `bun run build`
- ✅ Publish directory: `dist`
- ✅ Node version: 18
- ✅ SPA routing (all routes → index.html)
- ✅ Cache headers for assets
- ✅ Security headers

### Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add variables:
   ```
   NODE_ENV = production
   VITE_APP_NAME = IS Data Consulting
   VITE_APP_VERSION = 1.0.0
   ```

### Monitoring

- **Netlify Dashboard**: Site overview, deploy history, analytics
- **Netlify Functions**: Logs and monitoring
- **Performance**: Built-in analytics and monitoring

---

## Vercel

If prefer Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Why Netlify over Vercel for this project?**
- ✅ Better SPA routing out-of-box
- ✅ Simpler configuration
- ✅ Lower learning curve
- ✅ Free tier more generous

---

## GitHub Pages

For free hosting on GitHub:

```bash
# 1. Update package.json
npm install --save-dev gh-pages

# 2. Add to package.json:
{
  "homepage": "https://username.github.io/isdataconsulting/",
  "scripts": {
    "predeploy": "bun run build",
    "deploy": "gh-pages -d dist"
  }
}

# 3. Deploy
bun run deploy
```

---

## Traditional Server (Apache/Nginx)

### 1. Build

```bash
bun run build
```

### 2. Upload `dist/` folder to server

### 3. Configure SPA Routing

**Nginx (.conf)**:
```nginx
server {
    listen 80;
    server_name isdataconsulting.com;
    
    root /var/www/dist;
    
    # Gzip compression
    gzip on;
    gzip_types text/html text/css application/javascript;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache (.htaccess in `dist/`)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # SPA routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Security headers
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## Performance & Monitoring

### Bundle Size

Check after build:
```bash
bun run build
# Terminal shows:
# ✓ 42 modules transformed.
# dist/index.html                  0.85 kB
# dist/assets/index-xxx.js       125.42 kB
# dist/assets/index-xxx.css       15.23 kB
```

### Lighthouse Score

Test production with:
```bash
bun run build
bun run preview
# Open http://localhost:4173 in Chrome DevTools
```

### Monitoring (Optional)

- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Vercel/Netlify Analytics**: Built-in

---

## Troubleshooting

### Build fails on Netlify

1. Check build logs in Netlify dashboard
2. Verify environment variables are set
3. Test locally: `bun run build`
4. Check Node version compatibility

### Routes not working

- Verify netlify.toml has SPA redirect
- Check that `dist/index.html` exists
- Clear browser cache

### Assets not loading

- Check cache headers in netlify.toml
- Verify asset paths in build output
- Check security headers aren't blocking

### Slow performance

- Optimize images
- Enable gzip compression
- Check bundle size: `bun run build`
- Use lazy loading for components

---

## Rollback/Downgrade

**Netlify**: Dashboard → Deploys → Select version → "Publish deploy"

**GitHub Actions**: Revert commit, push again

---

## Support & Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Documentation](https://react.dev)
- [Troubleshooting Guide](PRODUCTION_CHECKLIST.md)
