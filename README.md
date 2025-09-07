# ShopRR - Modern E-Commerce Platform (React, Redux, Firebase & Stripe)

Are you looking to build a modern, full-featured e-commerce platform? Look no further! ShopRR is a complete e-commerce solution built with React, Redux, and Firebase. This template provides everything you need to create a professional online store with user authentication, shopping cart, payment processing, and more. Start building your e-commerce empire today!

### Website preview

<p align="center">
  <kbd>
    <a href="https://shoprrr.vercel.app" target="_blank"><img src="https://i.ibb.co/nP6R16G/S1.jpg" width="600" height="400">
  </a>
  </kbd>
</p>

:star: Star me on GitHub — it helps!

## Features 📋

⚡️ **Modern React Architecture** - Built with React 18, Redux, and React Router v6\
⚡️ **Firebase Integration** - User authentication and database management\
⚡️ **Stripe Payment Processing** - Secure payment handling\
⚡️ **Shopping Cart** - Full cart functionality with Redux state management\
⚡️ **Responsive Design** - Mobile-first approach with Bootstrap and SCSS\
⚡️ **User Authentication** - Sign in/Sign up with Google OAuth\
⚡️ **Product Categories** - Hats, Jackets, Sneakers, Women's & Men's clothing\
⚡️ **Smooth Animations** - React Transition Group for page transitions\
⚡️ **State Management** - Redux with Redux Saga for side effects\
⚡️ **Form Validation** - Custom form components with validation\
⚡️ **Alert System** - User feedback and notifications

## Sections :bookmark:

✔️ **Homepage** - Hero banners and product categories\
✔️ **Shop** - Product listings with category filtering\
✔️ **Product Categories** - Hats, Jackets, Sneakers, Women's, Men's\
✔️ **Shopping Cart** - Add/remove items, quantity management\
✔️ **Checkout** - Secure payment processing with Stripe\
✔️ **Authentication** - Sign in/Sign up with Google OAuth\
✔️ **Contact** - Customer support and contact information

## Tech Stack 🛠️

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Redux** - State management with Redux Toolkit
- **Redux Saga** - Side effect management
- **React Router v6** - Client-side routing
- **React Bootstrap** - UI component library
- **Styled Components** - CSS-in-JS styling
- **SCSS** - Enhanced CSS with variables and mixins

### Backend & Services
- **Firebase v9** - Authentication and Firestore database
- **Stripe** - Payment processing
- **Google OAuth** - Social authentication

### Development Tools
- **Create React App** - Development environment
- **Redux DevTools** - State debugging
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Installation :arrow_down:

#### Prerequisites

You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (v16 or higher)

#### Verify Installation

```bash
node --version
git --version
```

## Getting Started :dart:

#### 1. Fork and Clone the repository

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```bash
git clone https://github.com/higordev223/shoprrr.git

cd shoprrr
```

#### 2. Install dependencies

```bash
npm install
# or
yarn install
```

#### 3. Set up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Google provider)
4. Create a Firestore database
5. Copy your Firebase config
6. Update `src/firebase/firebase.utils.js` with your config:

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

#### 4. Set up Stripe

1. Create a [Stripe account](https://stripe.com/)
2. Get your publishable key
3. Update the Stripe configuration in your components

#### 5. Run the development server

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   ├── cart-dropdown/   # Shopping cart dropdown
│   ├── cart-icon/       # Cart icon component
│   ├── cart-item/       # Individual cart item
│   ├── checkout-item/   # Checkout page item
│   ├── custom-button/   # Custom button component
│   ├── directory/       # Product categories
│   ├── form-input/      # Form input components
│   ├── header/          # Navigation header
│   ├── menu-item/       # Category menu items
│   ├── preview-item/    # Product preview
│   ├── sign-in/         # Sign in form
│   ├── sign-up/         # Sign up form
│   └── stripe-button/   # Stripe payment button
├── pages/               # Page components
│   ├── category/        # Product category page
│   ├── checkout/        # Checkout page
│   ├── contact/         # Contact page
│   ├── hompage/         # Homepage
│   ├── shop/            # Shop page
│   └── sign-in-and-signup/ # Auth pages
├── redux/               # Redux store and reducers
│   ├── alert/           # Alert system
│   ├── cart/            # Shopping cart state
│   ├── directory/       # Product categories
│   ├── shop/            # Shop data
│   └── user/            # User authentication
├── firebase/            # Firebase configuration
└── assets/              # Images and static files
```

## Key Features Explained 🚀

### Shopping Cart
- Add/remove items with quantity management
- Persistent cart state using Redux Persist
- Real-time cart updates
- Cart dropdown with item preview

### User Authentication
- Google OAuth integration
- User profile management
- Protected routes
- Session persistence

### Product Management
- Dynamic product categories
- Product filtering and search
- Image optimization
- Responsive product cards

### Payment Processing
- Stripe integration for secure payments
- Payment form validation
- Order confirmation
- Error handling

## Available Scripts 📜

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Environment Variables 🔐

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Contributing 💡

#### Step 1

- **Option 1**
  - 🍴 Fork this repo!

- **Option 2**
  - 👯 Clone this repo to your local machine using `git clone https://github.com/higordev223/shoprrr.git`

#### Step 2

- **Build your code** 🔨🔨🔨
- Create a new branch: `git checkout -b feature/amazing-feature`
- Make your changes and commit them: `git commit -m 'Add some amazing feature'`
- Push to the branch: `git push origin feature/amazing-feature`

#### Step 3

- 🔃 Create a new pull request.

## Deployment 🚀

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Add your environment variables
4. Deploy!

### Netlify

1. Build your project: `npm run build`
2. Deploy the `build` folder to [Netlify](https://netlify.com/)

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

## Support 💬

If you have any questions or need help with the project, feel free to:

- Open an issue on GitHub
- Contact me at [ruslanus866@outlook.com](mailto:ruslanus866@outlook.com)
- Follow me on GitHub: [@higordev223](https://github.com/higordev223)

## Acknowledgments 🙏

- React team for the amazing framework
- Firebase for backend services
- Stripe for payment processing
- Redux team for state management
- All contributors and supporters

---

**Happy Coding!** 🎉