export const github = 'https://github.com/Snychng/daily-design';
export const brand = 'Daily Design .Art';
export const slogan = 'Explore the art of UI, one day at a time.';

// 2024-2026 学年课程作业与个人练习，均来自结课档案实物成果，不虚构客户或奖项。
export const studies = [
  ['Sound Vortex', 'sound-vortex', '8fce6a', 'Sound, Motion, Realtime', 'Gesture-controlled music visualization. Hand motion and rhythm drive a particle vortex in TouchDesigner, where the swirl breathes with the beat while gestures steer its form in real time.', 'Visual Interaction & Media / Coursework', '2026-04-29T00:00:00.000Z'],
  ['Ammonite Chronicle', 'ammonite-chronicle', 'd1b071', 'Data, Infographic, Editorial', 'A data story of ammonite fossils across geological eras. A radial timeline arranges specimens, diversity charts and strata into one dark, gilded composition.', 'Information Design / Coursework', '2026-09-27T00:00:00.000Z'],
  ['Fossil Paths', 'fossil-paths', 'c2a15e', 'Data, Diagram, Storytelling', 'The making of a fossil, drawn as a winding path. Each stage from death and burial to mineralization and exposure becomes a station along the line, ending with the odds of survival.', 'Information Design / Coursework', '2026-09-27T00:00:00.000Z'],
  ['Solar Terms', 'solar-terms', 'd8d2b8', 'Illustration, Culture, Series', 'Twenty-four solar terms reimagined as character illustrations. Palettes, materials and seasonal motifs keep the series coherent while each season changes its mood.', 'Art & Technology / Coursework', '2026-06-17T00:00:00.000Z'],
  ['Ceremony Pavilion', 'ceremony-pavilion', 'a9c3dc', 'Space, Architecture, Light', 'A round ritual pavilion for a wedding ceremony space. A thin white roof floats above paired columns, keeping the interior open to the sky, the water and the seats below.', 'Spatial Construction / Coursework', '2025-10-02T00:00:00.000Z'],
  ['Model Pavilion', 'model-pavilion', 'd3b08c', 'Space, Model, Craft', 'A hand-built octagonal pavilion model at small scale. Bamboo sticks, paper and painted ground test the structure and its proportions before the digital version is finalized.', 'Spatial Building / Coursework', '2025-12-18T00:00:00.000Z'],
  ['Silo Stories', 'silo-stories', 'e6c53a', 'Exhibition, Experience, Renovation', 'An information experience for a repurposed grain warehouse. Wayfinding, layered narratives and a mini-program guide visitors through the silo and its changing uses.', 'Exhibition Design / Coursework', '2026-11-01T00:00:00.000Z'],
  ['Taste of Wuhan', 'taste-of-wuhan', 'd99c6a', 'Map, Data, Food', 'A food map of Wuhan built from collected restaurant data. An interactive web map pairs geocoded spots with a 3D city view and ranks the breakfast icons of the river city.', 'Spatial Information Application / Coursework', '2026-04-10T00:00:00.000Z'],
  ['Blooming Code', 'blooming-code', 'e0b7b2', 'Generative, Motion, Code', 'Generative flower rings drawn in Processing. Noise and trigonometry pulse each ring so the whole garden drifts between order and randomness.', 'Creative Coding / Coursework', '2026-03-22T00:00:00.000Z'],
  ['Street Furniture', 'street-furniture', 'a9bda1', 'Research, Urban, Observation', 'A field study of bus stop benches across cities. Photos and sketches compare climate, material and policy, tracing how one public seat reflects each city.', 'Drawing & Observation / Coursework', '2025-11-25T00:00:00.000Z'],
  ['Machine Collage', 'machine-collage', '9fb0bd', '3D, Scene, Unreal', 'A surreal machine assembled in Unreal Engine. Floors, cranes and towers interlock at impossible angles, testing scale, silhouette and light in a single scene.', 'Digital Scene / Coursework', '2025-11-19T00:00:00.000Z'],
  ['Glow Cradle', 'glow-cradle', 'e2a1a8', 'Hardware, Interaction, Physical', 'A physical computing piece. A translucent figure breathes with a red heartbeat, its LED and sensors responding to serial input from the connected control program.', 'Physical Computing / Coursework', '2026-11-16T00:00:00.000Z'],
  ['Outing Bunny', 'outing-bunny', 'cfd06a', 'Illustration, Character, Color', 'A travel-day character illustration. A rabbit-eared hiker poses with tanghulu on a mountain meadow, with flat shapes and a soft palette keeping the scene light.', 'Illustration / Personal Work', '2025-11-29T00:00:00.000Z'],
  ['Frame Studies', 'frame-studies', 'e0b070', 'Character, Design, Process', 'A character design sheet moving from skeleton to silhouette to color. Stages of the same pose show how structure supports the energy of the final drawing.', 'Illustration / Personal Work', '2025-11-15T00:00:00.000Z']
].map(([name, cover, uiColor, tags, description, clientName, completionDate], index) => ({
  id: `daily-study-${index + 1}`,
  name, slug: name.toLowerCase().replaceAll(' ', '-'), description,
  clientName, completionDate, uiColor, tags,
  priority: index + 1, projectURL: github,
  projectLogo: { url: '/assets/daily/wordmark.png', width: 400, height: 200 },
  // 原 WorkItem 以媒体 URL 判断当前卡片；每项保持唯一 URL，避免同时激活复用封面的卡片。
  video: { url: `/assets/daily/study-${name.toLowerCase().replaceAll(' ', '-')}.jpg`, thumbnail: `/assets/daily/cover-${cover}.jpg` }
}));
