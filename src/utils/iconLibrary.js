import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBluesky,
  faFigma,
  faGitAlt,
  faGithub,
  faItchIo,
  faJsSquare,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faTumblr,
  faUnity,
  faVuejs,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faCogs,
  faDatabase,
  faEnvelope,
  faPaintBrush,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCode,
  faCogs,
  faDatabase,
  faPaintBrush,
  faToolbox,
  faEnvelope,
  faFigma,
  faGitAlt,
  faGithub,
  faJsSquare,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
  faUnity,
  faVuejs,
  faXTwitter, // X (旧Twitter)
  faBluesky, // Bluesky
  faTumblr, // Tumblr
  faItchIo // itch.io
);

import { PaintBrushIcon } from '@heroicons/vue/24/solid';

// アイコンマッピング（FontAwesomeとその他ライブラリを含む）
export const techIcons = {
  'C#': { type: 'fa', icon: 'code' },
  'C++': { type: 'fa', icon: 'code' },
  Unity: { type: 'fa', icon: ['fab', 'unity'] },
  'Vue.js': { type: 'fa', icon: ['fab', 'vuejs'] },
  React: { type: 'fa', icon: ['fab', 'react'] },
  'Node.js': { type: 'fa', icon: ['fab', 'node-js'] },
  JavaScript: { type: 'fa', icon: ['fab', 'js-square'] },
  Sass: { type: 'fa', icon: ['fab', 'sass'] },
  Git: { type: 'fa', icon: ['fab', 'git-alt'] },
  GitHub: { type: 'fa', icon: ['fab', 'github'] },
  NPM: { type: 'fa', icon: ['fab', 'npm'] },
  Firebase: { type: 'fa', icon: 'database' },
  Figma: { type: 'fa', icon: ['fab', 'figma'] },
  Photoshop: { type: 'hero', icon: PaintBrushIcon },
  Illustrator: { type: 'hero', icon: PaintBrushIcon },
  X: { type: 'fa', icon: ['fab', 'x-twitter'] },
  Bluesky: { type: 'fa', icon: ['fab', 'bluesky'] },
  Tumblr: { type: 'fa', icon: ['fab', 'tumblr'] },
  'itch.io': { type: 'fa', icon: ['fab', 'itch-io'] }, // itch.io を追加
  その他: { type: 'fa', icon: 'toolbox' },
};

// フォールバック付きアイコン取得関数
export function getTechIcon(name, defaultIcon = 'toolbox') {
  const entry = techIcons[name];
  if (!entry) return defaultIcon;

  if (!Array.isArray(entry)) return entry;

  return entry.find((icon) => icon) || defaultIcon;
}
