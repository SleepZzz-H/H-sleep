// 将外部作品归档处理为 16:9 网站封面：横图居中裁切，竖图/方图装配到暗色底面。
// 用法：node scripts/prepare-covers.mjs <作品归档根目录>
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const archive = process.argv[2];
if (!archive) { console.error('用法：node scripts/prepare-covers.mjs <作品归档目录>'); process.exit(1); }
const outDir = path.join(root, 'src/assets/covers');
const WIDTH = 2048, HEIGHT = 1152, INNER = 1020;
const DARK = { r: 17, g: 18, b: 22 };

// [归档相对路径, 封面键名, 模式]；模式 crop=裁切充满画面，mount=居中装配暗底。
const works = [
  ['可视化交互与艺术媒体/TDMovieOut.0.png', 'sound-vortex', 'crop'],
  ['展板1.png', 'ammonite-chronicle', 'mount'],
  ['展板2.png', 'fossil-paths', 'mount'],
  ['24.png', 'solar-terms', 'mount'],
  ['空间建构/Enscape_2025-10-02-19-16-41.png', 'ceremony-pavilion', 'crop'],
  ['空间建造/微信图片_20251218153718_259_245.jpg', 'model-pavilion', 'crop'],
  ['微信图片_20261101092158_864_96.png', 'silo-stories', 'mount'],
  ['空间信息应用/展板.jpg', 'taste-of-wuhan', 'mount'],
  ['艺术与科技导论结课作业/结课代码/最终结课海报/HZLposter_pde/poster_20260322_165942.png', 'blooming-code', 'mount'],
  ['图绘思考2024001113黄子林/2024001113-黄子林-调研版.png', 'street-furniture', 'mount'],
  ['图绘思考2024001113黄子林/HighresScreenshot00000.png', 'machine-collage', 'crop'],
  ['物理与硬件互动基础作业/a0e95216f6ee51b576f752b1429ab790.jpg', 'glow-cradle', 'crop'],
  ['原画/郊游小兔z.png', 'outing-bunny', 'mount'],
  ['原画/速涂20251115.png', 'frame-studies', 'mount']
];

await fs.mkdir(outDir, { recursive: true });
for (const [relative, key, mode] of works) {
  const input = path.join(archive, relative);
  const stat = await fs.stat(input).catch(() => null);
  if (!stat?.isFile()) throw new Error(`归档缺少文件：${relative}`);
  if (mode === 'crop') {
    await sharp(input).resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, `cover-${key}.jpg`));
  } else {
    const inner = await sharp(input).resize({ height: INNER }).png().toBuffer();
    const { width } = await sharp(inner).metadata();
    await sharp({ create: { width: WIDTH, height: HEIGHT, channels: 3, background: DARK } })
      .composite([{ input: inner, left: Math.round((WIDTH - width) / 2), top: Math.round((HEIGHT - INNER) / 2) }])
      .jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, `cover-${key}.jpg`));
  }
  console.log(`cover-${key}.jpg  ${mode}`);
}
