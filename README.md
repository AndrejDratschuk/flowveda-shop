This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Create `.env.local` and add the Meta Pixel/Dataset ID:

```bash
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id_here
META_PIXEL_ID=your_meta_pixel_id_here
META_CONVERSIONS_API_ACCESS_TOKEN=your_conversions_api_access_token_here
META_GRAPH_API_VERSION=v25.0
META_EVENT_ALLOWED_HOSTS=flowveda.co,www.flowveda.co
NEXT_PUBLIC_POSTHOG_TOKEN=your_posthog_project_token_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

PostHog is initialized from `instrumentation-client.ts`. Set the PostHog token and host in
your production environment as well as `.env.local`; omit the token to disable PostHog locally.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
