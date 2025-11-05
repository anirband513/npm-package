# Publishing Guide - Version 1.1.0

## Summary of Changes
This update adds **unique designs** for Admin Dashboard and E-commerce templates while maintaining backward compatibility with basic templates.

## Pre-Publishing Checklist

### 1. Update Version Number
Edit `package.json`:
```json
{
  "version": "1.1.0"  // Changed from 1.0.10
}
```

### 2. Update CHANGELOG.md
Add new entry at the top:

```markdown
## [1.1.0] - 2025-11-05

### Added
- **🎨 Admin Dashboard Template**: Professional sidebar layout with 5 admin-specific pages
  - Dashboard with statistics cards, performance metrics, and data tables
  - Users management with API integration (JSONPlaceholder)
  - Products management with images and filtering (FakeStoreAPI)
  - Analytics page with traffic sources and conversion funnel
  - Settings page with forms and notification preferences

- **🛍️ E-commerce Template**: Complete shopping experience with 5 pages
  - Home page with hero carousel and featured products
  - Products listing with search, filters, and pagination
  - Product detail page with quantity selector and add to cart
  - Shopping cart with Redux state management
  - Multi-step checkout process (Shipping → Payment → Complete)

- **🛒 Shopping Cart Redux Slice**: Full cart management for e-commerce template
  - Add/remove items from cart
  - Update quantities
  - Clear cart functionality
  - Persistent cart state across pages

### Enhanced
- **Template-Specific Routing**: Generator now properly supports unique layouts per template
- **Feature Integration**: All templates properly utilize selected features (Ant Design, Router, Redux, Axios)
- **Real API Integration**: Admin and E-commerce templates fetch real data from external APIs

### Maintained
- **Backward Compatibility**: Basic React, React with Router, and React with Redux templates maintain their original horizontal menu design
- **Feature Flags**: All Mustache conditionals work correctly across all templates

### Technical Details
- Created 15 new template files (10 pages + 2 Redux slices + 2 App layouts + 1 store config)
- Admin template uses collapsible sidebar navigation
- E-commerce template uses shopping cart header with badge counter
- Both templates are fully responsive and mobile-friendly
```

### 3. Rebuild the CLI
```bash
npm run build:cli
```

### 4. Test Locally (Recommended)
```bash
# Link the package locally
npm link

# Test each template
create-modern-vite-app test-admin --template "react-admin" --features "antd,router,redux,axios" --yes
create-modern-vite-app test-shop --template "react-ecommerce" --features "antd,router,redux,axios" --yes
create-modern-vite-app test-basic --template "react-basic" --features "antd,router" --yes

# Verify each app
cd test-admin && npm install && npm run dev
cd ../test-shop && npm install && npm run dev
cd ../test-basic && npm install && npm run dev

# Clean up
cd ..
rm -rf test-admin test-shop test-basic
npm unlink -g create-modern-vite-app
```

### 5. Commit Version Bump
```bash
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.1.0"
git push origin main
```

### 6. Create Git Tag
```bash
git tag -a v1.1.0 -m "Release v1.1.0 - Add Admin Dashboard and E-commerce templates"
git push origin v1.1.0
```

---

## Publishing to NPM

### Option 1: Publish Directly
```bash
npm publish
```

### Option 2: Publish with Tag (if testing)
```bash
npm publish --tag beta
```

Then later to promote to latest:
```bash
npm dist-tag add create-modern-vite-app@1.1.0 latest
```

---

## Post-Publishing Tasks

### 1. Verify on NPM
Visit: https://www.npmjs.com/package/create-modern-vite-app

Check:
- ✅ Version shows 1.1.0
- ✅ README displays correctly
- ✅ Files are included (dist, templates, bin)

### 2. Test Installation
```bash
# In a new terminal/directory
npx create-modern-vite-app@latest my-test-admin --template "react-admin" --yes
cd my-test-admin
npm install
npm run dev
```

### 3. Update Documentation
If you have separate docs, update:
- Template options list
- Screenshots of each template
- Feature comparison table

---

## Rollback Plan (If Issues Found)

### Unpublish (within 72 hours)
```bash
npm unpublish create-modern-vite-app@1.1.0
```

### Deprecate (after 72 hours)
```bash
npm deprecate create-modern-vite-app@1.1.0 "Please use version 1.0.10 instead"
```

### Revert Version
```bash
git revert <commit-hash>
git push origin main
npm publish  # Publishes as 1.0.11 with reverted changes
```

---

## Marketing the Update

### NPM Package Description
Update `package.json`:
```json
{
  "description": "CLI tool to generate React starter projects with Vite, TypeScript, Ant Design, and Tailwind CSS. Now with professional Admin Dashboard and E-commerce templates!"
}
```

### GitHub Release Notes
Create a GitHub release with:
- Tag: v1.1.0
- Title: "🎨 Admin Dashboard & 🛍️ E-commerce Templates"
- Description: Copy from CHANGELOG.md
- Attach: Screenshots or GIFs of new templates

### Social Media Post (Optional)
```
🚀 Just released v1.1.0 of create-modern-vite-app!

New features:
✨ Professional Admin Dashboard template with sidebar navigation
✨ Complete E-commerce template with shopping cart
✨ Real API integration examples
✨ Redux-powered cart management

Try it now:
npx create-modern-vite-app@latest my-app

#React #Vite #TypeScript #WebDev
```

---

## Expected npm publish Output

```
npm notice 
npm notice 📦  create-modern-vite-app@1.1.0
npm notice === Tarball Contents === 
npm notice 1.2kB   package.json
npm notice 15.4kB  README.md
npm notice 523B    bin/cli.js
npm notice 45.2kB  dist/generator.js
npm notice 2.1kB   dist/index.js
npm notice ...     (templates folder)
npm notice === Tarball Details === 
npm notice name:          create-modern-vite-app
npm notice version:       1.1.0
npm notice package size:  XXX kB
npm notice unpacked size: XXX kB
npm notice total files:   XX
npm notice 
+ create-modern-vite-app@1.1.0
```

---

## Troubleshooting

### Build fails
```bash
# Clear dist and rebuild
rm -rf dist
npm run build:cli
```

### Templates not included in package
Check `package.json` has:
```json
{
  "files": [
    "dist",
    "templates",
    "bin"
  ]
}
```

### Users see old version
```bash
# They may need to clear npx cache
npx clear-npx-cache
# Or use specific version
npx create-modern-vite-app@1.1.0 my-app
```

---

## Success Metrics

After publishing, monitor:
- ✅ Download count increases on npmjs.com
- ✅ No critical issues reported
- ✅ GitHub stars/forks increase
- ✅ Positive user feedback

---

## Quick Publish Commands (Copy-Paste)

```bash
# 1. Update version in package.json manually
# 2. Update CHANGELOG.md manually
# 3. Then run:

npm run build:cli
git add package.json CHANGELOG.md
git commit -m "chore: bump version to 1.1.0"
git push origin main
git tag -a v1.1.0 -m "Release v1.1.0 - Add Admin Dashboard and E-commerce templates"
git push origin v1.1.0
npm publish

# 4. Test it works:
npx create-modern-vite-app@latest test-app --template "react-admin" --yes
```

---

## Done! 🎉

Your package is now live with:
- ✅ Admin Dashboard template with 5 pages
- ✅ E-commerce template with shopping cart
- ✅ Professional, production-ready boilerplates
- ✅ Full feature integration
- ✅ Backward compatibility maintained

Users can now generate real-world apps instantly!
