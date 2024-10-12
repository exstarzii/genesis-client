<template>
  <button
    :class="['base-button', buttonType, { 'is-loading': isLoading }]"
    :disabled="isDisabled || isLoading"
    @click="handleClick"
  >
    <span v-if="isLoading" class="loader"></span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  buttonType?: string
  isDisabled?: boolean
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  buttonType: 'default',
  isDisabled: false,
  isLoading: false
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  if (!props.isDisabled && !props.isLoading) {
    emit('click')
  }
}
</script>

<style scoped>
.base-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.base-button.default:hover {
  background-color: #176ea8;
}

.base-button.default:disabled {
  background-color: white;
  color: black;
  cursor: not-allowed;
  transform: none;
  border: 1px solid grey;
}

.base-button.default,
.base-button.default.is-loading {
  background-color: var(--color-primary);
  color: white;
}

.base-button.is-loading {
  padding: 10px;
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.base-button.is-loading {
  cursor: progress;
}

.base-button.is-loading span:not(.loader) {
  visibility: hidden;
}
</style>
