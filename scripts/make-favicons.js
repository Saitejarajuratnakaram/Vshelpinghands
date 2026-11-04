const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const toIco = require('to-ico');

const srcPath = path.join(__dirname, '..', 'public', 'charitylogo1.png');
const png = PNG.sync.read(fs.readFileSync(srcPath));
const { width, height, data } = png;

function isInk(i) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];
  if (a < 20) return false;
  return r + g + b > 40;
}

let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4;
    if (isInk(i)) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
}

const pad = Math.round(Math.max(maxX - minX, maxY - minY) * 0.08);
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(width - 1, maxX + pad);
maxY = Math.min(height - 1, maxY + pad);
const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
const side = Math.max(cropW, cropH);

function sample(sx, sy) {
  const x = Math.max(0, Math.min(width - 1, Math.round(sx)));
  const y = Math.max(0, Math.min(height - 1, Math.round(sy)));
  const i = (y * width + x) * 4;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

function isLogo(sx, sy) {
  const [r, g, b, a] = sample(sx, sy);
  return a >= 20 && r + g + b > 40;
}

function makeSquarePng(size) {
  const out = new PNG({ width: size, height: size });
  const ox = Math.floor((side - cropW) / 2);
  const oy = Math.floor((side - cropH) / 2);
  const thicken = size <= 48 ? 0.6 : 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const o = (y * size + x) * 4;
      out.data[o] = 41;
      out.data[o + 1] = 57;
      out.data[o + 2] = 57;
      out.data[o + 3] = 255;
      const sx = minX + (x * side) / size - ox;
      const sy = minY + (y * side) / size - oy;
      let hit = isLogo(sx, sy);
      if (!hit && thicken) {
        hit = isLogo(sx + thicken, sy) || isLogo(sx - thicken, sy) || isLogo(sx, sy + thicken) || isLogo(sx, sy - thicken);
      }
      if (hit) {
        out.data[o] = 255;
        out.data[o + 1] = 255;
        out.data[o + 2] = 255;
      }
    }
  }
  return PNG.sync.write(out);
}

const outDir = path.join(__dirname, '..', 'public');
const files = {
  'favicon-48.png': 48,
  'favicon-96.png': 96,
  'favicon-192.png': 192,
  'apple-touch-icon.png': 180,
  'logo192.png': 192,
  'logo512.png': 512,
};
for (const [name, size] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, name), makeSquarePng(size));
}

(async () => {
  const ico = await toIco([makeSquarePng(16), makeSquarePng(32), makeSquarePng(48)]);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico);
  console.log('crop', { minX, minY, maxX, maxY, cropW, cropH, src: `${width}x${height}` });
  console.log('wrote favicons');
})();
