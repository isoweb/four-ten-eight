<template>
  <aside class="sidebar">
    <div class="sidebar-header">UBOLD</div>
    <nav class="sidebar-nav">
      <h3>Navigation</h3>
      <ul>
        <li>
          <RouterLink to="/" active-class="active">Image List</RouterLink>
        </li>
        <li>
          <RouterLink to="/converter" active-class="active">Converter</RouterLink>
        </li>
        <li>
          <RouterLink to="/settings" active-class="active">Settings</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--sidebar-bg);
  color: var(--text-light);
  padding: 24px;
  flex-shrink: 0;
}
.sidebar-header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
}
.sidebar-nav h3 {
  font-size: 12px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 12px;
}
.sidebar-nav ul {
  list-style: none;
}
.sidebar-nav a {
  display: block;
  padding: 10px;
  color: var(--text-light);
  border-radius: 6px;
  margin-bottom: 4px;
}
.sidebar-nav a:hover {
  background-color: #495057;
}
.sidebar-nav a.active {
  background-color: var(--primary-color);
}
</style>