<template>
  <div class="login-container">
    <div class="login-box card">
      <h1 class="login-title">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required>
        </div>
        <button type="submit" class="btn btn-primary login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useHead } from '@unhead/vue'

const username = ref('');
const password = ref('');
const router = useRouter();

useHead({
  title: 'Login', // Tùy chọn: Thay đổi cả tiêu đề trang
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

const handleLogin = () => {
  if (username.value && password.value) {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/');
  } else {
    alert('Vui lòng nhập username và password!');
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--body-bg);
}
.login-box {
  width: 100%;
  max-width: 400px;
}
.login-title {
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
}
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
}
.login-button {
  width: 100%;
  margin-top: 8px;
}
</style>