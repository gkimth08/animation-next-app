import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // If deploying to GitHub Pages under a repo (e.g. https://<user>.github.io/<repo>/)
  // set `basePath` and `assetPrefix` to the repo name. Update the value below
  // if your repository name differs from `animation-next-app`.
  basePath: '/animation-next-app',
  assetPrefix: '/animation-next-app',
  // Ensure exported routes are emitted as directories (index.html in folders)
  trailingSlash: true,
}

export default nextConfig;