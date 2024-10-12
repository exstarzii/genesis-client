import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api'

export const useMainStore = defineStore('mainStore', () => {
  const selectedItem = ref('')
  const isLoading = ref(false)

  function postItem() {
    isLoading.value = true;
  }

  function getItems() {
    isLoading.value = true;
  }

  function setSelectedItem(item: string) {
    selectedItem.value = item;
  }

  async function Auth() {
    try {
      let data = await api.Auth()
      console.log(data)
      const { access_token, base_domain } = data

      localStorage.setItem('access_token', access_token)
      localStorage.setItem('base_domain', base_domain)
    } catch (err) {
      console.error(err);
    }
  }

  return { selectedItem, isLoading, Auth, postItem, getItems, setSelectedItem }
})
