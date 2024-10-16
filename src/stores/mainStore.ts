import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../api'
import type { TableItem } from '@/types/TableItem'

export const useMainStore = defineStore('mainStore', () => {
  const selectedItem = ref('')
  const Items = ref<TableItem[]>([])
  const isLoading = ref(false)

  function postItem() {
    isLoading.value = true;
    if (selectedItem.value == 'deal') {
      api.CreateLead()
        .then(lead => Items.value.push({ name: 'Сделка', id: String(lead.id) }))
        .then(() => isLoading.value = false)
    } else if (selectedItem.value == 'contact') {
      api.CreateContact()
        .then(contact => Items.value.push({ name: 'Контакт', id: String(contact.id) }))
        .then(() => isLoading.value = false)
    } else {
      api.CreateCompany()
        .then(company => Items.value.push({ name: 'Компания', id: String(company.id) }))
        .then(() => isLoading.value = false)
    }
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

  return { Items, selectedItem, isLoading, Auth, postItem, setSelectedItem }
})
