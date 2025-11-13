# Vercel Deployment Setup Guide

This guide walks you through setting up the Next.js Courier System on Vercel with automatic deployments from GitHub.

## Prerequisites

- GitHub repository: `SProjects-cpu/nextjs-courier-system`
- Vercel account (sign up at https://vercel.com)
- Supabase project (see SUPABASE_SETUP.md)

## Step 1: Import Project to Vercel

### Option A: Via Vercel Dashboard (Recommended for first-time setup)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub account and authorize Vercel
4. Choose the `nextjs-courier-system` repository
5. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Deploy
vercel --prod
```

## Step 2: Configure Environment Variables

Add these environment variables in Vercel Dashboard:
**Settings → Environment Variables**

### Required Variables

#### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

#### GraphQL Configuration
```
GRAPHQL_ENDPOINT=/api/graphql
```

#### Optional: Analytics & Monitoring
```
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
SENTRY_DSN=your-sentry-dsn
```

### Environment Scopes

- **Production**: Used for main branch deployments
- **Preview**: Used for pull request deployments
- **Development**: Used for local development

Set all variables for **Production** and **Preview** environments.

## Step 3: Configure Deployment Settings

### Build & Development Settings

In Vercel Dashboard → Settings → General:

- **Framework Preset**: Next.js
- **Node.js Version**: 20.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Git Integration

In Vercel Dashboard → Settings → Git:

- **Production Branch**: `main`
- **Preview Branches**: Enable for all branches
- **Automatic Deployments**: Enabled
- **Deploy Hooks**: (Optional) Create webhook for manual triggers

### Domain Configuration

In Vercel Dashboard → Settings → Domains:

1. Add your custom domain (e.g., `courier.yourdomain.com`)
2. Configure DNS records as instructed
3. Enable HTTPS (automatic with Vercel)
4. Set up redirects if needed

## Step 4: Setup Preview Deployments

Preview deployments are automatically created for pull requests.

### Configuration

In Vercel Dashboard → Settings → Git:

- ✅ Enable "Automatic Preview Deployments"
- ✅ Enable "Comments on Pull Requests"
- ✅ Enable "Deployment Protection" (optional, for private previews)

### Preview URLs

Each PR gets a unique URL:
```
https://nextjs-courier-system-git-[branch]-[team].vercel.app
```

## Step 5: Configure GitHub Actions Integration

### Get Vercel Tokens

1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token with name "GitHub Actions"
3. Copy the token

### Get Project IDs

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Link project and get IDs
vercel link

# View project settings
cat .vercel/project.json
```

This will show:
```json
{
  "orgId": "team_xxx",
  "projectId": "prj_xxx"
}
```

### Add Secrets to GitHub

Go to GitHub Repository → Settings → Secrets and variables → Actions

Add these secrets:
- `VERCEL_TOKEN`: Your Vercel token
- `VERCEL_ORG_ID`: Your organization/team ID
- `VERCEL_PROJECT_ID`: Your project ID

## Step 6: Test Deployment

### Test Preview Deployment

1. Create a new branch: `git checkout -b test-deployment`
2. Make a small change
3. Push and create a PR
4. Check GitHub Actions for deployment status
5. Verify preview URL in PR comments

### Test Production Deployment

1. Merge PR to `main` branch
2. Check GitHub Actions for production deployment
3. Verify production URL
4. Test all features on production

## Step 7: Monitor Deployments

### Vercel Dashboard

Monitor deployments at:
https://vercel.com/[team]/nextjs-courier-system

View:
- Deployment status
- Build logs
- Runtime logs
- Analytics
- Performance metrics

### GitHub Actions

Monitor CI/CD pipeline at:
https://github.com/SProjects-cpu/nextjs-courier-system/actions

## Deployment Commands

### Manual Deployment

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
vercel --branch=develop
```

### Rollback Deployment

```bash
# List deployments
vercel ls

# Promote a previous deployment
vercel promote [deployment-url]
```

## Troubleshooting

### Build Failures

1. Check build logs in Vercel Dashboard
2. Verify environment variables are set correctly
3. Test build locally: `npm run build`
4. Check Node.js version compatibility

### Environment Variable Issues

1. Ensure all required variables are set
2. Check variable names (case-sensitive)
3. Verify Supabase URL and keys are correct
4. Redeploy after adding/updating variables

### Preview Deployment Not Working

1. Check GitHub Actions logs
2. Verify Vercel token is valid
3. Ensure project is linked correctly
4. Check branch protection rules

### Performance Issues

1. Enable Vercel Analytics
2. Check bundle size: `npm run analyze`
3. Optimize images with Next.js Image component
4. Enable caching strategies
5. Use ISR for static pages

## Best Practices

1. **Environment Variables**: Never commit secrets to Git
2. **Preview Deployments**: Test all changes in preview before merging
3. **Production Deployments**: Only deploy from `main` branch
4. **Monitoring**: Set up alerts for deployment failures
5. **Rollbacks**: Keep previous deployments for quick rollback
6. **Performance**: Monitor Core Web Vitals in Vercel Analytics
7. **Security**: Enable Deployment Protection for sensitive projects

## Next Steps

1. ✅ Complete Supabase setup (see SUPABASE_SETUP.md)
2. ✅ Configure database migrations
3. ✅ Test end-to-end deployment flow
4. ✅ Set up monitoring and alerts
5. ✅ Configure custom domain
6. ✅ Enable Vercel Analytics

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [GitHub Actions Integration](https://vercel.com/docs/concepts/git/vercel-for-github)
