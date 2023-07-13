<template>
  <div class="control">
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input" 
      type="text" 
      :placeholder="placeholder" 
    />
  </div>
</template>

<script setup>
  /**
   * props
  */
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  })

  /**
   * emits
  */
  const emit = defineEmits(['update:modelValue'])
</script>