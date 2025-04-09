<div align="center">
  <br />
  <img src="https://i.postimg.cc/PqwjjvvL/ryda-banner.jpg" alt="Project Banner" />
  <br /><br />
  
  <div>
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logo=expo&logoColor=white" alt="expo" />
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logo=react&logoColor=222222&color=61DAFB" alt="react native" />
    <img src="https://img.shields.io/badge/-NativeWind-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="nativewind" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logo=clerk&logoColor=white&color=3B49DF" alt="clerk" />
    <img src="https://img.shields.io/badge/-NeonDB-black?style=for-the-badge&logo=postgresql&logoColor=white&color=4169E1" alt="neon database" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logo=stripe&logoColor=white&color=635BFF" alt="stripe" />
    <img src="https://img.shields.io/badge/-Geoapify-black?style=for-the-badge&logo=mapbox&logoColor=white&color=E63946" alt="geoapify" />
  </div>

  <h2 align="center">Ryda 🚗</h2>

  <div align="center">
    <b>Ryda</b> is a ride-booking mobile application built using the latest Expo features and a high-performance edge-ready Postgres database hosted on Neon. With seamless user authentication via Clerk, real-time maps powered by Geoapify and Google Maps, and secure payments using Stripe, Ryda provides a fast, modern ride-booking experience. This project is part of a learning journey, inspired by a YouTube tutorial.
  </div>
</div>

## <a name="features">✨ Features</a>

- **Authentication:** Clerk provides secure and simple user auth with JWTs and session management.

- **Location Search & Routing:** Geoapify and Google Maps API integration for address search, route plotting, and geolocation.

- **Real-time Map Display:** Interactive map UI for pickup/drop-off with marker rendering and custom styles.

- **Booking System:** Request and confirm rides with dynamic pricing and real-time ETA.

- **Payments:** Secure payments with Stripe integration for ride fares.

- **Responsive Design:** Styled with NativeWind to ensure beautiful layouts across all mobile screen sizes.

- **Edge-Ready Database:** Neon Postgres powers backend data with lightning-fast queries and edge deployments.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend:** React Native, Expo

- **Styling:** NativeWind (Tailwind CSS for React Native)

- **Auth:** Clerk

- **Backend:** Neon (Edge-Ready PostgreSQL)

- **APIs:** Google Maps API, Geoapify

- **Payments:** Stripe

## <a name="quick-start">🚀 Quick Start</a>

Follow the steps below to get Ryda running locally on your device.

### Prerequisites

Ensure you have these installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- Expo Go (iOS/Android) or emulator/simulator

### Clone the Repository

```bash
git clone https://github.com/Mahmud0808/Ryda.git
cd Ryda
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the project root and add the following:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
DATABASE_URL=
EXPO_PUBLIC_SERVER_URL=https://uber.com/
EXPO_PUBLIC_GEOAPIFY_API_KEY=
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Replace these values with actual credentials from [Clerk](https://clerk.dev), [Neon](https://neon.tech), [Stripe](https://stripe.com/), [Google Maps](https://console.cloud.google.com/), and [Geoapify](https://www.geoapify.com/).

### Start the App

```bash
npx expo start --clear
```

Then scan the QR code from your Expo Go app or run it on your simulator.

## 📚 Learning Source

This project is a **learning experience** based on a [YouTube tutorial](https://www.youtube.com/watch?v=kmy_YNhl0mw&list=PL6QREj8te1P54rZQx5AWWtFyf1hlznFjL) aimed at exploring real-world React Native app development using modern tools and APIs. In addition to following the tutorial, I have fixed some bugs and updated deprecated methods to ensure the app runs smoothly with the latest dependencies and features.

## 🤝 Contributing

Contributions are appreciated! Feel free to:

- Fork the repo
- Create a feature branch (`git checkout -b feature/MyNewFeature`)
- Commit your changes (`git commit -m 'Add MyNewFeature'`)
- Push to the branch (`git push origin feature/MyNewFeature`)
- Submit a pull request 🚀

## 📬 Contact

Have questions or feedback? Reach out at:

**Email:** mahmudul15-13791@diu.edu.bd
