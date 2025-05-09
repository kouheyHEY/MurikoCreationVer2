<template>
  <div v-if="dataReady" class="about-view pt-2">
    <h1 class="text-primary pb-3 title">About me</h1>
    <div v-if="aboutContent">
      <HorizontalRule :opacity="0.3" borderstyle="dotted" />
      <section class="status-section my-2 ms-2 py-1">
        <ul class="p-0 m-0">
          <li v-for="(item, index) in aboutContent.statusItems" :key="index">
            <div class="row pb-2">
              <div class="col col-sm-5 col-md-4 col-lg-3">
                <strong class="status-label">{{ item.label }}</strong>
              </div>
              <div class="col col-sm-7 col-md-8 col-xl-9">
                {{ item.content.join(' / ') }}
              </div>
            </div>
          </li>
        </ul>
      </section>
      <HorizontalRule :opacity="0.3" borderstyle="dotted" />
      <section class="about-section my-2 ms-2 py-1">
        <strong class="status-label d-block mb-3">{{
          aboutContent.explanation.label
        }}</strong>
        <div
          v-html="renderMarkdown(aboutContent.explanation.content)"
          class="ps-2"
        ></div>
      </section>
      <HorizontalRule :opacity="0.3" borderstyle="dotted" />
      <section class="skills-section my-2 ms-2 py-1">
        <ul class="p-0 m-0">
          <li v-for="(skill, index) in aboutContent.skills" :key="index">
            <div class="row pb-2">
              <div class="col col-sm-5 col-md-4 col-lg-3">
                <strong class="status-label">{{ skill.label }}</strong>
              </div>
              <div class="col col-sm-7 col-md-8 col-xl-9">
                {{ skill.itemNamesJoin }}
              </div>
            </div>
            <!-- <strong class="skill-label">
              <IconAndName
                :icon="skill.labelIcon"
                :name="skill.label"
              ></IconAndName>
            </strong>
            <TechList :items="skill.items" :isDispIcon="false" class="m-0" />
            <HorizontalRule
              v-if="index < aboutContent.skills.length - 1"
              :opacity="0.3"
              borderstyle="dotted"
            /> -->
          </li>
        </ul>
      </section>
    </div>
  </div>
  <LoadingSpinner v-else />
</template>

<script>
import HorizontalRule from '@/components/common/HorizontalRule.vue';
import IconAndName from '@/components/common/IconAndName.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import TechList from '@/components/TechList.vue';
import { fetchJson } from '@/utils/fetchJson';
import { getTechIcon } from '@/utils/iconLibrary';
import { renderMarkdown } from '@/utils/util.js';

export default {
  components: {
    HorizontalRule,
    IconAndName,
    TechList,
    LoadingSpinner,
  },
  data() {
    return {
      aboutContent: null, // JSONデータを格納
      dataReady: false, // データが読み込まれたかどうかのフラグ
    };
  },
  mounted() {
    fetchJson('/data/aboutContent.json')
      .then((data) => {
        this.aboutContent = {
          ...data,
          skills: (data.skills || []).map((skill) => ({
            label: skill.label,
            labelIcon: getTechIcon(skill.label),
            items: (skill.contents || []).map((item) => ({
              name: item,
              icon: getTechIcon(item),
            })),
            // contents をスラッシュ区切りで結合した文字列
            itemNamesJoin: skill.contents.join(' / '),
          })),
        };
        this.dataReady = true; // データが読み込まれたらフラグを更新
      })
      .catch((error) => console.error('Failed to load about content:', error));
  },
  methods: {
    renderMarkdown, // util.js の関数を使用
  },
};
</script>

<style scoped>
.about-view {
  min-height: 100vh;
}

.status-section,
.about-section,
.skills-section {
  font-size: 1.125rem;
}

.status-label {
  font-size: 1.25rem;
}

.skill-label {
  font-size: 1.25rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
