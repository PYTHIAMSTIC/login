# login
web3 login with rainbowkit and wagmi template

```bash
login/
│
├── src/
│   ├── pages/
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── components/
│   │   ├── TorusBackground.tsx
│   │   └── WalletConnect.tsx
│   └── wagmi.ts
│
├── public/
│   ├── favicon.ico
│   └── images/
│       └── doorway.jpg
│
├── tailwind.config.js
├── package.json
├── jsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── README.md

```


# Pythia Login

Welcome to the Pythia Login repository! This project is designed to provide a visually appealing and secure login interface for users before they access the Pythia NFT Marketplace. The login screen features a 3D torus effect and integrates Web3 wallet connections powered by next.js, three.js, rainbowKit, and wagmi

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Deploying the Application](#deploying-the-application)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **3D Torus Effect:** A captivating login screen with a rotating 3D torus, implemented using Three.js.
- **Web3 Wallet Integration:** Seamless Web3 wallet connection via RainbowKit, supporting MetaMask, Coinbase Wallet, and others.
- **Responsive Design:** Optimized for various screen sizes, providing a consistent experience across devices.

## Installation

To get started with the Pythia Login project, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/pythiamstic/login.git
    cd login
    ```

2. **Install Dependencies:**

    Ensure you have Node.js and npm installed. Then, install the project dependencies:

    ```bash
    npm install
    ```

## Running the Development Server

After installing the dependencies, start the development server:

```bash
npm run dev
# production
npm run build
# standalone deployment aka docker
npm run start

