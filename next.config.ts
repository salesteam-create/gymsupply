import type { NextConfig } from "next";

/*
 * The site is deployed to GitHub Pages as a static export. Pages serves a
 * project site from /<repo>, so asset URLs need that prefix in CI while local
 * dev and local builds stay at the root. GITHUB_REPOSITORY is set by Actions.
 */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.GITHUB_PAGES === "true" && repository ? `/${repository}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
