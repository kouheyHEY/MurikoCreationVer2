/**
 * 指定されたパスの JSON ファイルをフェッチして内容を返却する関数
 * @param {string} path - JSON ファイルのパス
 * @returns {Promise<Object>} - JSON データを含む Promise
 */
export async function fetchJson(path) {
  try {
    const response = await fetch(import.meta.env.VITE_BASE_URL + path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch JSON from ${path}:`, error);
    throw error;
  }
}
