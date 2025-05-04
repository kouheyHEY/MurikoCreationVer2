<template>
  <div class="pt-2 pb-5 text-center">
    <h1 class="text-primary pb-3 title">About me</h1>
    <span>ABOUTCONTENT: {{ aboutContent }}</span>
    <div v-if="aboutContent">
      <h4 class="mt-4">ステータス</h4>
      <ul>
        <li v-for="(item, index) in aboutContent.statusItems" :key="index">
          <strong>{{ item.label }}:</strong>
          <
        </li>
      </ul>

      <h4 class="mt-4">スキル</h4>
      <ul>
        <li v-for="(skill, index) in aboutContent.skills" :key="index">
          <strong>{{ skill.label }}:</strong> {{ skill.contents.join(', ') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchJson } from '@/utils/fetchJson';

export default {
  data() {
    return {
      aboutContent: null, // JSONデータを格納
    };
  },
  mounted() {
    fetchJson('/data/aboutContent.json')
      .then((data) => {
        this.aboutContent = data;
        console.log(this.aboutContent);
      })
      .catch((error) => console.error('Failed to load about content:', error));

    console.log('AboutView mounted');
    console.log(this.aboutContent); // ルートパラメータをコンソールに表示
  },
};
</script>
