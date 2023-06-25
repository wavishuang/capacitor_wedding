<template>
  <div class="right-side">
    <section class="is-family-monospace mb-6">
      <div class="section-title is-flex is-align-items-center has-text-weight-bold">
        <div class="circle-dot mr-3"><div></div></div>
        <div class="is-flex is-align-items-baseline">自傳<span class="ml-3">AUTOBIOGRAPHY</span></div>
      </div>
      <div class="section-content mt-5">
        <div class="card">
          <div class="card-content is-size-6" v-html="autobiography"></div>
        </div>
      </div>
    </section>
    <section class="is-family-monospace">
      <div class="section-title is-flex is-align-items-center has-text-weight-bold">
        <div class="circle-dot mr-3"><div></div></div>
        <div class="is-flex is-align-items-baseline">工作經歷<span class="ml-3">WORK EXPERIENCE</span></div>
      </div>
      <div class="section-content mt-5">
        <ExperienceItem 
          v-for="experience in experiences" 
          class="card mb-5 is-size-6"
          :experience="experience"
          :key="experience.id" 
        />
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * imports
 */
  import { ref } from 'vue'
  import ExperienceItem from '@/components/ExperienceItem.vue'

/**
 * autobiography
 */
  const autobiography = ref(`我做過許多行業：服務業、倉儲、便利商店、快遞、老闆...，直到36歲才回歸本行\
  ，因為入行的晚，所以也需要比其他人更努力。<br />\
  一開始就在上市公司待了2年，覺得磨練夠了（其實是因為薪水太低了）就出來闖一闖，為了學習自行架設網站，有一段時間是自行接案在家工作。<br />\
  為了維持生活，所以就職的公司幾乎都是新創或遊戲公司，也正是因為如此，每每專案完成或新創資金用罄都得再次尋找下一份工作，\
  也造就了我從事過多種類型的網站：\
  <span class="has-text-danger">形象網站</span>、\
  <span class="has-text-danger">社群</span>、\
  <span class="has-text-danger">電商</span>、\
  <span class="has-text-danger">遊戲</span>、\
  <span class="has-text-danger">管理後台</span>...。<br />
  ***** 每個專案我都有把它完成，而且幾乎每一家公司都只有<span class="has-text-danger">一個</span>前端（除了遊戲公司）。*****`)

/**
 * experiences
 */
  const experiences = ref([
    {
      id: 'vlink',
      startDate: '2021/10',
      endDate: '2023/05',
      company: '維林軟體有限公司',
      jobTitle: '資深前端工程師',
      monthlySalary: 83000,
      annualSalary: 1178600,
      location: '台北市內湖區',
      description: '論壇類型社群網站前後台',
      jobs: [
        '前台網頁功能撰寫、優化與維護。',
        '管理後台網頁功能撰寫、優化與維護。',
        '打包前台APP（iOS, Android）。',
        'API串接。',
      ],
      tools: [
        'HTML', 
        'SCSS', 
        'JavaScript', 
        'jQuery', 
        'Vue2', 
        'Vue3', 
        'Capacitor.js',
        'Git',
      ]
    },
    {
      id: 'katech',
      startDate: '2020/06',
      endDate: '2021/08',
      company: '嘉德軟體有限公司',
      jobTitle: '資深前端工程師',
      monthlySalary: 75000,
      annualSalary: 975000,
      location: '台北市信義區',
      description: '遊戲APP、遊戲Web、網站管理後台',
      jobs: [
        '前台Wrap功能撰寫、修改與維護。',
        '管理後台網頁功能撰寫、修改與維護。',
        'API資料串接。',
      ],
      tools: [
        'HTML', 
        'SCSS', 
        'JavaScript', 
        'Vue2', 
        'React', 
        'PHP',
        'Git',
      ]
    },
    {
      id: 'molife',
      startDate: '2018/06',
      endDate: '2020/02',
      company: '行冠企業股份有限公司',
      jobTitle: '資深前端工程師',
      monthlySalary: 66600,
      annualSalary: 932400,
      location: '台北市信義區',
      description: '電商網站前台、活動網頁、裕隆相關企業形象網站製作',
      jobs: [
        '網頁切版。',
        '前端網頁程式。',
        'API資料串接。',
      ],
      tools: [
        'HTML', 
        'SCSS', 
        'JavaScript', 
        'jQuery', 
        'Vue2', 
      ]
    },
    {
      id: 'ejay',
      startDate: '2017/06',
      endDate: '2018/05',
      company: '翊傑資訊',
      jobTitle: '全端工程師',
      monthlySalary: 70000,
      annualSalary: 980000,
      location: '台北市大安區',
      description: '嘉裕西服電商網站前台、第三方量測系統數據串接、數據計算',
      jobs: [
        '網頁切版。',
        '前端網頁程式。',
        'API資料串接。',
        '伺服器架設。',
        '第三方資料串接。'
      ],
      tools: [
        'HTML', 
        'SCSS', 
        'JavaScript', 
        'jQuery', 
        'Vue2',
        'PHP',
        'Codeigniter',
        'MySQL'
      ]
    },
    {
      id: 'create_potential',
      startDate: '2016/07',
      endDate: '2017/04',
      company: '創勢資訊',
      jobTitle: '前端工程師',
      monthlySalary: 67000,
      annualSalary: 938000,
      location: '台北市中正區',
      description: '美食社群平台、海鮮電商平台製作',
      jobs: [
        '網頁切版。',
        '前端網頁程式。',
        'API資料串接。',
      ],
      tools: [
        'HTML', 
        'SCSS', 
        'JavaScript', 
        'jQuery', 
        'Vue',
      ]
    },
    {
      id: 'geli',
      startDate: '2015/10',
      endDate: '2016/06',
      company: '給力行銷股份有限公司（鴻海新創）',
      jobTitle: '前端工程師',
      monthlySalary: 60000,
      annualSalary: 840000,
      location: '台北市中正區',
      description: '興趣媒合社群平台',
      jobs: [
        '網頁切版。',
        '前端網頁程式。',
        'API資料串接。',
      ],
      tools: [
        'HTML', 
        'SCSS',
        'JavaScript', 
        'jQuery',
      ]
    },
    {
      id: 'jet',
      startDate: '2014/11', 
      endDate: '2015/05', 
      company: '捷崇有限公司',
      jobTitle: '前端工程師',
      monthlySalary: 61000,
      annualSalary: 854000,
      location: '台北市內湖區',
      description: '遊戲網站前台',
      jobs: [
        '網頁切版。',
        '前端網頁程式。'
      ],
      tools: [
        'HTML', 
        'STYLUS',
        'JavaScript', 
        'jQuery',
      ]
    },
    {
      id: 'astro',
      startDate: '2014/04',
      endDate: '2015/10',
      company: '泰偉電子股份有限公司',
      jobTitle: '全端工程師',
      monthlySalary: 40000,
      annualSalary: 560000,
      location: '新北市三重區',
      description: '樂透網站製作',
      jobs: [
        '網頁切版。',
        '前端網頁程式。',
        '後台程式撰寫。',
        '串接資料庫。'
      ],
      tools: [
        'HTML', 
        'CSS',
        'JavaScript', 
        'jQuery',
        'PHP',
        'Codeigniter',
      ]
    },
    {
      id: 'unication',
      startDate: '2012/02',
      endDate: '2013/03',
      company: '盟訊實業股份有限公司',
      jobTitle: '研發應用工程師',
      monthlySalary: 40000,
      annualSalary: 560000,
      location: '新北市五股區',
      description: '通訊設備整合通化介面',
      jobs: [
        '分析UI架構。',
        '設計, 撰寫UI介面。',
        '負責資料存取(DB)。',
      ],
      tools: [
        'HTML', 
        'CSS',
        'JavaScript', 
        'jQuery',
        'PHP',
        'MySQL'
      ]
    },
    {
      id: 'yoko-tech',
      startDate: '2011/07',
      endDate: '2013/07',
      company: '悠克電子股份有限公司',
      jobTitle: '軟體工程師',
      monthlySalary: 35000,
      annualSalary: 490000,
      location: '新北市中和區',
      description: 'IPCAM UI介面製作',
      jobs: [
        '分析UI架構。',
        '設計, 撰寫UI介面。',
        '負責資料存取(DB)。',
        '硬體測試介面撰寫',
      ],
      tools: [
        'HTML', 
        'CSS',
        'JavaScript', 
        'PHP',
        'CGI'
      ]
    },
  ])
</script>

<style>
.right-side {
  font-size: 60px;
  background-color: #3f3a3a;
  color: #c8a063;
  /* #c8a063 */
}

.section-title {
  font-size: 25px;
}

.circle-dot {
  display: inline-flex;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #c8a063;
  padding: 2px;
  justify-content: center;
  align-items: center;
}

.circle-dot div {
  width: 24px;
  height: 24px;
  background-color: #c8a063;
  border-radius: 50%;
}

.section-title span {
  font-size: 20px;
}

@media (max-width: 480px) {
  .circle-dot {
    width: 28px;
    height: 28px;
  }

  .circle-dot div {
    width: 20px;
    height: 20px;
  }

  .section-title {
    font-size: 20px;
  }

  .section-title span {
    font-size: 16px;
  }
}
</style>