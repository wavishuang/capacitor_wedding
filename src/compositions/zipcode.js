import { ref, computed } from 'vue'
import { countyList, zoneList } from '@/utils'

export function useTWZipCode() {
  const county = ref(0)  // param
  const zone = ref(0)

  const zoneListByCounty = computed(() => {
    let array = []
    if(county.value !== 0) {
      array = zoneList.filter(item => item.county === county.value)
    }

    return array
  })
  
  return {
    county, zone, countyList, zoneListByCounty
  }
}