<template>
  <section class="section carousel-section">
    <div class="container">
      <h3 class="trial-version">體驗版</h3>
      <div id="carousel"  class="carousel">
        <TemplateCard 
          v-for="card in inviteCard"
          :card="card"
          class="card"
          :class="{'is-active' : templateID === card.id}"
          :key="card.id"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  /**
   * imports 
  */
    import { ref, inject, onMounted } from 'vue'
    import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'
    import ImgModule01 from '@/assets/modules/module-01.png'
    import ImgModule01e from '@/assets/modules/module-01-e.png'
    import ImgModule02 from '@/assets/modules/module-02.png'
    import ImgModule02e from '@/assets/modules/module-02-e.png'
    import ImgModule03 from '@/assets/modules/module-03.png'
    import ImgModule03e from '@/assets/modules/module-03-e.png'
    import TemplateCard from './TemplateCard.vue'

  /**
   * bulma carousel
  */
    const { templateID } = inject('grandpaStates')
    
    const inviteCard = ref([
      {ID: 0, Img: ImgModule01, Img2: ImgModule01e, class: "module-1"},
      {ID: 1, Img: ImgModule02, Img2: ImgModule02e, class: "module-2"},
      {ID: 2, Img: ImgModule03, Img2: ImgModule03e, class: "module-3"}
    ])

    const carouselOptions = {
      slidesToScroll: 1,
      slidesToShow: 1,
      // pagination: false,
      effect: 'fade',
      // loop: true,
      // autoplay: true,
    }

    const carousels = ref(null)

    onMounted(() => {
      carousels.value = bulmaCarousel.attach('#carousel', carouselOptions)
    })
</script>

<style lang="scss">
  @import 'bulma-carousel/dist/css/bulma-carousel.min.css';
  
  .section.carousel-section {
    padding: 0 1.8229vw 0 4.11458vw;
    .container {
      position: relative;
      .trial-version {
        position: absolute;
        top: 0;
        text-align: center;
        font: normal normal 600 .9895833vw/1 Source Han Serif TW Black;
        letter-spacing: .09895833vw; //1.9px;
        color: #4C4053;
        width: 100%;
        z-index: 1;
      }
      .carousel {
        width: 19.9479vw; //383px;
        height: 37.65625vw; //723px;
        .slider {
          height: 100%;
        }

        .card {
          width: 19.9479vw; //383px;
          box-shadow: none;
          .card-image {
            .image {
              width: 19.9479vw; //383px;
              height: 37.65625vw; // 723px;
            }
          }
        }
      }

      .slider-navigation-next,
      .slider-navigation-previous {
        display: none;
      }

      .slider-pagination {
        bottom: -15px;
        justify-content: space-evenly;

        .slider-page {
          width: 1.09375vw; //21px;
          height: 1.09375vw; //21px;
          border: 1px solid #4C4053;
          box-shadow: none;

          &.is-active,
          &:hover {
            background-color: #4C4053;
            transform: initial;
          }
        }
      }
    }
  }
</style>