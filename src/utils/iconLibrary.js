import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBluesky,
  faBootstrap,
  faCss,
  faDocker,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faItchIo,
  faJava,
  faJsSquare,
  faMicrosoft,
  faNodeJs,
  faNpm,
  faPhp,
  faPython,
  faReact,
  faSass,
  faTumblr,
  faUnity,
  faVuejs,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAtom,
  faBolt,
  faBoltLightning,
  faBrain,
  faCloud,
  faCode,
  faCogs,
  faDatabase,
  faEnvelope,
  faFlask,
  faICursor,
  faPaintBrush,
  faPaperPlane,
  faRobot,
  faRocket,
  faToolbox,
  faUser,
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
  faPaperPlane,
  faReact,
  faSass,
  faUnity,
  faUser,
  faVuejs,
  faXTwitter, // X (旧Twitter)
  faBluesky, // Bluesky
  faTumblr, // Tumblr
  faItchIo, // itch.io
  faDocker, // Docker
  faMicrosoft, // Microsoft
  faFlask, // Flask
  faCloud, // AWS
  faRobot, // chatGPT
  faRocket, // Rocket
  faBrain, // openAI
  faJava,
  faPython,
  faHtml5,
  faCss,
  faPhp,
  faBootstrap,
  faBoltLightning,
  faBolt,
  faAtom, // Atom
  faICursor, // Cursor
  faRocket
);

import { PaintBrushIcon } from '@heroicons/vue/24/solid';

// アイコンマッピング（FontAwesomeとその他ライブラリを含む）
export const techIcons = {
  // 既存のアイコンマッピング
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
  'itch.io': { type: 'fa', icon: ['fab', 'itch-io'] },
  Java: { type: 'fa', icon: ['fab', 'java'] },
  Python: { type: 'fa', icon: ['fab', 'python'] },
  TypeScript: { type: 'fa', icon: 'code' },
  HTML: { type: 'fa', icon: ['fab', 'html5'] },
  CSS: { type: 'fa', icon: ['fab', 'css'] },
  PHP: { type: 'fa', icon: ['fab', 'php'] },
  Flask: { type: 'fa', icon: 'flask' },
  FastAPI: { type: 'fa', icon: ['fas', 'bolt'] },
  Vuetify: { type: 'fa', icon: ['fab', 'vuejs'] },
  Vite: { type: 'fa', icon: 'bolt-lightning' },
  Bootstrap: { type: 'fa', icon: ['fab', 'bootstrap'] },
  Docker: { type: 'fa', icon: ['fab', 'docker'] },
  vscode: { type: 'fa', icon: ['fab', 'microsoft'] },
  cursor: { type: 'fa', icon: 'i-cursor' },
  PostgreSQL: { type: 'fa', icon: 'database' },
  Oracle: { type: 'fa', icon: 'database' },
  MySQL: { type: 'fa', icon: 'database' },
  AWS: { type: 'fa', icon: 'cloud' },
  ChatGPT: { type: 'fa', icon: 'robot' },
  openAI: { type: 'fa', icon: 'brain' },
  Phaser: { type: 'fa', icon: 'rocket' },
  Electron: { type: 'fa', icon: 'atom' },

  // デフォルトアイコン
  その他: { type: 'fa', icon: 'toolbox' },
};

// フォールバック付きアイコン取得関数
export function getTechIcon(name, defaultIcon = 'toolbox') {
  const entry = techIcons[name];
  if (!entry) return defaultIcon;

  if (!Array.isArray(entry)) return entry;

  return entry.find((icon) => icon) || defaultIcon;
}
