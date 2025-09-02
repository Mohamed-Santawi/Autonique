# Firebase Setup Instructions

## Quick Setup Guide

### 1. Firebase Project Setup

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Create New Project** or use existing project
3. **Enable Services**:
   - Authentication
   - Firestore Database

### 2. Authentication Setup

1. **Go to Authentication** in Firebase Console
2. **Click "Get Started"**
3. **Enable Email/Password** sign-in method
4. **Add Admin User**:
   - Click "Add User"
   - Email: `Info@Autoniqueit.com`
   - Password: `Zxz1234512345@`
   - Click "Add user"

### 3. Firestore Database Setup

1. **Go to Firestore Database** in Firebase Console
2. **Click "Create Database"**
3. **Choose "Start in test mode"** (for development)
4. **Select location** (choose closest to your users)

### 4. Security Rules (Optional but Recommended)

In Firestore Database → Rules, replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /settings/{document} {
      allow read: if true;  // Anyone can read contact info
      allow write: if request.auth != null;  // Only authenticated users can write
    }
  }
}
```

### 5. Get Firebase Config

1. **Go to Project Settings** (gear icon)
2. **Add Web App** if not already added
3. **Copy the config object**
4. **Update your `.env` file** with the actual values

### 6. Test the Setup

1. **Start your development server**: `npm run dev`
2. **Navigate to**: `http://localhost:5173/admin/login`
3. **Login with**:
   - Email: `Info@Autoniqueit.com`
   - Password: `Zxz1234512345@`

## Troubleshooting

### Common Issues:

1. **"auth/invalid-credential" Error**:
   - Make sure admin user exists in Firebase Authentication
   - Check email/password spelling
   - Verify Firebase config in `.env` file

2. **"Missing or insufficient permissions"**:
   - Check Firestore security rules
   - Make sure database is created
   - Verify project ID in config

3. **"Failed to load resource: 400"**:
   - Check Firebase API key
   - Verify project is active
   - Check billing status (if applicable)

### Verification Steps:

1. **Check Authentication**:
   - Firebase Console → Authentication → Users
   - Should see `Info@Autoniqueit.com` user

2. **Check Firestore**:
   - Firebase Console → Firestore Database
   - Should have `settings/contact` document

3. **Check Project Settings**:
   - Verify web app is added
   - Check API key is correct

## Environment Variables

Your `.env` file should look like this (with your actual values):

```env
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_ADMIN_EMAIL=Info@Autoniqueit.com
VITE_ADMIN_PASSWORD=Zxz1234512345@
```

## Next Steps After Setup

1. **Test Admin Login**: `/admin/login`
2. **Test Dashboard**: `/admin/dashboard`
3. **Test Contact Updates**: Edit contact info and save
4. **Test Main Website**: Verify contact info updates on main page

## Security Notes

- Change admin password after first login
- Set up proper Firestore security rules for production
- Consider IP whitelisting for admin access
- Monitor Firebase usage and billing