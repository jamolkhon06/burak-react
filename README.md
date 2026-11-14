# Burak — Frontend

A React-based frontend application built with TypeScript. The project follows a modular architecture with reusable components, organized application screens, centralized state management, and a structured library for shared types, data, and utilities.

## Tech Stack

- **Library:** React
- **Language:** TypeScript
- **State Management:** Redux
- **State Selection:** Reselect
- **UI Components:** Material UI
- **Styling:** CSS
- **Architecture:** Component-based architecture

## Project Structure

```text
src/
├── app/
│   ├── components/       # Reusable UI components
│   ├── MaterialTheme/    # Material UI theme configuration
│   ├── screens/
│   │   ├── helpPage/
│   │   ├── homePage/
│   │   ├── ordersPage/
│   │   ├── productsPage/
│   │   └── userPage/
│   ├── App.tsx
│   ├── hooks.ts
│   └── store.ts
│
├── css/                  # Global styles
│
├── lib/
│   ├── data/             # Shared application data
│   ├── enums/            # Enumerations
│   └── types/            # TypeScript interfaces and types
│
├── index.tsx
└── setupTests.ts
```

## Application Features

- **Dashboard:** Overview of important application statistics.
- **Popular Dishes:** Displays popular food items.
- **New Dishes:** Showcases recently added dishes.
- **Orders Management:** Dedicated screen for managing orders.
- **Products Management:** Organized product management interface.
- **User Management:** Dedicated user-related functionality.
- **Help Center:** Support and help-related interface.
- **Active Users:** Displays user activity information.
- **Events:** Dedicated events section.

## Architecture & State Management

The application follows a modular structure to maintain separation of concerns and improve maintainability.

- **Reusable Components:** Shared UI components are organized separately from individual screens.
- **Redux Store:** Centralized application state management.
- **Redux Slices:** State updates and actions are organized into dedicated slices.
- **Reselect:** Memoized selectors retrieve specific data from the application state.
- **TypeScript:** Provides type safety and structured data definitions.
- **Custom Hooks:** Shared application hooks are maintained within the app directory.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm

### Installation

Clone the repository:

```bash
git clone https://github.com/jamolkhon06/burak-react
```

Navigate to the project directory:

```bash
cd burak-react
```

Install dependencies:

```bash
yarn install
```

### Run the Development Server

```bash
yarn run start
```

The application will be available at:

```text
http://localhost:3000
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
