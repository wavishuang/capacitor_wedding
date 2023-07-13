<template>
  <div 
    class="option-item" 
    :class="{'active': activeOption === option.id}"
    @click="handleClickOption"
  >
    <div class="icon">
      <div class="img-cover" :class="option.id">
        <img :src="option.icon" v-show="activeOption !== option.id"/>
        <img :src="option.icon_a" v-show="activeOption === option.id"/>
      </div>
    </div>
    <div class="option-title">
      <div class="arrow">
        <div class="triangle arrow-right"></div>
      </div>
      <div class="text">{{option.text}}</div>
    </div>
  </div>
</template>

<script setup>
  /**
   * imports
  */
    import { inject } from 'vue'

  /**
   * props
  */
    const props = defineProps({
      option: {
        type: Object,
        required: true
      }
    })

  /**
   * inject
  */
    const { activeOption } = inject('grandpaStates')
    const { setActiveOptionId } = inject('grandpaDispatch')

  /**
   * click option item
  */
    const handleClickOption = () => {
      setActiveOptionId(props.option.id)
    }
</script>

<style lang="scss" scoped>
  .option-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 37px;
    cursor: pointer;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4.375vw;
      height: 4.375vw;
      border-style: solid;
      border-width: 1px;
      border-color: #4c4053;
      border-radius: 50%;
      background: #F3F3F1;
      margin-right: 13px;

      .img-cover {
        width: 52.6%;

        &.location,
        &.customer {
          width: 40.3%;
        }

        img {
          width: 100%;
          vertical-align: top;
        }
      }
    }

    &.active,
    &:hover {
      .icon {
        border-width: 3px;
      }
      .option-title {
        .text {
          color: #212529;
        }
      }
    }

    .option-title {
      display: flex;
      align-items: center;
      .arrow {
        display: block;
        width: 15px;
        height: 20px;
        margin-right: 16px;
      }

      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        &.arrow-right {
          border-width: 10px 0 10px 15px;
          border-color: transparent transparent transparent #4c4053;
        }
      }

      .text {
        color: #d0d0d0;
        font: normal normal 600 1.30208vw/1.875vw Source Han Serif TW Black;
        letter-spacing: 0.130208vw;
      }
    }
  }
</style>
