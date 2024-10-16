<template>
  <div class="login">
    <h2>Авторизация</h2>
    <Button @click="login">Войти через OAuth2</Button>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Button from './Button.vue'
import { useMainStore } from '@/stores/mainStore'
import router from '@/router'

const error = ref<string | null>(null)
const store = useMainStore()

const login = async () => {
  error.value = null
  await store.Auth()
  router.push('/')
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}

div {
  margin-top: 10px;
}
</style>
