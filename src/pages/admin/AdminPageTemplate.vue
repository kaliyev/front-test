<template>
  <q-layout view="hHh Lpr Fff">
    <q-header elevated>
      <q-toolbar class="full-width">
        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none; color: inherit;">ADMIN</router-link>
        </q-toolbar-title>
        <q-space />
        <q-btn v-if="!isAuthorized" flat label="Login" to="/login" />
        <q-btn v-else flat label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable v-ripple to="/admin/page1" tag="router-link">
          <q-item-section>Menu 1</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/admin/page2" tag="router-link">
          <q-item-section>Menu 2</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/admin/page3" tag="router-link">
          <q-item-section>Menu 3</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-center bg-grey-2 q-pa-md">
      &copy; 2024 BI EDU
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isAuthorized = ref(false);
const router = useRouter();
const leftDrawerOpen = ref(true);

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
