# Branch Protection Configuration

This document describes the branch protection rules that should be configured for the repository.

## Main Branch Protection

Navigate to: Settings → Branches → Add branch protection rule

### Branch name pattern: `main`

**Required settings:**
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners (if CODEOWNERS file exists)
- ✅ Require status checks to pass before merging
  - ✅ Require branches to be up to date before merging
  - Required status checks:
    - `Lint Code`
    - `Run Tests`
- ✅ Require conversation resolution before merging
- ✅ Require signed commits (recommended)
- ✅ Include administrators
- ✅ Restrict who can push to matching branches (optional)
- ✅ Allow force pushes: Disabled
- ✅ Allow deletions: Disabled

## Develop Branch Protection

### Branch name pattern: `develop`

**Required settings:**
- ✅ Require a pull request before merging
  - ✅ Require approvals: 1
- ✅ Require status checks to pass before merging
  - Required status checks:
    - `Lint Code`
    - `Run Tests`
- ✅ Require conversation resolution before merging
- ✅ Allow force pushes: Disabled
- ✅ Allow deletions: Disabled

## Required Repository Secrets

Configure these secrets in: Settings → Secrets and variables → Actions

### Vercel Secrets
- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### Supabase Secrets
- `SUPABASE_ACCESS_TOKEN`: Supabase access token for CLI operations
- `SUPABASE_PROJECT_REF`: Supabase project reference ID
- `SUPABASE_DB_PASSWORD`: Database password for migrations
- `NEXT_PUBLIC_SUPABASE_URL`: Public Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Public Supabase anonymous key

## How to Configure

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Navigate to "Branches" in the left sidebar
4. Click "Add branch protection rule"
5. Follow the settings above for each branch
6. Save the protection rule

## Notes

- Branch protection rules prevent direct pushes to protected branches
- All changes must go through pull requests
- CI/CD checks must pass before merging
- At least one approval is required for main branch
- These rules help maintain code quality and prevent accidental deployments
