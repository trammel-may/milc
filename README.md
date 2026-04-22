# milc

Satirical React + Vite product site for **milc**.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages setup

This repo is configured to deploy automatically with GitHub Actions.

### 1. Enable Pages in GitHub

In your repo settings:

- Go to `Settings > Pages`
- Under **Build and deployment**, set **Source** to `GitHub Actions`

### 2. Push to `main`

Every push to `main` triggers `.github/workflows/deploy-pages.yml` and publishes the `dist` output.

### 3. Base path behavior

The workflow automatically sets `BASE_PATH`:

- `"/"` for user/org pages repos like `username.github.io`
- `"/<repo-name>/"` for project pages repos like `username.github.io/milc`

If you need a manual one-off build for a custom base path:

```bash
BASE_PATH=/milc/ npm run build
```
