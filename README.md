<div align="center">

<h1>作品集 · Daily Design .Art</h1>

<p><strong>WebGL 互动作品集网站 · 14 项课程作业与个人练习</strong></p>
<p>Explore the art of UI, one day at a time.</p>

<p>
  <a href="https://github.com/SleepZzz-H/H-sleep/actions/workflows/check.yml"><img src="https://github.com/SleepZzz-H/H-sleep/actions/workflows/check.yml/badge.svg?branch=main" alt="Website checks"></a>
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&amp;logoColor=white" alt="Node.js 20 or newer">
  <img src="https://img.shields.io/badge/Rendering-WebGL%20%2F%20GLSL-111111" alt="WebGL and GLSL rendering">
</p>

</div>

这是一个可独立克隆、构建和运行的 **WebGL 互动作品集网站**。滚动驱动的连续场景、玻璃折射、GPU 粒子、指针流体与双端同步交互构成整体体验，用来展示我的 14 项课程作业与个人练习。

## 作品列表

| # | 作品 | 内容 | 来源 |
| --- | --- | --- | --- |
| 1 | Sound Vortex（声形掌间） | TouchDesigner 声音可视化手势交互 | 可视化交互与艺术媒体 |
| 2 | Ammonite Chronicle（壳记亿年） | 菊石化石地质年代信息可视化 | 信息设计 |
| 3 | Fossil Paths（形成之径） | 化石形成过程图解叙事 | 信息设计 |
| 4 | Solar Terms（二十四节气） | 节气主题角色插画系列 | 艺术与科技 |
| 5 | Ceremony Pavilion（婚礼仪式空间） | 圆形仪式亭空间设计与渲染 | 空间建构 |
| 6 | Model Pavilion（实体模型建造） | 小比例实体亭模型制作 | 空间建造 |
| 7 | Silo Stories（栈仓织梦） | 粮仓改造信息体验设计 | 展示设计 |
| 8 | Taste of Wuhan（百味武汉） | 武汉美食数据地图应用 | 空间信息应用 |
| 9 | Blooming Code（动态花纹） | Processing 生成式花环图案 | 开源编程 |
| 10 | Street Furniture（城市家具调研） | 公交站座椅城市田野调研 | 图绘思考 |
| 11 | Machine Collage（装置场景拼贴） | Unreal Engine 超现实装置场景 | 数字场景实践 |
| 12 | Glow Cradle（硬件互动） | LED 心跳交互装置 | 物理与硬件互动 |
| 13 | Outing Bunny（郊游小兔） | 出游主题角色插画 | 插画练习 |
| 14 | Frame Studies（角色设计稿） | 角色结构→剪影→上色过程稿 | 插画练习 |

每项作品支持标签筛选、本地检索与详情展开；作品详情页可通过 `/work/sound-vortex` 这样的深链接直达。

## 快速开始

```bash
git clone https://github.com/SleepZzz-H/H-sleep.git
cd H-sleep
npm ci
npm run build
npm run dev
```

启动后访问 **[http://localhost:4199/](http://localhost:4199/)**。

- **环境要求**：Node.js 20+ 与支持 WebGL 的浏览器；画面效果受 GPU 档位影响。
- **必须用 Node 服务运行**：服务同时提供静态资源、HTTP Range、深链接、本地检索与 WebSocket 房间同步；单独托管 `public/` 会丢失检索与同步功能。
- 端口可用 `PORT=4200 npm run dev` 修改；修改内容后需重新 `npm run build`。

## 网站功能

- **六段连续场景**：Home、About、Work、TreeScene、CleanRoom、Footer，滚动驱动镜头与相邻场景转场。
- **实时光学材质**：折射、色散、流体扰动、GPU 粒子、Bloom 与光芒。
- **完整作品交互**：作品墙、标签筛选、本地关键词检索（支持中文映射）、详情展开、全屏图片与深链接。
- **双端同步**：两个浏览器加入同一房间后，滚动位置、指针与联系面板实时同步。
- **桌面与移动布局**：响应式分支与触摸交互。

## 自定义内容

| 需要修改的内容 | 编辑入口 |
| --- | --- |
| 作品名称、描述、标签、链接 | `src/content.mjs` |
| 封面图片处理与映射 | `scripts/prepare-covers.mjs` |
| 场景内 3D 文字、联系面板文案 | `scripts/build.mjs` 中的替换表 |
| 服务端检索关键词映射 | `scripts/server.mjs` |

修改后执行 `npm run build` 重新生成；生成物写入 `public/`。

## 检查

```bash
npm run build && npm run dev
# 另一个终端：
npm run check    # 模块一致性、GLSL、媒体、深链接与检索
npm test         # 完整检查（需要 npx playwright install chromium）
```

## 说明与致谢

- 渲染引擎、着色器与场景配置来自 [activetheory.net](https://activetheory.net/) 的公开发布版（来源与指纹记录见 `vendor/activetheory/SOURCE.json`），项目结构参考 [Snychng/open-active-theory](https://github.com/Snychng/open-active-theory)。
- 三维品牌模型由 Three.js 从字体轮廓挤出生成；Bodoni Moda 字体使用 SIL Open Font License（见 `src/assets/OFL.txt`）。
- 仅作个人作品展示与学习交流使用；未经许可不得将原引擎代码用于商业用途。
