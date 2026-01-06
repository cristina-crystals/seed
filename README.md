# Seed - Earth, Crystal & Healing

A beautiful static website featuring an earth, crystal, and healing theme. This site serves as a landing page connecting visitors to educational resources and merchandise.

## 🌱 Features

- **Elegant Design**: Earth-toned color palette with crystal and healing aesthetics
- **Responsive Layout**: Beautiful on all devices
- **Animated Elements**: Subtle animations and interactive effects
- **Easy Configuration**: Simple link updates for your platforms

## 🔗 Connected Platforms

- **Education Hub**: Node.js EDU application (hosting TBD)
- **Crystal Shop**: Shopify merchandise store

## 🚀 Setup for GitHub Pages

1. Push this repository to GitHub
2. Go to your repository Settings
3. Navigate to Pages (under Code and automation)
4. Set Source to "Deploy from a branch"
5. Select your main branch and root directory
6. Click Save

Your site will be available at: `https://[username].github.io/seed`

## ⚙️ Configuration

When your EDU app and Shopify store are ready, update the URLs in `script.js`:

```javascript
const EDU_APP_URL = 'https://your-edu-app.com';
const SHOPIFY_URL = 'https://your-store.myshopify.com';
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css` to adjust the color scheme:
- `--earth-brown`: Main earth tone
- `--sage-green`: Healing green accent
- `--crystal-purple`: Crystal energy color
- `--rose-quartz`: Soft pink accent
- `--gold-accent`: Highlighting color

### Content
Update `index.html` to modify:
- Tagline and descriptions
- Feature sections
- Footer information

## 📁 File Structure

```
seed/
├── index.html      # Main landing page
├── styles.css      # Styling and animations
├── script.js       # Interactive features
└── README.md       # Documentation
```

## 🌟 Features to Add Later

- Blog section for healing articles
- Newsletter signup
- Social media integration
- Resource library
- Community forum links

## 📝 License

© 2026 Seed. All rights reserved.

---

*Cultivating consciousness, one soul at a time.*
