<template>
  <div class="image-list-page">
    <div class="page-header">
      <h2>Image List</h2>
      <button class="btn btn-primary">+ Add New</button>
    </div>
    <div class="card">
      <table class="data-table">
        <thead>
          <tr>
            <th>FileName</th>
            <th>Date Created</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>image-123.jpg</td>
            <td>2025-09-04</td>
            <td>Normal</td>
            <td><a href="#">Edit</a> <a href="#" class="danger">Delete</a></td>
          </tr>
          <tr>
            <td>photo-456.png</td>
            <td>2025-09-03</td>
            <td>Blog-Hero</td>
            <td><a href="#">Edit</a> <a href="#" class="danger">Delete</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
  import { useHead } from '@unhead/vue'
  useHead({
    title: 'Images', // Tùy chọn: Thay đổi cả tiêu đề trang
    meta: [
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  })
</script>
<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th, .data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}
.data-table thead {
  background-color: #f9fafb;
}
.data-table tbody tr:hover {
  background-color: #f9fafb;
}
.data-table .danger {
  color: var(--danger-color);
}
</style>