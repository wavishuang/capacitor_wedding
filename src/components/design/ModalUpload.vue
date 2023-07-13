<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div 
      class="modal-card"
      ref="modalCardRef"
    >
      <header class="modal-card-head">
        <p class="modal-card-title">上傳檔案</p>
        <button
          @click="closeModal"
          class="delete" 
          aria-label="close"
        />
      </header>
      <section class="modal-card-body">
        <div class="control">
          <input
            ref="file"
            type="file" 
            class="input-file"
            @change="preview"
            
          />
          <button
            type="button" 
            class="btn btn-upload"
            @click="this.$refs.file.click()"
          >請選擇檔案</button>
        </div>
        <div ref="cutImageOutter" class="cut-image-outter mx-auto my-5">
          <VueCropper
            ref="cropper"
            :img="imagePreview"
            :outputType="'png'"
            :autoCrop="true"
            :auto-crop-width="optionWidth"
            :auto-crop-height="optionHeight"
            :fixedBox="true"
            mode="cover"
          />
        </div>
        <div 
          ref="scaleImg02Ref"
          class="crop-canvas-outter"
        >
          <img :src="cutImg" />
        </div>
        <div 
          ref="scaleImg03Ref"
          class="crop-canvas-outter crop-03"
        >
          <img :src="cutImg" />
        </div>
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button
          @click="closeModal"
          type="button"
          class="button"
        >
          Cancel
        </button>
        <button
          type="button"
          class="button is-primary"
          :class="{'is-loading': loading}"
          @click="finishCut"
        >
          確定
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  /**
  * imports
  */
    import { ref, onMounted, onUnmounted } from 'vue'
    import { onClickOutside } from '@vueuse/core'
    import 'vue-cropper/dist/index.css'
    import { VueCropper } from 'vue-cropper'
    import html2canvas from 'html2canvas'

  /**
  * props
  */
    const props = defineProps({
      modelValue: {
        type: Boolean,
        default: false
      },
    })

  /**
  * emits
  */
    const emit = defineEmits(['update:modelValue', 'setUploadImgs'])

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

  /**
   * loading
  */
    const loading = ref(false)

  /**
   * file
  */
    const file = ref(null)
    const imagePreview = ref(null)

    const cutImageOutter = ref(null)
    const optionWidth = ref(262)
    const optionHeight = ref(480)

    const preview = e => {
      optionHeight.value = cutImageOutter.value.clientHeight - 20
      optionWidth.value = cutImageOutter.value.clientWidth > 311 ? 291 : cutImageOutter.value.clientWidth - 20

      for (let pic of e.target.files) {
        imagePreview.value = URL.createObjectURL(pic)
      }
    }

    const cropper = ref()
    const cutImg = ref()
    const times = 10
    const loop = 500

    const zoomScale = [
      { width: 236, height: 440},
      { width: 224, height: 327},
    ]

    const finishCut = (type) => {
      loading.value = true
      if (type === 'blob') {
        cropper.value.getCropBlob((data) => {
          // console.log('blob:', data)
          cutImg.value = window.URL.createObjectURL(data)
          createImgs()
        })
      } else {
        cropper.value.getCropData((data) => {
          // console.log('not blob', data)
          cutImg.value = data
          createImgs()
        })
      }
    }

  /**
   * html2canvas img02, img03 
  */
    const scaleImg02Ref = ref(null)
    const scaleImg03Ref = ref(null)
    const img02 = ref(null)
    const img03 = ref(null)

    const createImgs = () => {
      let i = 0
      let imgIntervel = setInterval(() => {
        if(cutImg.value) {
          clearInterval(imgIntervel)
          Promise.all([
            html2canvas(scaleImg02Ref.value).then(canvas2 => {
              img02.value = canvas2.toDataURL('image/png', 1)
            }),
            html2canvas(scaleImg03Ref.value).then(canvas3 => {
              img03.value = canvas3.toDataURL('image/png', 1)
            })
          ]).then(() => {
            emit('setUploadImgs', 
              [
                {
                  name: 'img01',
                  img: cutImg.value
                },
                {
                  name: 'img02',
                  img: img02.value
                },
                {
                  name: 'img03',
                  img: img03.value
                }
              ]
            )
          }).then(() => {
            closeModal()
          })
        } else {
          if(i < times) {
            i++
          } else {
            clearInterval(imgIntervel)
            loading.value = false
            console.log('裁切出錯')
          }
        }
      }, loop)
    }

  /**
  * keyboard control
  */
    const handleKeyboard = e => {
      if(e.key=== 'Escape') closeModal()
    }

    onMounted(() => {
      document.addEventListener('keyup', handleKeyboard)
    })

    onUnmounted(() => {
      document.removeEventListener('keyup', handleKeyboard)
    })
</script>

<style scoped>
.input-file {
  display: none;
}

.btn {
  &.btn-upload {
    color: #4C4053;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #4C4053;
    border-radius: 29px;
    opacity: 1;
    font-size: 25px;
    line-height: 26px;
    font-family: 'Libre Baskerville';
    font-weight: bold;
    letter-spacing: 2.5px;
    padding: 6px 12px;

    &:hover {
      background-color: #4C4053;
      color: #fff;
    }
  }
}

.cut-image-outter {
  width: 100%;
  min-width: 311px;
  height: 564px;
  margin: 10px 0;
}

.crop-canvas-outter {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 236px;
  height: 440px;
  overflow: hidden;
  &.crop-03 {
    width: 224px;
    height: 327px;
    border-radius: 50% 50% 0 0/35% 35% 0 0;
  }
  img {
    width: 100%;
    vertical-align: top;
  }
}
</style>