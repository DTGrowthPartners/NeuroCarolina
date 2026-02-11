const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SOURCE = path.join(
  __dirname,
  "..",
  "public",
  "brand",
  "ChatGPT Image 11 feb 2026, 10_23_05 a.m..png"
);
const OUT_DIR = path.join(__dirname, "..", "public");

const SIZES = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function generateFavicons() {
  if (!fs.existsSync(SOURCE)) {
    console.error("No se encontro el logo en:", SOURCE);
    process.exit(1);
  }

  console.log("Generando favicons desde:", SOURCE);

  // Generate PNG favicons directly from source
  for (const { name, size } of SIZES) {
    const output = path.join(OUT_DIR, name);
    await sharp(SOURCE)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(output);
    console.log(`  -> ${name} (${size}x${size})`);
  }

  // Generate favicon.ico (multi-size ICO using 16, 32, 48 PNG buffers)
  const icoSizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    icoSizes.map((size) =>
      sharp(SOURCE)
        .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const icoBuffer = createIco(pngBuffers, icoSizes);
  fs.writeFileSync(path.join(OUT_DIR, "favicon.ico"), icoBuffer);
  console.log("  -> favicon.ico (16, 32, 48)");

  // Generate webmanifest
  const manifest = {
    name: "NeuroCarolina Traslavina",
    short_name: "NeuroCarolina",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#5B2D8B",
    background_color: "#ffffff",
    display: "standalone",
  };
  fs.writeFileSync(
    path.join(OUT_DIR, "site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("  -> site.webmanifest");

  console.log("\nFavicons generados exitosamente!");
}

/**
 * Build a minimal ICO file from PNG buffers.
 * ICO format: header (6 bytes) + directory entries (16 bytes each) + image data
 */
function createIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let dataOffset = headerSize + dirSize;

  // ICO header
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);            // reserved
  header.writeUInt16LE(1, 2);            // type: 1 = ICO
  header.writeUInt16LE(numImages, 4);    // number of images

  const dirEntries = [];
  const imageDataParts = [];

  for (let i = 0; i < numImages; i++) {
    const png = pngBuffers[i];
    const size = sizes[i];

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size < 256 ? size : 0, 0);   // width
    entry.writeUInt8(size < 256 ? size : 0, 1);   // height
    entry.writeUInt8(0, 2);                         // color palette
    entry.writeUInt8(0, 3);                         // reserved
    entry.writeUInt16LE(1, 4);                      // color planes
    entry.writeUInt16LE(32, 6);                     // bits per pixel
    entry.writeUInt32LE(png.length, 8);             // image size
    entry.writeUInt32LE(dataOffset, 12);            // offset

    dirEntries.push(entry);
    imageDataParts.push(png);
    dataOffset += png.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageDataParts]);
}

generateFavicons().catch((err) => {
  console.error("Error generando favicons:", err);
  process.exit(1);
});
