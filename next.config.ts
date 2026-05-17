import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname)
  },
  output: 'export',
  basePath: '/animation-next-app',
  assetPrefix: '/animation-next-app/'
}

export default nextConfig;