# ERP System for IIITM Gwalior

## Overview
This project is an ERP system designed for students and teachers of IIITM Gwalior. The system includes modules for attendance tracking, notifications, timetables, and user management. The backend is built on Firebase for scalability, and the frontend uses React with lazy loading to optimize performance.

---

## Features

### Backend
- **Firebase Authentication** for secure user login/signup.
- **Cloud Firestore** for dynamic data (attendance tracking, notifications).
- **Firebase Cloud Functions** for server-side logic and enhanced security.
- **Static Content Hosting** for branch-specific timetables.
- **Critical.txt**
### Frontend
- **React with Lazy Loading** using `React.lazy` and `Suspense` for efficient component management.
- **Error Boundaries** for graceful error handling.
- Context-sensitive alerts and loading indicators.
- Accessibility features (screen reader support, form validation).
- SEO optimization using meta tags, robots.txt, and sitemap references.

---

## Frontend Team Tasks

### 1. General Tasks
- **Lazy Loading:** Use `React.lazy` and `Suspense` in `App.js` to manage lazy-loaded components (`SignupPage` and `SigninPage`).
- **Routing:** Explore `react-router-dom` to efficiently organize routes.
- **Styling:** Optimize and maintain styles in `App.css` for a clean, responsive UI.
- **Testing:** Ensure proper rendering of components and write unit tests in `app.test.js`.

### 2. Static and Dynamic Content
- Retrieve branch-specific timetables from the backend and display them accordingly.
- Use `manifest.json` for better discoverability:
  - Optimize icons for different resolutions (e.g., `128x128`, `256x256`).
  - Set `"start_url"` to `/dashboard` and configure `"scope"` as `"/"`.
  - Enable fullscreen display mode and add relevant `"categories"` for improved discoverability.

### 3. Error Handling & Accessibility
- Use the `<noscript>` tag in `index.html` to inform users that JavaScript is required.
- Implement error boundaries (e.g., `ErrorBoundary` component) to gracefully handle runtime errors in `App.js`.
- Ensure accessibility by adding attributes like `aria-label` to form elements and proper tab indexing.

### 4. Debounced Input Handling
- Utilize a debouncing mechanism (e.g., with the `lodash.debounce` library) in `Signin.jsx` to reduce excessive re-renders during input changes.

### 5. Loading Indicators
- Implement a loading state for button actions:
  ```jsx
  <button onClick={signInUser} disabled={isLoading}>
    {isLoading ? 'Signing In...' : 'Sign-In'}
  </button>
