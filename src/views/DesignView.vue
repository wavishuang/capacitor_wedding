<template>
  <div class="img-cover flower flower-rt">
    <img src="@/assets/flower-rt01.png" />
  </div>

  <div class="img-cover flower flower-ld">
    <img src="@/assets/flower-ld01.png" />
  </div>

  <div class="design">
    <NavbarDesign />

    <div class="design-wrapper">
      <!-- 頁面標題 -->
      <h3 class="title">設計專屬電子賀卡</h3>
      <h4 class="sub-title">點選下列選項編輯</h4>

      <div class="design-wrapper-inner">
        <!-- 左側選單-->
        <DesignMenu />

        <!-- 中間 Carousel -->
        <TemplateCarousel />

        <!-- 右側表單 -->
        <div class="active-form">
          <!-- 輸入姓名 -->
          <div 
            class="control-group"
            v-show="activeOption === 'name'"
          >
            <InputText v-model="bridegroom" :placeholder="'新郎姓名'" />
            <InputText v-model="bride" :placeholder="'新娘姓名'"/>
          </div>

          <!-- 上傳檔案 -->
          <div 
            class="control-group control-group-xl"
            v-show="activeOption === 'upload'"
          >
            <div class="control">
              <button
                type="button"
                @click="showModal = true"
                class="btn btn-upload" 
              >上傳檔案</button>
            </div>
            
            <img ref="qrcodeRef" :src="ImgQrcode" width="42" height="43" style="position: absolute; left: -100%; top: -100%;" />
            <div
              v-for="(item, index) in zoomScale"
              :key="index"
              class="canvas-outter"
            >
              <div class="outter-img">
                <img
                  :src="item.imgModule"
                  :id="`imgModule${index}`" 
                  :width="item.canvasWidth" 
                  :height="item.canvasHeight" 
                />
              </div>

              <canvas
                :id="'canvas0'+ index" 
                class="canvas"
                :width="item.canvasWidth" 
                :height="item.canvasHeight"
              ></canvas>
            </div>
          </div>

          <!-- 選擇日期 -->
          <div 
            class="control-group"
            v-show="activeOption === 'calendar'"
          >
            <Calendar @setDate="handleSetDate" />
          </div>

          <!-- 選擇地點 -->
          <Location
            class="control-group-xxl"
            :selectedCounty="selectedCounty"
            :selectedZone="selectedZone"
            @setCounty="handleSetCounty"
            @setZone="handleSetZone"
            @setLocation="handleSetLocation"
            v-show="activeOption === 'location'"
          />

          <!-- 賓客資訊 -->
          <div 
            class="control-group"
            v-show="activeOption === 'customer'"
          >
            <InputText v-model="guestName" :placeholder="'賓客姓名'" />
            <CustomerSelect v-model.number="guestTitle" />
          </div>
        </div>
      </div>

      <!-- Finish Button -->
      <button type="button" class="btn btn-finish" @click="finish">Finish</button>
    </div>
  </div>

  <ModalUpload
    v-if="showModal"
    v-model="showModal"
    @setUploadImgs="handleUploadImgs"
  />
</template>

<script setup>
  /**
   * imports
  */
    import { ref, onMounted, nextTick, computed, watch, provide } from 'vue'

    import NavbarDesign from '@/components/design/NavbarDesign.vue'
    import DesignMenu from '@/components/design/DesignMenu.vue'
    import TemplateCarousel from '@/components/design/TemplateCarousel.vue'
    import Calendar from '@/components/design/Calendar.vue'
    import Location from '@/components/design/Location.vue'
    import CustomerSelect from '@/components/design/CustomerSelect.vue'
    import ModalUpload from '@/components/design/ModalUpload.vue'

    import InputText from '@/components/InputText.vue'

    import ImgModule01e from '@/assets/modules/module-01-e.png'
    import ImgModule02e from '@/assets/modules/module-02-e.png'
    import ImgModule03e from '@/assets/modules/module-03-e.png'
    import ImgQrcode from '@/assets/qrcode.png'

    import { format } from 'date-fns'

    import { useStoreCustomer } from '@/stores/storeCustomer.js'

  /**
   * Carousel
  */
    const templateID = ref(0)

  /**
   * options：左側選單與右側輸入項
  */
    const activeOption = ref('name')
    const setActiveOptionId = id => activeOption.value = id

  /**
   * 新郎姓名：bridegroom
   * 新娘姓名：bride
  */
    const bridegroom = ref('')
    const bride = ref('')

  /**
   * 上傳圖片
  */
    const showModal = ref(false)

    const uploadImgs = ref(null)
    const handleUploadImgs = imgObj => {
      uploadImgs.value = imgObj
    }

    watch(() => uploadImgs.value, val => {
      if(val && val.length) paintCanvasBg(val)
    })

    const zoomScale = [
      { 
        imgModule: ImgModule01e,
        canvasParams: {
          sx: 0, sy: 0, sw: 291, sh: 544, dx: 46, dy: 89, dw: 291, dh: 544,
          name: {
            position: {
              top: (401 + 14),
              left: 0
            },
            color: '#FEAEA7',
            font: "10px/14px Libre Baskerville",
            textAlign: 'center'
          },
          date: {
            position: {
              top: (455 + 12),
              left: 0
            },
            color: '#F5E0DD',
            font: '9px/12px Libre Baskerville',
            textAlign: 'center'
          },
          location: {
            position: {
              top: (477 + 11),
              left: 0
            },
            color: '#F5E0DD',
            font: '8px/11px Libre Baskerville',
            textAlign: 'center'
          },
          relation: {
            position: {
              top: (567 + 10),
              left: 0
            },
            color: '#F08679',
            font: '9px/10px Libre Baskerville',
            textAlign: 'center'
          },
          comment: {
            text: '(為了縮短您入座的時間，請出示QRCode報到)',
            position: {
              top: (591 + 4),
              left: 0
            },
            color: '#FBB946',
            font: '3px/4px Libre Baskerville',
            textAlign: 'center'
          },
          qrcode: {
            sx: 0, sy: 0, sw: 42, sh: 43, dx: 170.5, dy: 508, dw: 42, dh: 43,
          }
        },
        canvasWidth: 383, canvasHeight: 723 
      },
      { 
        imgModule: ImgModule02e,
        canvasParams: {
          sx: 0, sy: 0, sw: 236, sh: 440, dx: 73.5, dy: 108, dw: 236, dh: 440,
          name: {
            position: {
              top: (95.5 + 32),
              left: 227.5
            },
            color: '#090A0C',
            font: "bold 32px/37px Libre Baskerville",
            textAlign: 'right',
            split: true
          },
          date: {
            position: {
              top: (590 + 13),
              left: 73.5
            },
            color: '#090A0C',
            font: '9px/12px Libre Baskerville',
            textAlign: 'right',
            split: true
          },
          location: {
            position: {
              top: (561.5 + 15),
              left: 73.5
            },
            color: '#090A0C',
            font: '10px/15px Libre Baskerville',
            textAlign: 'left'
          },
          relation: {
            position: {
              top: (628.5 + 9),
              left: 127.5
            },
            color: '#090A0C',
            font: '8px/9px Libre Baskerville',
            textAlign: 'left'
          },
          comment: {
            text: '(為了縮短您入座的時間，請出示QRCode報到)',
            position: {
              top: (646.5 + 7),
              left: 73.5
            },
            color: '#090A0C',
            font: '5px/7px Libre Baskerville',
            textAlign: 'left'
          },
          qrcode: {
            sx: 0, sy: 0, sw: 42, sh: 43, dx: 75, dy: 594.5, dw: 42, dh: 43,
          }
        },
        canvasWidth: 383, canvasHeight: 723 
      },
      { 
        imgModule: ImgModule03e, 
        canvasParams: {
          sx: 0, sy: 0, sw:224, sh: 327, dx: 79, dy: 165, dw: 224, dh: 327,
          name: {
            position: {
              top: (119.5 + 27),
              left: 0
            },
            color: '#090A0C',
            font: "24px/27px Libre Baskerville",
            textAlign: 'center',
            split: 'and'
          },
          date: {
            position: {
              top: (511.5 + 13),
              left: 0
            },
            color: '#090A0C',
            font: '12px/13px Libre Baskerville',
            textAlign: 'center',
            split: 'line'
          },
          location: {
            position: {
              top: (535.5 + 15),
              left: 0
            },
            color: '#090A0C',
            font: '10px/15px Libre Baskerville',
            textAlign: 'center'
          },
          relation: {
            position: {
              top: (618.5 + 9),
              left: 0
            },
            color: '#090A0C',
            font: '8px/9px Libre Baskerville',
            textAlign: 'center'
          },
          comment: {
            text: '(為了縮短您入座的時間，請出示QRCode報到)',
            position: {
              top: (638 + 7),
              left: 0
            },
            color: '#090A0C',
            font: '5px/7px Libre Baskerville',
            textAlign: 'center'
          },
          qrcode: {
            sx: 0, sy: 0, sw: 42, sh: 43, dx: 170.5, dy: 564, dw: 42, dh: 43,
          }
        },
        canvasWidth: 383, canvasHeight: 723 
      },
    ]

    const qrcodeRef = ref(null)
    const paintCanvasBg = uploadImgs => {      
      const qrcodeImg = qrcodeRef.value
      for(let i = 0; i < zoomScale.length; i++) {
        const canvas = document.getElementById('canvas0'+ i)
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image()
              img.src = uploadImgs[i].img
              img.onload = function() {
                const imgBg = document.getElementById('imgModule' + i)
                paintCanvas(imgBg, img, canvas, ctx, zoomScale[i].canvasParams, qrcodeImg)
              }
      }
    }

    const paintCanvas = (imgBg, img, canvas, ctx, canvasParams, qrcodeImg) => {
      ctx.drawImage(imgBg, 0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        img, 
        canvasParams.sx, canvasParams.sy, canvasParams.sw, canvasParams.sh, 
        canvasParams.dx, canvasParams.dy, canvasParams.dw, canvasParams.dh
      )
      ctx.drawImage(
        qrcodeImg, 
        canvasParams.qrcode.sx, canvasParams.qrcode.sy, canvasParams.qrcode.sw, canvasParams.qrcode.sh, 
        canvasParams.qrcode.dx, canvasParams.qrcode.dy, canvasParams.qrcode.dw, canvasParams.qrcode.dh
      )

      // name
      ctx.font = canvasParams.name.font
      ctx.fillStyle = canvasParams.name.color
      ctx.textAlign = canvasParams.name.textAlign
      if(canvasParams.name.split) {
        if(canvasParams.name.split === 'and') {
          ctx.fillText(`${bridegroom.value} and ${bride.value}`, canvas.width/2, canvasParams.name.position.top)
        } else {
          ctx.fillText(bridegroom.value, (383 - 73.5), canvasParams.name.position.top)
          ctx.fillText('＆', (383 - 73.5), canvasParams.name.position.top + 37)
          ctx.fillText(bride.value, (383 - 73.5), canvasParams.name.position.top + 69)
        }
      } else {
        if(canvasParams.name.textAlign === 'center') ctx.fillText(`${bridegroom.value} & ${bride.value}`, canvas.width/2, canvasParams.name.position.top)
        else ctx.fillText(`${bridegroom.value} & ${bride.value}`, canvasParams.name.position.left, canvasParams.name.position.top)
      }

      // date
      ctx.font = canvasParams.date.font
      ctx.fillStyle = canvasParams.date.color
      ctx.textAlign = canvasParams.date.textAlign
      const theDate = selectedDate.value ? selectedDate.value : format(new Date(), 'yyyy-MMM-dd p')
      if(canvasParams.date.split) {
        const newDate = format(new Date(theDate), 'yyyy-MMM-dd').split('-')
        const newTime = format(new Date(theDate), 'p')
        const theYear = newDate[0]
        const theMonth = newDate[1]
        const theDay = newDate[2]
        if(canvasParams.date.split === 'line') {
          ctx.fillText(`${theMonth}. | ${theDay} | ${theYear}`, canvas.width/2, canvasParams.date.position.top)
        } else {
          ctx.fillText(theYear, (383 - 73.5), canvasParams.date.position.top)
          ctx.fillText(`${theMonth}.`, (383 - 73.5), canvasParams.date.position.top + 15)
          ctx.font = '21px/24px Libre Baskerville'
          ctx.fillText(theDay, (383 - 73.5), canvasParams.date.position.top + 41) // 21/24
          ctx.font = '10px/12px Libre Baskerville'
          ctx.fillText(newTime, (383 - 73.5), canvasParams.date.position.top + 53) // 10/12
        }
      } else {
        if(canvasParams.date.textAlign === 'center') ctx.fillText(theDate, canvas.width/2, canvasParams.date.position.top)
        else ctx.fillText(theDate, canvasParams.date.position.left, canvasParams.date.position.top)
      }

      // location
      ctx.font = canvasParams.location.font
      ctx.fillStyle = canvasParams.location.color
      ctx.textAlign = canvasParams.location.textAlign
      const locationTitle = locationInfo.value && locationInfo.value.title ? locationInfo.value.title : ''
      if(canvasParams.location.textAlign === 'center') ctx.fillText(locationTitle, canvas.width/2, canvasParams.location.position.top)
      else ctx.fillText(locationTitle, canvasParams.location.position.left, canvasParams.location.position.top)

      // relation
      ctx.font = canvasParams.relation.font
      ctx.fillStyle = canvasParams.relation.color
      ctx.textAlign = canvasParams.relation.textAlign
      if(canvasParams.relation.textAlign === 'center') ctx.fillText(`${guestName.value} / ${guestTitleCn.value}`, canvas.width/2, canvasParams.relation.position.top)
      else ctx.fillText(`${guestName.value} / ${guestTitleCn.value}`, canvasParams.relation.position.left, canvasParams.relation.position.top)

      // comment
      ctx.font = canvasParams.comment.font
      ctx.fillStyle = canvasParams.comment.color
      ctx.textAlign = canvasParams.comment.textAlign
      if(canvasParams.comment.textAlign === 'center') ctx.fillText(canvasParams.comment.text, canvas.width/2, canvasParams.comment.position.top)
      else ctx.fillText(canvasParams.comment.text, canvasParams.comment.position.left, canvasParams.comment.position.top)
    }

  /**
   * 選擇日期：calendar
  */
    const selectedDate = ref('')
    const handleSetDate = date => selectedDate.value = date

  /**
   * 選擇地點
  */
    const selectedCounty = ref(0)
    const selectedZone = ref(0)
    const locationInfo = ref(null)

    const handleSetCounty = val => selectedCounty.value = val
    const handleSetZone = val => selectedZone.value = val
    const handleSetLocation = val => locationInfo.value = val

  /**
   * 賓客資訊
  */
    // 賓客姓名
    const guestName = ref('')

    // 賓客稱謂
    const guestTitle = ref(0)
    const storeCustomer = useStoreCustomer()
    const guestTitles = computed(() => storeCustomer.guestTitles || [])
    const guestTitleCn = computed(() => {
      return guestTitle.value === 0 ? '' : (guestTitles.value.find(item => item.id === guestTitle.value)).text
    })
  /**
   * provide
  */
    provide('grandpaStates', { activeOption, templateID })
    provide('grandpaDispatch', { setActiveOptionId })

  /**
   * finish 
  */
    const finish = () => {
      console.log('finish')
      // if(uploadImgs.value) paintCanvasBg(uploadImgs.value)
    }
    
</script>

<style lang="scss">
  @import 'bulma-calendar/dist/css/bulma-calendar.min.css';

  .img-cover {
    &.flower {
      z-index: 1;
      position: fixed;

      &.flower-rt {
        width: 22.44791vw;
        top: 0;
        right: 0;
      }

      &.flower-ld {
        width: 20.6771vw;
        bottom: 0;
        left: 0;
      }
    }

    img {
      width: 100%;
    }
  }

  .design {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 3.5416vw 40px;
  }

  .design-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    position: relative;
    background-color: #fff;
    border-radius: 2.135416vw/1.822916vw;
    padding: 2.291666vw 2.135416vw;
    max-height: 47.8125vw;

    h3.title {
      position: absolute;
      top: 2.23958vw; // 43px;
      left: 4.53125vw; // 87px;
      font: normal normal 900 2.0833vw/2.175 Source Han Serif TW Black;
      text-align: left;
      letter-spacing: 0.20833vw; //4px;
      color: #4C4053;
      margin-bottom: 0;
    }
    h4.sub-title {
      position: absolute;
      top: 5.9895833vw; // 115px;
      left: 4.53125vw; // 87px;
      font: normal normal 600 1.30208vw/1.44 Source Han Serif TW Black;
      letter-spacing: 0.130208vw; // 2.5px;
    }

    .btn {
      color: #4C4053;
      cursor: pointer;
      background-color: #fff;
      border: 1px solid #4C4053;
      border-radius: 29px;
      font-size: 1.302083vw; //25px;
      line-height: 1.04;
      font-family: 'Libre Baskerville';
      font-weight: bold;
      letter-spacing: 0.1302083vw; // 2.5px;
      min-width: 120px;
      
      &.btn-finish {
        position: absolute;
        bottom: 1.8229166vw; //35px;
        right: 2.1354166vw; // 41px;
        width: 7.395833vw; //142px;
        height: 2.96875vw; // 57px;
        min-width: 120px;
        min-height: 44px;
      }

      &:hover {
        background-color: #4C4053;
        color: #fff;
      }

      &.btn-upload {
        padding: 6px 12px;
      }
    }

    .design-menu {
      display: flex;
      align-items: center;
      width: 21.71875vw; // 417px;
      justify-content: flex-end;
    }

    .design-wrapper-inner {
      display: flex;
      align-items: stretch;

      .active-form {
        width: 24.3229166vw; // 467px;
        padding-top: 3.4895833vw; // 67px;
        display: flex;
        justify-content: flex-start;

        .control-group {
          width: 295px;
          &.control-group-xl {
            width: 311px;
          }

          &.control-group-xxl {
            width: 467px;
          }

          .control {
            width: 100%;
            margin-bottom: 20px;
            font-family: Source Han Serif TW Black;

            input {
              font: normal normal 600 1.041666vw/1.45 Source Han Serif TW Black;  // 20px/29px
              letter-spacing: .1041666vw; //2px;
              color: #4C4053;
              height: 2.083333vw; //40px;
              background: #F2F2F0 0% 0% no-repeat;
              border: 0;
            }

            .select {
              border-radius: 20px;
              border: 1px solid #4C4053;
              background: #F2F2F0 0% 0% no-repeat;
              width: 7.5vw; //144px;
              min-width: 120px;
              height: 2rem;

              select {
                width: 100%;
                background: transparent;  
                border: 0;
                font: normal normal 600 1.041666vw/1.45 Source Han Serif TW Black;
                letter-spacing: .1041666vw; //2px;
                padding: 0 0 0 11px;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  .canvas-outter {
    position: fixed;
    top: -100%;
    left: -100%;
    width: 383px;
    height: 723px;
    z-index: 99;

    .outter-img {
      position: absolute;
      top: -100%;
      left: -100%;
    }
  }
  .canvas {
    position: relative;
    width: 383px;
    height: 723px;
  }
</style>
