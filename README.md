# Artist Dashboard

An analytics and management dashboard for artists to track releases, engagement, and revenue across multiple platforms. This project is built with modern web technologies to ensure high performance, accessibility, and a premium user experience.

## You can try it out at:
https://artists-dashboard-wheat.vercel.app/

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Charts**: [Recharts](https://recharts.org/en-US/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Features

- **Overview Dashboard**: High-level summary of top releases, recent activity, and platform performance.
- **Releases Tracking**: Detailed view of music releases with streaming stats and growth metrics.
- **Analytics**: Revenue tracking, listener demographics, and platform breakdown.
- **Engagement**: Social media tracking for Instagram, TikTok, YouTube, and more.
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (including shadcn/ui).
- `src/features`: Feature-specific logic and components (Analytics, Engagement, Releases).
- `src/lib`: Utility functions and configuration.
- `src/styles`: Global styles and Tailwind configuration.
