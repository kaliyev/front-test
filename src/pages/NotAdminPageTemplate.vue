<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
  <router-link to="/" style="text-decoration: none; color: inherit;">BI EDU</router-link>
</q-toolbar-title>
        <q-space />
        <q-btn v-if="!isAuthorized" flat label="Login" to="/login" />
        <q-btn v-else flat label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center bg-grey-2 q-pa-md">
      &copy; 2024 BI EDU
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { onMounted } from 'vue';
const isAuthorized = ref(false);
const router = useRouter();

function checkAuth() {
  isAuthorized.value = localStorage.getItem('isAuthorized') === 'true';
}

function logout() {
  localStorage.setItem('isAuthorized', 'false');
  checkAuth();
  router.push('/');
}

onMounted(() => {
  checkAuth();
  window.addEventListener('storage', checkAuth);
});
</script>
