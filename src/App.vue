<template>
  <div class="app-container" v-if="$route.meta.layout !== 'empty'">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <main class="page-content">
        <RouterView />
      </main>
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
}
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.page-content {
  padding: 24px;
  flex-grow: 1;
}
</style>