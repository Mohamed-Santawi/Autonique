# Autonique Website - GoDaddy Deployment Guide

## 🚀 Deployment Instructions

### 1. Upload Files to GoDaddy

1. Log in to your GoDaddy hosting control panel
2. Navigate to File Manager or use FTP
3. Upload all files from this folder to your domain's root directory (usually `public_html`)

### 2. Required Files Structure

```
public_html/
├── index.html
├── assets/
│   ├── index-DI6zEARI.css
│   ├── index-BakocyLe.js
│   └── logoNew-8GSe2MZx.png
└── .htaccess (if using Apache)
```

### 3. Server Configuration

#### For Apache (.htaccess)

Create a `.htaccess` file in your root directory with:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

#### For Nginx

Add to your nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Enable gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### 4. Environment Variables

Make sure your Firebase configuration is properly set up in the production environment.

### 5. Testing

After deployment:

1. Visit your domain
2. Test all main features:
   - Navigation
   - Contact form
   - Admin login (if applicable)
   - Responsive design

### 6. Performance Optimization

- Enable GZIP compression
- Set up browser caching
- Optimize images if needed
- Consider using a CDN for static assets

## 🔧 Troubleshooting

### Common Issues:

1. **404 errors on refresh**: Ensure proper .htaccess or nginx configuration
2. **Assets not loading**: Check file paths and permissions
3. **Firebase errors**: Verify Firebase configuration in production

### Support:

If you encounter issues, check:

- GoDaddy hosting documentation
- Browser console for JavaScript errors
- Server error logs

## 📝 Notes

- This is a React SPA (Single Page Application)
- All routing is handled client-side
- Firebase is used for backend functionality
- The site is optimized for Arabic (RTL) content
