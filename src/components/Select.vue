<template>
  <div class="dropdown">
    <div class="select" @click="toggleDropdown">
      <span>{{ selectedLabel || 'Select an option' }}</span>
      <span class="icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>

    <transition name="fade">
      <ul v-if="isOpen" class="options-list">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          :class="{ selected: option.value === selectedValue }"
        >
          {{ option.label ? option.label : option.value }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface Option {
  label?: string
  value: string | number
}

const props = defineProps<{
  options: Option[]
  modelValue: string | number | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const isOpen = ref(false)
const selectedValue = ref(props.modelValue)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: Option) => {
  selectedValue.value = option.value
  isOpen.value = false
  emit('update:modelValue', option.value)
}

const selectedLabel = computed(
  () => props.options.find((option) => option.value === selectedValue.value)?.label
)
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 200px;
}

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  font-size: 18px;
}

.select .icon {
  font-size: 12px;
}

.options-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
}

.options-list li {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.options-list li:hover {
  background-color: #f5f5f5;
}

.options-list li.selected {
  background-color: #e0f7fa;
  color: var(--color-primary);
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
