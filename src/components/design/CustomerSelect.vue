<template>
  <div class="control">
    <div class="select">
      <select 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="0" disabled>賓客稱謂</option>
        <option 
          v-for="title in guestTitles"
          :value="title.id"
          :key="title.id"
        >{{title.text}}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
  /**
   * imports 
  */
    import { computed } from 'vue'
    import { useStoreCustomer } from '@/stores/storeCustomer.js'

  /**
   * props
  */
    const props = defineProps({
      modelValue: {
        type: Number,
        required: true
      }
    })
  
  /**
   * emit 
  */
    const emit = defineEmits(['update:modelValue'])

  /**
   * store customer
   */
    const storeCustomer = useStoreCustomer()
    const guestTitles = computed(() => storeCustomer.guestTitles || [])

</script>