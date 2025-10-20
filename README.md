# Fast Food Mobile App

This is a cross-platform mobile application for a fast-food restaurant, built with React Native and Expo. It allows users to browse the menu, customize their orders, add items to their cart, and proceed to checkout. The app features user authentication, a persistent cart, and a clean, modern user interface.

## Features

-   **User Authentication**: Sign up, sign in, and sign out functionality.
-   **Browse Menu**: View a list of available food items with details.
-   **Search and Filter**: Search for specific items and filter by category.
-   **Product Details**: View detailed information for each menu item.
-   **Shopping Cart**: Add/remove items, and adjust quantities.
-   **Order Summary**: View a summary of the items in the cart before placing an order.
-   **Profile Management**: View user profile information.

## Technologies Used

-   **React Native**: A framework for building native apps using React.
-   **Expo**: A platform for making universal native apps for Android, iOS, and the web.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Tailwind CSS (NativeWind)**: A utility-first CSS framework for rapidly building custom designs.
-   **Zustand**: A small, fast, and scalable state-management solution.
-   **Appwrite**: A backend platform for building web and mobile applications.
-   **Expo Router**: A file-based router for React Native and web applications.

## Project Structure

The project is organized into the following directories:

-   `app/`: Contains the different screens and navigation setup using Expo Router.
    -   `(auth)`: Authentication-related screens (Sign In, Sign Up).
    -   `(tabs)`: Main application screens after authentication (Home, Search, Cart, Profile).
    -   `menu-details/`: Screen for displaying the details of a menu item.
-   `assets/`: Static assets like fonts, icons, and images.
-   `components/`: Reusable UI components used throughout the application.
-   `constants/`: Global constants like colors, styles, and dummy data.
-   `lib/`: Core logic, including Appwrite configuration, API calls, and custom hooks.
-   `store/`: State management stores for authentication and the shopping cart.

## Getting Started

### Prerequisites

-   Node.js (v18 or newer)
-   npm or yarn
-   Expo Go app on your mobile device (for testing on a physical device)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/devRezaulKarim/rn-fast-food.git
    cd rn-fast-food
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root of the project and add the necessary Appwrite configuration. You can use the `.env.example` file as a template:
    ```
    EXPO_PUBLIC_APPWRITE_ENDPOINT=...
    EXPO_PUBLIC_APPWRITE_PROJECT_ID=...
    EXPO_PUBLIC_APPWRITE_PLATFORM_NAME=...
    EXPO_PUBLIC_APPWRITE_BUCKET_ID=...
    EXPO_PUBLIC_APPWRITE_DB_ID=...
    EXPO_PUBLIC_APPWRITE_DB_USER_TBL_ID=...
    EXPO_PUBLIC_APPWRITE_DB_CATEGORY_TBL_ID=...
    EXPO_PUBLIC_APPWRITE_DB_MENU_TBL_ID=...
    ```

### Running the Application

1.  **Start the development server**:
    ```bash
    npm start
    ```

2.  **Run on a mobile device or simulator**:
    -   Scan the QR code with the Expo Go app on your iOS or Android device.
    -   Or, press `i` to run on an iOS simulator or `a` to run on an Android emulator.

## Acknowledgements

-   This project was developed as a demonstration of a modern mobile application using React Native and Appwrite.
-   The UI design is inspired by various food delivery applications.