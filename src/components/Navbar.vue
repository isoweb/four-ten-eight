<template>
  <header class="navbar">
    <div class="search-bar">
      <input type="text" placeholder="Search...">
    </div>
    <div class="user-actions">
      <button class="btn btn-danger" @click="handleLogout">Logout</button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn');
  router.push('/login');
};
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;
}
.search-bar input {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  min-width: 250px;
}
</style>