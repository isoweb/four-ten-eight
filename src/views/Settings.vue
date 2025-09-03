<template>
  <div class="settings-page">
    <h1 class="page-title">Image Settings</h1>

    <div class="card">
      <h2 class="card-title">Formats</h2>
      <div class="form-grid">
        <div class="form-group">
          <label for="src-format">img src format</label>
          <select id="src-format">
            <option>webp</option>
            <option>avif</option>
          </select>
        </div>
        <div class="form-group">
          <label>Other formats</label>
          <div class="checkbox-group">
            <label><input type="checkbox" checked> image-slot-1 (fallback)</label>
            <label><input type="checkbox" checked> image-slot-2 (2nd fallback)</label>
            <label><input type="checkbox" checked> image-slot-4 (3rd fallback)</label>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="card-title">Sizes (Screen Width)</h2>
      <div class="form-grid-4-cols">
        <div class="form-group">
          <label for="size-1">size-1</label>
          <input id="size-1" type="text">
        </div>
        <div class="form-group">
          <label for="size-2">size-2</label>
          <input id="size-2" type="text">
        </div>
        <div class="form-group">
          <label for="size-3">size-3</label>
          <input id="size-3" type="text">
        </div>
        <div class="form-group">
          <label for="size-4">size-4</label>
          <input id="size-4" type="text">
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="card-title">FTP Details</h2>
      <div class="form-grid">
        <div class="form-group">
          <label for="ftp-host">FTP Host</label>
          <input id="ftp-host" type="text">
        </div>
        <div class="form-group">
          <label for="ftp-user">Username</label>
          <input id="ftp-user" type="text">
        </div>
        <div class="form-group">
          <label for="ftp-pass">Password</label>
          <input id="ftp-pass" type="password">
        </div>
        <div class="form-group">
          <label for="ftp-port">Port</label>
          <input id="ftp-port" type="text">
        </div>
      </div>
      <button class="btn btn-primary" style="margin-top: 16px;">Connect</button>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for this static view
</script>

<style scoped>
.settings-page .card {
  margin-bottom: 24px;
}
.page-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
}
.card-title {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.form-grid-4-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}
.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: normal;
}
</style>