// Custom next/image loader for static export on GitHub Pages.
//
// With `output: export`, next/image does NOT automatically prepend the
// configured `basePath` to <img src> URLs, so images 404 on a project Pages
// site served from /<repo>. This loader prepends the basePath (empty locally
// and on custom domains) so images resolve correctly everywhere.

export default function imageLoader({ src }: { src: string; width: number; quality?: number }): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (/^https?:\/\//.test(src)) return src; // leave absolute/remote URLs untouched
  return `${basePath}${src.startsWith("/") ? src : `/${src}`}`;
}
