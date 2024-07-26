# DBounty User Frontend

## Overview

The **DBounty User Frontend** is the client-side application designed for vulnerability researchers (bounty hunters) to interact with the DBounty platform. Built with Vue.js, this frontend provides a user-friendly interface for researchers to submit vulnerability reports, view available programs, and communicate with company managers. It also interfaces with Ethereum smart contracts to handle various decentralized functionalities.

## Features

- **Program Discovery:** Browse and search for available bug bounty programs.
- **Report Submission:** Create and submit detailed reports of identified vulnerabilities.
- **Communication:** Real-time chat with company managers regarding reports.
- **Account Management:** Manage your profile, view submission history, and track reputation.
- **Smart Contract Interaction:** Interface with Ethereum smart contracts for decentralized operations.

## Application Structure

The User Frontend is organized into:

- **Pages:** Dashboard, Program Details, Report Submission, and User Profile.
- **Components:** Reusable Vue.js components for UI elements such as forms and tables.
- **Contracts:** Includes the smart contracts.
- **Assets:** Contains the project assets.
- **Store:** Vuex store for application state management, including user authentication and report tracking.

## Authentication

- **MetaMask:** Users authenticate via MetaMask. The authentication process involves:
  1. **Connection:** Connecting your MetaMask wallet to the application.
  2. **Signature:** Signing a message to verify your identity.
  3. **Token:** Receiving a JWT token for secure communication with the backend.

## Real-Time Communication

- **Protocol:** WebSocket is used for real-time updates and communication, allowing:
  - **Instant Notifications:** Receive updates on report status changes.
  - **Real-Time Chat:** Communicate with company managers regarding reports.

## Smart Contract Interaction

The frontend interacts with the project smart contracts.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


