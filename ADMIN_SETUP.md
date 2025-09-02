# Admin Dashboard Setup Instructions

## Overview
This admin dashboard allows you to manage contact information for the Autonique website. The admin can edit phone numbers, email addresses, and physical addresses that are displayed on the contact page.

## Admin Credentials
- **Email**: Info@Autoniqueit.com
- **Password**: Zxz1234512345@

## Firebase Setup Required

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication and Firestore Database

### 2. Configure Firebase
1. In Firebase Console, go to Project Settings
2. Add a web app to your project
3. Copy the Firebase configuration object
4. Replace the placeholder config in `src/firebase/config.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3. Enable Authentication
1. In Firebase Console, go to Authentication
2. Enable Email/Password authentication
3. Add the admin user manually or let the app create it on first run

### 4. Set up Firestore Database
1. In Firebase Console, go to Firestore Database
2. Create database in test mode (for development)
3. Set up security rules to allow read/write access

### 5. Security Rules (Optional but Recommended)
Add these Firestore security rules:

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

## Usage

### Accessing Admin Dashboard
1. Navigate to `/admin/login` on your website
2. Enter the admin credentials
3. You'll be redirected to `/admin/dashboard`

### Managing Contact Information
1. In the dashboard, you can edit:
   - Phone number
   - Email address
   - Physical address
2. Click "حفظ التغييرات" (Save Changes) to update the information
3. Changes will be reflected immediately on the main website

### Features
- ✅ Secure authentication
- ✅ Real-time data updates
- ✅ Responsive design
- ✅ Arabic language support
- ✅ Form validation
- ✅ Success/error notifications

## File Structure
```
src/
├── components/
│   ├── AdminLogin.jsx          # Admin login page
│   ├── AdminDashboard.jsx      # Main admin dashboard
│   ├── ProtectedRoute.jsx      # Route protection
│   └── Contact.jsx             # Updated to fetch from Firebase
├── contexts/
│   └── AuthContext.jsx         # Authentication context
├── firebase/
│   ├── config.js               # Firebase configuration
│   └── init.js                 # Firebase initialization
└── App.jsx                     # Updated with routing
```

## Troubleshooting

### Common Issues
1. **Firebase config error**: Make sure you've replaced the placeholder config with your actual Firebase project config
2. **Authentication failed**: Verify the admin credentials are correct
3. **Database access denied**: Check Firestore security rules
4. **Data not loading**: Ensure Firestore database is created and accessible

### Development Notes
- The app will automatically create the admin user and initial contact data on first run
- All contact information is stored in Firestore under `settings/contact`
- The main website fetches contact data from Firebase on component mount

## Security Considerations
- Admin credentials are hardcoded for simplicity but should be moved to environment variables in production
- Consider implementing additional security measures like IP whitelisting for admin access
- Regular password updates are recommended
- Monitor Firebase usage and set up billing alerts