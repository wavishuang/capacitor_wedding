<template>
  <div class="design-menu">
    <div class="options">
      <ul class="menu">
        <li 
          v-for="option in options" 
          :key="option.id" 
        >
          <OptionItem :option="option"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  /**
   * imports
  */
    import IconFace from '@/assets/icons/ic_face.png'
    import IconFaceActive from '@/assets/icons/ic_face-a.png'
    import IconUpload from '@/assets/icons/ic_perm_media.png'
    import IconUploadActive from '@/assets/icons/ic_perm_media-a.png'
    import IconCalendar from '@/assets/icons/ic_event.png'
    import IconCalendarActive from '@/assets/icons/ic_event-a.png'
    import IconLocation from '@/assets/icons/ic_location.png'
    import IconLocationActive from '@/assets/icons/ic_location-a.png'
    import IconCustomer from '@/assets/icons/ic_perm_contact.png'
    import IconCustomerActive from '@/assets/icons/ic_perm_contact-a.png'

    import OptionItem from './OptionItem.vue'

  /**
   * options
  */
    const options = [
      {id: 'name', text: '輸入姓名', icon: IconFace, icon_a: IconFaceActive},
      {id: 'upload', text: '上傳照片', icon: IconUpload, icon_a: IconUploadActive},
      {id: 'calendar', text: '選擇日期', icon: IconCalendar, icon_a: IconCalendarActive},
      {id: 'location', text: '搜尋地點', icon: IconLocation, icon_a: IconLocationActive},
      {id: 'customer', text: '賓客資訊', icon: IconCustomer, icon_a: IconCustomerActive},
    ]
</script>
