<template>
  <div 
    class="home max-width-1024 has-background-white"
    ref="homeRef"
  >
    <Header />

    <div class="columns is-centered has-background-white mx-0">
      <LeftSide class="column is-5 pt-6 px-0" />
      <RightSide 
        class="column is-7 pt-6 px-4" 
      />
    </div>

    <div 
      class="fixed-go-top" @click="backToTop"
    >Top</div>
  </div>
</template>

<script setup>
/**
 * imports
 */
  import Header from '@/components/Header.vue'
  import LeftSide from '@/components/LeftSide.vue'
  import RightSide from '@/components/RightSide.vue'
  import { ref } from 'vue'

/**
 * home ref
 */
  const homeRef = ref(null)

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
</script>

<style>
.max-width-1024 {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}

.fixed-go-top {
  position: fixed;
  bottom: 5%;
  right: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #c8a063;
  color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  font-size: 25px;
}

@media (max-width: 768px) {
  .fixed-go-top {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>


