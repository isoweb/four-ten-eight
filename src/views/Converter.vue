<template>
  <div class="converter-page">
    <div class="card settings-panel">
      <h1 class="card-title">Image Converter</h1>

      <div class="setting-group">
        <label>Image Type</label>
        <div class="radio-group">
          <label><input type="radio" name="imgType" checked> Blog</label>
          <label><input type="radio" name="imgType"> Normal</label>
          <label><input type="radio" name="imgType"> Hero</label>
        </div>
      </div>
      
      <div class="setting-group">
        <label for="server-select">Server Select</label>
        <select id="server-select">
          <option>server-1</option>
          <option>server-2</option>
        </select>
      </div>

      <div class="seo-section">
        <h2 class="seo-title">SEO</h2>
        <div class="form-group">
          <label for="img-title">img title</label>
          <input id="img-title" type="text" placeholder="Enter image title...">
        </div>
        <div class="form-group">
          <label for="img-caption">fig-Caption</label>
          <input id="img-caption" type="text" placeholder="Enter figure caption...">
        </div>
         <div class="form-group">
          <label for="img-alt">img alt (AI Keywords)</label>
          <textarea id="img-alt" rows="3" placeholder="Separate multiple keywords by comma"></textarea>
        </div>
      </div>
    </div>

    <div class="card suggestions-panel">
      <h2 class="card-title ai-title">AI SEO SUGGESTIONS</h2>
      
      <div class="suggestion-block">
        <div class="suggestion-header">
          <label>img alt</label>
          <button class="use-btn">Use</button>
        </div>
        <p class="suggestion-content">
          A panoramic view of a mountain range at sunrise, with vibrant colors painting the sky.
        </p>
      </div>
      
      <div class="suggestion-block">
        <div class="suggestion-header">
          <label>img title</label>
          <button class="use-btn">Use</button>
        </div>
        <p class="suggestion-content">
          Mountain Sunrise Vista
        </p>
      </div>

      <div class="suggestion-block">
        <div class="suggestion-header">
          <label>fig-Caption</label>
          <button class="use-btn">Use</button>
        </div>
        <p class="suggestion-content">
          The sun rises over the serene mountain peaks, casting a golden glow.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useHead } from '@unhead/vue'
  useHead({
    title: 'Converter', // Tùy chọn: Thay đổi cả tiêu đề trang
    meta: [
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  })
</script>

<style scoped>
.converter-page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  align-items: start;
}
.card-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
}
.setting-group {
  margin-bottom: 20px;
}
.setting-group > label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}
.radio-group {
  display: flex;
  gap: 16px;
}
.radio-group label {
  display: flex;
  align-items: center;
  gap: 6px;
}
select, input[type="text"], textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
}
.seo-section {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}
.seo-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}
/* AI Suggestions Panel */
.ai-title {
  color: var(--primary-color);
}
.suggestion-block {
  margin-bottom: 24px;
}
.suggestion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.suggestion-header label {
  font-weight: 600;
}
.use-btn {
  background: none;
  border: none;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  padding: 4px;
}
.suggestion-content {
  font-size: 14px;
  color: var(--text-muted);
  background-color: var(--body-bg);
  padding: 12px;
  border-radius: 6px;
  line-height: 1.5;
}
</style>