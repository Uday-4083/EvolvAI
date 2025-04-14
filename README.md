# Full Stack AI Career Coach

A comprehensive career development platform built with Next.js, featuring AI-powered resume building, cover letter generation, and mock interviews.

**LIVE LINK** : https://evolv-ai.vercel.app/

## Tech Stack

- **Frontend**: Next.js 15, React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Database**: Neon DB (Postgres)
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI (Gemini)
- **Background Jobs**: Inngest
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS with animations

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Neon DB account for Postgres database
- A Clerk account for authentication
- A Google Cloud account for Gemini API access

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Uday-4083/EvolvAI>
   cd ai-career-coach-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=your_neon_db_connection_string
   
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

6. **For Inngest development server**
   ```bash
   npx inngest dev -u http://localhost:3000/api/inngest
   ```

## Features

- 🔐 Secure authentication with Clerk
- 📝 AI-powered resume builder
- ✉️ Smart cover letter generator
- 🎯 Mock interview simulations
- 📊 Performance tracking and analytics
- 🎨 Modern and responsive UI with Shadcn
- 🌙 Dark mode support

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
- `/lib` - Utility functions and shared logic
- `/prisma` - Database schema and migrations
- `/public` - Static assets
- `/actions` - Server actions for data operations
- `/api` - API routes including Inngest webhooks

## Development

### Running Tests
```bash
npm run test
# or
yarn test
```

### Linting
```bash
npm run lint
# or
yarn lint
```

### Building for Production
```bash
npm run build
# or
yarn build
```

## Production Deployment

1. Set up your production environment variables
2. Deploy to your preferred hosting platform (Vercel recommended)
3. Set up your database using the provided Prisma schema
4. Configure Inngest for production environment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
