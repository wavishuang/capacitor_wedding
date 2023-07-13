<template>
  <div 
    class="control-group"
  >
    <div class="control">
      <!-- 縣市 -->
      <div class="select mr-2">
        <select 
          v-model="settingCounty"
          @change="changeCounty"
        >
          <option value="0" disabled>縣市</option>
          <option
            v-for="item in countyList"
            :value="item"
            :key="item"
          >{{item.name}}</option>
        </select>
      </div>

      <!-- 區域 -->
      <div class="select">
        <select v-model="settingZone" @change="changeZone">
          <option value="0" disabled>區域</option>
          <option value="1">全部</option>
          <option
            v-for="item in zoneListByCounty"
            :value="item"
            :key="item"
          >{{item.name}}</option>
        </select>
      </div>
    </div>

    <!-- 選擇場所 -->
    <div 
      class="dining-room" 
      v-show="settingCounty !== 0 && diningRoomsByFilter.length > 0"
    >
      <ul>
        <li>
          <div 
            class="card"
            v-for="diningRoom in diningRoomsByFilter" 
            :key="diningRoom.id"
          >
            <div class="card-image">
              <img src="@/assets/restaurant/demo.png" />
            </div>

            <div class="card-content">
              <p class="title" :title="diningRoom.title">{{diningRoom.title}}</p>

              <div class="content" :title="diningRoom.address">
                {{diningRoom.address}}
              </div>

              <div 
                class="dining-room-radio"
                :class="{'selected': selectedDiningRoom === diningRoom.id}" 
                @click="handleSetDiningRoom(diningRoom)"
              ></div>

              <a :href="diningRoom.map" target="_blank" class="more">>查看更多</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  /**
   * imports
  */
    import { ref, computed } from 'vue'
    import { useTWZipCode } from '@/compositions/zipcode.js'
    import { useStoreDiningRoom } from '@/stores/storeDiningRoom.js'

  /**
   * props
  */
    const props = defineProps({
      selectedCounty: {
        type: [Number, Object],
        required: true
      },
      selectedZone: {
        type: [Number, Object],
        required: true
      }
    })

  /**
   * emits
  */
    const emit = defineEmits(['setCounty', 'setZone', 'setLocation'])

  /**
   * store
  */
    const storeDiningRoom = useStoreDiningRoom()
    const diningRooms = computed(() => storeDiningRoom.diningRooms || [])

  /**
   * 
  */
    const { county, zone, countyList, zoneListByCounty } = useTWZipCode()
    const settingCounty = ref(props.selectedCounty)
    const settingZone = ref(props.selectedZone)

    const changeCounty = () => {
      if(settingCounty.value === 0) return

      county.value = settingCounty.value.param
      zone.value = 0
      settingZone.value = 0
      emit('setCounty', settingCounty.value)
      emit('setZone', settingZone.value)
    }

    const changeZone = () => {
      zone.value = settingZone.value == 1 ? parseInt(settingZone.value) : settingZone.value
      emit('setZone', zone.value)
    }

    const diningRoomsByFilter = computed(() => {
      let array = []
      if(settingCounty.value !== 0) {
        array = diningRooms.value.filter(item => item.address.match(settingCounty.value.name))
      }
      if(settingZone.value !== 0) {
        array = array.filter(item => item.address.match(settingZone.value.name))
      }

      return array
    })
    const selectedDiningRoom = ref(0)
    const diningRoomName = computed(() => {
      if(selectedDiningRoom.value !== 0) {
        const obj = diningRooms.value.find(item => item.id === selectedDiningRoom.value)
        return obj.title
      }
      return  ''
    })

    const handleSetDiningRoom = obj => {
      selectedDiningRoom.value = obj.id
      emit('setLocation', obj)
    }
</script>

<style lang="scss" scoped>
  .dining-room {
    margin-top: 1.1979166vw; //23px;
    width: 100%;
    max-height: 22.5520833vw; // 433px;
    overflow-y: auto;
    background-color: #F2F2F0;
    padding: .833333vw 0 0 .7291666vw; // 16px 0 0 14px;

    .card {
      display: flex;
      width: 22.5vw; //432px;
      height: 5.625vw; //108px;
      padding: .2604166vw 0 .390625vw; //5px 0 7.5px;
      border-bottom: 1px solid #70707045;
      box-shadow: none;
      background-color: transparent;
      margin-bottom: 1.06770833vw; // 20.5px;

      .card-image {
        width: 7.5vw; //144px;
        img {
          width: 100%;
        }
      }

      .card-content {
        position: relative;
        padding: 0 0 0 .46875vw; //9px;
        color: #4C4053;
        flex: 1;
        width: calc(100% - 7.5vw);

        .title {
          position: relative;
          top: initial;
          left: initial;
          font: normal normal 600 .9375vw/1.44444 Source Han Serif TW Black;
          letter-spacing: 0.046875vw; // 9px;
          width: calc(100% - 1.5625vw); // calc(100% - 30px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 1.25vw;
        }

        .content {
          width: calc(100% - 1.5625vw);
          font: normal normal 13px/1.3076923 Source Han Serif TW Black;
          letter-spacing: 0.6px;
          margin-bottom: 1.25vw;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .more {
          position: absolute;
          right: 0;
          bottom: 0;
          font: normal normal 600 12px/1.25 Source Han Serif TW Black;
          letter-spacing: 0.5px;
          color: #4C4053;
        }

        .dining-room-radio {
          position: absolute;
          top: 0;
          right: 0;
          width: 1.25vw; // 24px;
          height: 1.25vw; // 24px;
          border: 1px solid #4C4053;
          background-color: transparent;
          border-radius: 50%;
          cursor: pointer;

          &.selected {
            background-color: #4C4053;
          }
        }
      }
    }
  }
</style>