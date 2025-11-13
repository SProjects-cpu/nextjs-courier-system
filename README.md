# Next.js Courier Management System

A modern, full-stack courier management system built with Next.js 14+, Supabase, and GraphQL. Features real-time package tracking, role-based access control, and seamless synchronization between client and admin interfaces.

## 🚀 Features

### Client Portal
- 📦 **Order Placement**: Easy-to-use form for creating shipping orders
- 🔍 **Real-time Tracking**: Track packages with order ID or tracking number
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 👤 **User Profiles**: Manage personal information and view order history
- 📧 **Contact Form**: Submit inquiries and support requests
- 🛍️ **Product Catalog**: Browse available shipping services

### Admin Portal
- 📊 **Dashboard**: Comprehensive statistics and metrics
- 🚚 **Shipment Management**: View and manage all shipments
- ✏️ **Status Updates**: Update order status with real-time sync
- 📋 **Order Management**: Full CRUD operations for orders
- 📈 **Reports**: Generate and export shipment reports
- 👥 **User Management**: Manage customer and employee accounts

### Technical Features
- ⚡ **Real-time Updates**: Supabase Realtime for instant synchronization
- 🔐 **Secure Authentication**: Supabase Auth with role-based access
- 🎨 **Modern UI**: Tailwind CSS with shadcn/ui components
- 📝 **Type Safety**: End-to-end TypeScript with generated types
- 🔄 **GraphQL API**: Type-safe API layer over Supabase
- 🚀 **CI/CD**: Automated deployment with GitHub Actions
- 📱 **PWA Ready**: Progressive Web App capabilities

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Realtime, Storage)
- **API**: GraphQL with graphql-yoga
- **State Management**: React Context API + Custom Hooks
- **Form Handling**: React Hook Form + Zod validation
- **Deployment**: Vercel (frontend) + Supabase Cloud (backend)
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Supabase account
- Vercel account (for deployment)
- GitHub account

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/SProjects-cpu/nextjs-courier-system.git
cd nextjs-courier-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://odybygsxextczqwuwdtu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Create Admin User

1. Sign up through the app: http://localhost:3000/signup
2. Get your user ID from Supabase dashboard
3. Run in Supabase SQL Editor:
```sql
UPDATE public.profiles 
SET user_type = 'ADMIN' 
WHERE id = 'your-user-id';
```

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Deploy to production
- [Project Status](./PROJECT_STATUS.md) - Current implementation status
- [Supabase Setup](./SUPABASE_SETUP.md) - Database configuration
- [Vercel Setup](./VERCEL_SETUP.md) - Deployment configuration

## 🏗️ Project Structure

```
nextjs-courier-system/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth layout group
│   │   ├── (client)/          # Client portal
│   │   ├── (admin)/           # Admin portal
│   │   └── api/               # API routes
│   ├── components/            # React components
│   ├── lib/                   # Utilities
│   ├── types/                 # TypeScript types
│   ├── hooks/                 # Custom hooks
│   └── graphql/               # GraphQL schema & resolvers
├── supabase/
│   ├── migrations/            # Database migrations
│   ├── config.toml            # Supabase config
│   └── seed.sql               # Seed data
└── .github/
    └── workflows/             # CI/CD workflows
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript compiler

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:ci          # Run tests in CI mode
```

## 🚀 Deployment

The project is configured for automatic deployment:

1. Push to `main` branch → Production deployment
2. Create Pull Request → Preview deployment
3. GitHub Actions → Automated testing

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for details.

## 🔐 User Roles

- **Customer**: Place orders, track packages, manage profile
- **Employee**: View all orders, update shipment status
- **Permitted Employee**: Limited admin access
- **Admin**: Full system access, manage users, view reports

## 📊 Database Schema

Key tables:
- `profiles` - User profiles with role information
- `orders` - Shipping orders
- `order_updates` - Status updates for orders
- `shippings` - Shipping records with tracking
- `products` - Available shipping products
- `contacts` - Customer inquiries
- `pending_orders` - Orders awaiting processing

## 🔄 Real-time Features

- Live order tracking updates
- Real-time admin dashboard statistics
- Instant shipment status changes
- Live notification system

## 🛡️ Security

- Row Level Security (RLS) policies on all tables
- Role-based access control (RBAC)
- Secure authentication with Supabase Auth
- API route protection with middleware
- Input validation with Zod schemas
- XSS and SQL injection prevention

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- **Shivam** - [SProjects-cpu](https://github.com/SProjects-cpu)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- shadcn/ui for the beautiful components
- Vercel for hosting and deployment

## 📞 Support

For support, open an issue on GitHub.

---

Built with ❤️ using Next.js and Supabase