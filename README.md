# PopX - Account Management App

## Project Description

**PopX** is a web application built with **React.js** that allows users to create an account, log in, and view their profile (recommended to zoom out in case of overflow). This project was developed to demonstrate my understanding of frontend development and ReactJS. The app features a user authentication flow with a simple user interface and the ability to store user data in local storage.

---

## Features

https://github.com/user-attachments/assets/6260e21a-3924-466b-b692-935d3473a71f

- **Create an Account**: Users can register by entering their full name, phone number, email, and password.
- **Login**: Users can log in with their registered email and password.
- **Profile Page**: After logging in, users can view their profile, including their profile picture and basic details.
- **Responsive Design**: The app is fully responsive and works well across various devices.
---

## Technologies Used

- **React**: For building the UI components and managing application state.
- **Tailwind CSS**: For styling and responsive design.
- **React Router**: For handling routing and navigation between pages.
- **LocalStorage**: For storing user data locally in the browser.
  
---

## Installation

Follow these steps to set up the project locally.

1. **Clone the repository**

   ```bash
   git clone https://github.com/sanskriti2004/landing-page.git
   ```

2. **Navigate into the project directory**

   ```bash
   cd landing-page
   ```

3. **Install dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   cd landing-page
   npm install
   ```

4. **Run the application**

   Start the development server by running:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Usage

1. **Create Account:**
   - Fill in the required fields (Full Name, Phone Number, Email, and Password) and click the "Create Account" button.
   - Then app navigates to the profile page.

2. **Login:**
   - Enter the email and password that was used during account creation and click "Login".
   - The user is logged in and redirected to their profile page.

3. **Profile Page:**
   - The user can see dummy name, email, and a profile picture.
   - There is an option to edit the profile picture (this is a dummy feature for demonstration).

---

## Project Structure

The project is structured as follows:

```
/src
  /assets        # Contains images like profile_pic and camera icon
  /pages         # Contains pages like Profile.jsx, Signup.jsx
  App.jsx        # Main entry point for the app
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

---

## Acknowledgements

- **Tailwind CSS** for simplifying the design process.
- **React** for making the app interactive and component-based.
- **React Router** for handling routing.

---

This is just a basic structure and you can always improve it depending on the scope and complexity of your project. If you need help with specific sections or would like further details in your README, feel free to ask!
