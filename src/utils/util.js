import { marked } from 'marked';

/**
 * ランダムな回転角度を生成
 * @returns {number} -5 から 5 のランダムな値
 */
export function getRandomRotation() {
  return Math.random() * 10 - 5;
}

/**
 * マークダウンを HTML に変換
 * @param {string} content - マークダウン形式の文字列
 * @returns {string} HTML 形式の文字列
 */
export function renderMarkdown(content) {
  return marked(content);
}
