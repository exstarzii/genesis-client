<template>
  <div>
    <h1>Создать сущность</h1>
    <div class="flex">
      <Select :options="options" v-model="selectedItem"></Select>
      <Button :disabled="isCreateButtonDisabled" :isLoading="store.isLoading" @click="createItem"
        >Создать</Button
      >
    </div>
    <IdTable :items="Items" />
  </div>
</template>

<script lang="ts" setup>
import Button from './Button.vue'
import Select from './Select.vue'
import IdTable from './IdTable.vue'
import { computed, ref, watch } from 'vue'
import { useMainStore } from '../stores/mainStore'

const store = useMainStore()
const selectedItem = ref(store.selectedItem)

watch(selectedItem, (newItem) => {
  store.setSelectedItem(newItem)
})

const Items = store.Items
const isCreateButtonDisabled = computed(() => !store.selectedItem)
const createItem = store.postItem

const options = ref([
  { label: 'Не выбрано', value: '' },
  { label: 'Сделка', value: 'deal' },
  { label: 'Контакт', value: 'contact' },
  { label: 'Компания', value: 'company' }
])
</script>

<style scoped>
.flex {
  display: flex;
  gap: 20px;
}
</style>
