# Ivish AI Project

## Overview
This project is a web application for Ivish AI, featuring a careers page, user registration, and various informational sections.

## File Structure

### 1. `server.js`
- Sets up an Express server.
- Configures middleware for CORS and body parsing.
- Defines API routes under the `/api` path.
- Listens on a specified port (default 5000).

### 2. `src/App.js`
- Main application file that sets up routing using React Router.
- Defines routes for various pages, including lazy loading for performance optimization.
- Includes routes for home, products, careers, blogs, and other components.

### 3. `src/backend/api.js`
- Defines API endpoints for user registration and authentication.
- Uses Express Router to handle requests and bcrypt for password hashing.
- Includes endpoints for registering and logging in users.

### 4. `src/pages/Home.jsx`
- Defines the structure of the home page.
- Imports and includes various components such as `Header`, `HeroSection`, `ComingUp`, `MissionStatement`, `WhyIvish`, and `JoinUs`.

### 5. `src/pages/NotFound.jsx`
- Handles the 404 error page.
- Displays an animated message indicating that the page does not exist.
- Provides navigation buttons to return to the previous page or the home page.

### 6. `src/pages/Careers/Careers.jsx`
- Defines the careers page with a navigation bar, hero section, search functionality, and featured job opportunities.
- Includes job categories and a section for users to submit their resumes.

### 7. `src/pages/Careers/Signup.jsx`
- Handles user registration with form fields for email and password.
- Validates password criteria and checks for agreement to the privacy policy.
- Sends a registration request to the API and provides user feedback on success or failure.

## Conclusion
This README provides an overview of the Ivish AI project structure and key functionalities.
