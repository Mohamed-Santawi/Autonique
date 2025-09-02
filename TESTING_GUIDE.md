# Testing Guide for Autonique Website

## Overview
This guide provides comprehensive testing instructions for the Autonique website before deploying to production on GoDaddy.

## Testing Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest jsdom @vitest/ui @vitest/coverage-v8 eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

## Running Tests

### 1. Unit Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

### 2. Code Quality Checks
```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

### 3. Build Testing
```bash
# Test build process
npm run build:test
```

## Test Categories

### 1. Component Tests
- **Header Component**: Navigation, mobile menu, logo display
- **Contact Component**: Form validation, email client selection, Firebase integration
- **AdminDashboard Component**: CRUD operations, form management, Firebase operations
- **Footer Component**: Links, social media, responsive design
- **App Component**: Overall structure and component integration

### 2. Integration Tests
- Firebase Firestore operations
- Form submissions
- Navigation functionality
- Responsive design behavior

### 3. User Experience Tests
- Form validation
- Error handling
- Loading states
- Success messages
- Modal interactions

## Pre-Deployment Checklist

### 1. Code Quality ✅
- [ ] All ESLint errors resolved
- [ ] No console warnings
- [ ] Code follows project conventions
- [ ] All unused imports removed

### 2. Testing ✅
- [ ] All tests pass (`npm run test:run`)
- [ ] Test coverage above 80% (`npm run test:coverage`)
- [ ] No failing tests
- [ ] Integration tests pass

### 3. Functionality ✅
- [ ] Contact form works correctly
- [ ] Email client selection modal functions
- [ ] Admin dashboard CRUD operations work
- [ ] Footer links open in new tabs
- [ ] Responsive design works on all devices
- [ ] Navigation works properly

### 4. Performance ✅
- [ ] Build size is reasonable
- [ ] Images are optimized
- [ ] No memory leaks
- [ ] Fast loading times

### 5. Security ✅
- [ ] Firebase security rules configured
- [ ] No sensitive data in client code
- [ ] Environment variables properly set
- [ ] HTTPS enforced in production

### 6. Browser Compatibility ✅
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

### 7. Accessibility ✅
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets standards

## Production Deployment Checklist

### 1. Environment Setup
- [ ] Production Firebase project configured
- [ ] Environment variables set
- [ ] Domain configured in Firebase
- [ ] SSL certificate enabled

### 2. Build Process
- [ ] Production build successful
- [ ] No build errors
- [ ] Assets optimized
- [ ] Bundle size acceptable

### 3. GoDaddy Deployment
- [ ] Domain pointing to correct server
- [ ] DNS records configured
- [ ] SSL certificate installed
- [ ] File permissions set correctly

### 4. Post-Deployment
- [ ] Website loads correctly
- [ ] All functionality works
- [ ] Contact form submits successfully
- [ ] Admin dashboard accessible
- [ ] Mobile responsiveness verified
- [ ] Performance monitoring enabled

## Common Issues and Solutions

### 1. Test Failures
```bash
# Clear test cache
npm run test -- --clearCache

# Run specific test file
npm run test Header.test.jsx
```

### 2. Build Errors
```bash
# Clear build cache
rm -rf dist/
npm run build
```

### 3. Firebase Issues
- Check Firebase configuration
- Verify security rules
- Test authentication flow

### 4. Responsive Design Issues
- Test on multiple devices
- Use browser dev tools
- Check CSS breakpoints

## Performance Optimization

### 1. Bundle Analysis
```bash
# Analyze bundle size
npm run build
# Check dist/ folder for file sizes
```

### 2. Image Optimization
- Use WebP format where possible
- Compress images
- Implement lazy loading

### 3. Code Splitting
- Implement React.lazy() for components
- Use dynamic imports for routes

## Monitoring and Maintenance

### 1. Error Tracking
- Set up error monitoring (Sentry, LogRocket)
- Monitor console errors
- Track user interactions

### 2. Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Track loading times

### 3. Regular Testing
- Run tests weekly
- Update dependencies monthly
- Security audits quarterly

## Emergency Procedures

### 1. Rollback Plan
- Keep previous version backup
- Document deployment steps
- Have rollback procedure ready

### 2. Contact Information
- Developer contact details
- Hosting provider support
- Domain registrar support

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [GoDaddy Hosting Guide](https://www.godaddy.com/help)

---

**Last Updated**: December 2024
**Version**: 1.0.0