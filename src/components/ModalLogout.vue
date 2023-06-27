<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div 
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">提示訊息：</p>
        <button
          @click="closeModal"
          class="delete" 
          aria-label="close"
        />
      </header>
      <section class="modal-card-body">
        您是否真的要退出 App？
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          type="button"
          class="button"
        >
          取消
        </button>
        <button
          @click.prevent="App.exitApp()"
          type="button"
          class="button is-danger"
        >
          退出App
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  /**
  * imports
  */
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import { App } from '@capacitor/app'

  /**
  * props
  */
    const props = defineProps({
      modelValue: {
        type: Boolean,
        default: false
      }
    })

  /**
  * emits
  */
    const emit = defineEmits(['update:modelValue'])

  /**
  * close modal
  */
    const closeModal = () => {
      emit('update:modelValue', false)
    }

  /**
  * click outside to close
  */
    const modalCardRef = ref(null)

    onClickOutside(modalCardRef, closeModal)
</script>