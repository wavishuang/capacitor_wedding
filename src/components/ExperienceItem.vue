<template>
  <div>
    <div class="card-content">
      <div class="company is-size-5 has-text-weight-bold">
        <strong>{{ experience.company }}</strong>
        <span class="ml-2 is-size-6 job-title">{{ experience.jobTitle }}</span>
      </div>
      <div>期間：{{ experience.startDate }} ~ {{ experience.endDate }}</div>
      <div>工作範圍：{{ experience.description }}</div>
      <div class="salary mb-3">
        <ul class="is-flex is-flex-wrap-wrap">
          <li>月薪{{ experience.monthlySalary }}元</li>
          <li>年薪{{ experience.annualSalary }}元</li>
          <li>{{ experience.location }}</li>
        </ul> 
      </div>
      
      <div class="content">
        <div>工作內容：</div>
        <ol class="mt-1 pl-4">
          <li v-for="(job, index) in experience.jobs" :key="index">{{ job }}</li>
        </ol>
      </div>
      <div class="tools">
        <div>使用技術：</div>
        <ul class="is-flex is-flex-wrap-wrap pl-4">
          <li
            v-for="(tool, index) in experience.tools"
            :key="index"
            class="has-text-weight-bold"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * props
 */
  const props = defineProps({
    experience: {
      type: Object,
      required: true
    }
  })
</script>

<style>
.salary ul li:not(:last-child):after {
  content: "|";
  margin: 0 5px;
}

.tools ul li:not(:last-child):after {
  content: "、";
  margin: 0 5px;
}
</style>