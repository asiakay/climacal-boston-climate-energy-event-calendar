# ClimaCal: Boston Climate & Energy Event Calendar

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/climacal-boston-climate-energy-event-calendar)

ClimaCal is a visually stunning, minimalist web application designed to showcase climate tech, energy, and sustainability events happening in the Boston area. The application presents a clean, readable, and aesthetically pleasing list of events, sourced from a provided dataset. The core focus is on user experience, achieved through a spacious layout, refined typography, and subtle micro-interactions. The main view consists of a chronological list of event cards, grouped by date. Each card provides essential information at a glance—title, time, venue, and descriptive tags—and links directly to the event source for more details. The design philosophy is 'less is more,' prioritizing clarity and effortless navigation.

## Key Features

-   **Minimalist Single-Page UI:** A clean, focused interface presenting all information on a single page.
-   **Chronological Event Feed:** Events are grouped by date and sorted chronologically for easy browsing.
-   **Responsive Event Cards:** Beautifully designed cards that display key event details (title, time, venue, tags) and look great on all devices.
-   **Interactive Polish:** Smooth hover effects and micro-interactions for a delightful user experience.
-   **Direct Event Links:** Each event links directly to the source page for registration and more details.
-   **Client-Side Rendering:** Runs entirely in the browser with no backend or database required.

## Technology Stack

-   **Framework:** React (with Vite)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Icons:** Lucide React
-   **Animation:** Framer Motion
-   **Date Utility:** date-fns
-   **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a local copy of the project up and running for development purposes.

### Prerequisites

-   Node.js (v18 or later recommended)
-   Bun (`npm install -g bun`)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/climacal_boston_events.git
    cd climacal_boston_events
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running in Development

To start the local development server, run the following command:

```bash
bun run dev
```

The application will be available at `http://localhost:3000` (or the next available port).

## Project Structure

A brief overview of the key files and directories in this project:

```
/
├── src/
│   ├── components/      # Reusable UI components, including EventCard
│   ├── lib/
│   │   └── events.ts    # Static event data source
│   └── pages/
│       └── HomePage.tsx # The main and only page component
├── worker/              # Cloudflare Worker code (from template)
├── package.json         # Project dependencies and scripts
└── wrangler.jsonc       # Cloudflare deployment configuration
```

## Development

The application is a single-page application with all logic contained within the `src` directory.

-   **Event Data:** All event information is stored statically in `src/lib/events.ts`. To add, remove, or modify events, edit this file directly.
-   **Main View:** The primary user interface is built in `src/pages/HomePage.tsx`. This component is responsible for fetching, processing, and displaying the event data.
-   **Styling:** Styles are applied using Tailwind CSS utility classes directly in the JSX components.

## Deployment

This project is configured for seamless deployment to the Cloudflare global network.

### Deploy with Wrangler CLI

1.  **Authenticate with Cloudflare:**
    If this is your first time using Wrangler, you will need to log in to your Cloudflare account.
    ```bash
    bunx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script from the project root. This will build the application and deploy it to Cloudflare Pages.
    ```bash
    bun run deploy
    ```

### Deploy with Git

Alternatively, you can connect your GitHub repository to Cloudflare Pages for automatic deployments on every push to your main branch.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/climacal-boston-climate-energy-event-calendar)