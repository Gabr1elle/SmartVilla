<template>
  <div>
    <ul>
      <li v-if="false">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>

      <li v-if="false">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>

      <li v-if="false">
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
body {
  background-color: #0d212c; /* Substitua pela cor desejada */
}
</style>
