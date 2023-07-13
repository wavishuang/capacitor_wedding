<template>
  <div>
    <div class="card-image">
      <figure class="image">
        <img :src="card.Img" />
      </figure>
    </div>
  </div>
</template>

<script setup>
  /**
   * props
  */
  const props = defineProps({
    card: {
      type: Object,
      required: true
    }
  })
</script>