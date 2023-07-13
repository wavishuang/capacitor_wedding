<template>
  <div class="control" ref='calendarTrigger'>
    <input class="input" type="text" placeholder="年/月/日" disabled />
  </div>
</template>

<script setup>
  /**
    * imports
  */
    import { ref, onMounted, nextTick } from 'vue'
    import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'

  /**
   * emits
  */
    const emit = defineEmits(['setDate'])

  /**
   * bulma calendar
  */
    const today = ref(new Date())
    const calendarTrigger = ref(null)

    onMounted(() => {
      const calendar = bulmaCalendar.attach(calendarTrigger.value, {
        dateFormat: 'yyyy-MM-dd',
        startDate: today.value,
        minDate: new Date(),
        closeOnSelect: true,
        validateLabel: '確定',
        todayLabel: '今天',
        clearLabel: '清除',
        cancelLabel: '取消',
      })[0]

      nextTick(() => {
        calendar.on('select', e => today.value = new Date(e.timeStamp) || null)
        calendar.on('save', e => emit('setDate', calendar.value()))
      })
    })
</script>