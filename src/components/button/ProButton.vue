<template>
  <button 
    @click="$emit('click')" 
    :disabled="disabled" 
    :class="[
      'inline-flex rounded border-none outline-none shadow-none',
      sizeClasses,
      themeClasses,
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
  >
    <slot name="default">{{ text }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineComponent, computed } from "vue";

defineComponent({
  name: "ProButton",
});

const props = defineProps({
  text: { type: String, required: false },
  disabled: { type: Boolean, default: false },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md'
  },
  theme: {
    type: String as () => 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default',
    default: 'default'
  }
});

defineEmits(["click"]);

const sizeClasses = computed(() => {
  switch(props.size) {
    case 'sm': return 'px-3 py-1 text-sm';
    case 'lg': return 'px-6 py-3 text-lg';
    case 'md':
    default: return 'px-4 py-2 text-base';
  }
});

const themeClasses = computed(() => {
  switch(props.theme) {
    case 'primary': return 'bg-blue-600 text-white hover:bg-blue-700';
    case 'secondary': return 'bg-gray-300 text-gray-800 hover:bg-gray-400';
    case 'success': return 'bg-green-500 text-white hover:bg-green-600';
    case 'warning': return 'bg-orange-600 text-white hover:bg-orange-700';
    case 'danger': return 'bg-red-600 text-white hover:bg-red-700';
    case 'default':
    default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
});
</script>