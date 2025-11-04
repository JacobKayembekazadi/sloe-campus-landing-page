# Public Assets

This folder contains static assets that are served directly by Vite.

## Directory Structure

- `images/` - Store image files (PNG, JPG, SVG, etc.)
- `videos/` - Store video files (MP4, WEBM, etc.)

## Usage

Files in the `public` folder are served at the root path. For example:

- `public/images/logo.png` → Access at `/images/logo.png`
- `public/videos/demo.mp4` → Access at `/videos/demo.mp4`

### In Your React Components

```jsx
// Image example
<img src="/images/logo.png" alt="Logo" />

// Video example
<video src="/videos/demo.mp4" controls />

// Background image in Tailwind
<div className="bg-[url('/images/hero-bg.jpg')]">
```

### Important Notes

- Files in `public` are **not** processed by Vite
- Use absolute paths starting with `/` to reference these files
- For imported assets (processed by Vite), import them directly in your components instead

