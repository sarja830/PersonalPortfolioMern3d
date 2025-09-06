# GitHub Pages Deployment Guide

Your MERN 3D portfolio has been prepared for GitHub Pages deployment! The contact form has been modified to show a temporary offline message with alternative contact methods.

## 🚀 Deployment Steps

### 1. Update Contact Information
Before deploying, update your actual contact information in:
- `client/src/components/Contact.jsx` (lines 52-53)

Replace the placeholder text:
```
💼 LinkedIn: [Your LinkedIn URL]
✉️ Email: [Your Email Address]
```

With your actual contact details.

### 2. Update Repository Name (if needed)
In `client/vite.config.js`, make sure the `base` property matches your GitHub repository name:
```javascript
base: '/PersonalPortfolioMern3d/', // Should match your repo name
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 4. Enable GitHub Actions
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 5. Deploy
The GitHub Action will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

Your site will be available at: `https://[your-username].github.io/PersonalPortfolioMern3d/`

## 📧 Contact Form Alternative

The contact form currently shows an offline message. To make it functional later, you can:

1. **EmailJS (Recommended)**: Set up a free EmailJS account and update the configuration
2. **Formspree**: Use Formspree for form handling
3. **Netlify Forms**: If you switch to Netlify hosting

## 🛠️ Local Development

To run locally:
```bash
# Frontend only (recommended)
cd client
npm run dev

# Or with backend (if needed later)
npm start  # in root directory
cd client && npm run dev  # in another terminal
```

## ✅ What's Been Done

- ✅ Removed backend dependencies from frontend
- ✅ Updated contact form with offline message
- ✅ Configured Vite for GitHub Pages
- ✅ Created GitHub Actions workflow
- ✅ Built production files
- ✅ Ready for deployment

## 🔧 Troubleshooting

If deployment fails:
1. Check GitHub Actions logs in the **Actions** tab
2. Verify the repository name matches the Vite config `base` property
3. Ensure GitHub Pages is enabled in repository settings

Your portfolio is now ready for deployment! 🎉
