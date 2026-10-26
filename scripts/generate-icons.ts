/************************
 * Made by [MR Ferry™]  *
 * on October 2026      *
 ************************/

import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const source = "src/images/icon.png";

const icons = [
  { size: 32, path: "public/favicon-32x32.png" },
  { size: 192, path: "public/favicons/android-chrome-192x192.png" },
  { size: 512, path: "public/favicons/android-chrome-512x512.png" },
];

await mkdir("public/favicons", { recursive: true });

for (const { size, path } of icons) {
  await sharp(source).resize(size, size).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(path);
  console.log(`${path} (${size}x${size})`);
}
