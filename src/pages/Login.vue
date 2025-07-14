<template>
  <div class="q-pa-md">
    <h1>Login Page</h1>
    <q-form @submit.prevent="login">
      <q-input filled v-model="email" label="Email" type="email" class="q-mb-md" required />
      <q-input filled v-model="password" label="Password" type="password" class="q-mb-md" required />
      <q-btn label="Login" color="primary" type="submit" class="q-mt-md" />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const email = ref('');
const password = ref('');

import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const router = useRouter();

function login() {
  if (email.value === 'admin@admin.com' && password.value === 'Passw0rd') {
    localStorage.setItem('isAuthorized', 'true');
    Notify.create({ type: 'positive', message: 'Login successful!' });
    router.push('/admin');
  } else {
    Notify.create({ type: 'negative', message: 'Invalid email or password.' });
  }
}
</script>
