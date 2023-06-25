<template>
  <div class="left-side">
    <div class="is-family-monospace">
      <div class="title is-size-5">
        聯絡方式 <span class="is-size-6 ml-2">CONTACT</span>
      </div>
      <div class="contact-info">
        <ul class="mt-6">
          <li class="flex">
            <span class="icon mr-3">
              <font-awesome-icon :icon="['fas', 'phone']"/>
            </span>
            <a href="tel:+886987567627" class="has-text-white has-text-weight-bold">0987567627</a>
          </li>
          <li class="flex">
            <span class="icon mr-3">
              <font-awesome-icon :icon="['fas', 'envelope']"/>
            </span>
            <a 
              href="mailto:wavishuang@gmail.com"
              class="has-text-white has-text-weight-bold"
            >
              wavishuang@gmail.com
            </a>
          </li>
          <li class="flex">
            <span class="icon mr-3">
              <font-awesome-icon :icon="['fas', 'home']"/>
            </span>
            <a 
              href="https://www.google.com/maps/place/%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%92%8C%E5%8D%80%E4%B8%AD%E5%B1%B1%E8%B7%AF%E4%B8%89%E6%AE%B5/@25.007313,121.4726502,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a8276ab2d179:0x3c6433646d322b98!8m2!3d25.007313!4d121.4752305!16s%2Fg%2F1tcvrk24?authuser=0&entry=ttu"
              class="has-text-white has-text-weight-bold"
            >
              新北市中和區中山路三段
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="is-family-monospace">
      <div class="title is-size-5">
        專業技能 <span class="is-size-6 ml-2">SKILL</span>
      </div>
      <div class="contact-info">
        <ul class="mt-6">
          <li class="block has-text-weight-bold">
            <div class="is-size-5">
              前端技能：
            </div>
            <div class="pl-5">
              HTML, CSS, SCSS, JavaScript, jQuery, Vue2, Vue3, Pinia, React
            </div>
          </li>
          <li class="block has-text-weight-bold">
            <div class="is-size-5">
              後端技能：
            </div>
            <div class="pl-5">
              PHP, Codeigniter
            </div>
          </li>
          <li class="block has-text-weight-bold">
            <div class="is-size-5">
              資料庫：
            </div>
            <div class="pl-5">
              MySQL
            </div>
          </li>
          <li class="block has-text-weight-bold">
            <div class="is-size-5">
              其他：
            </div>
            <div class="pl-5">
              Git, docker, Linux基本指令
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="is-family-monospace">
      <div class="title is-size-5">
        專業證照 <span class="is-size-6 ml-2">CERTIFICATION</span>
      </div>
      <div class="contact-info">
        <ul class="mt-6">
          <li class="block has-text-weight-bold">
            <div class="is-size-5">
              網路相關：
            </div>
            <div class="pl-5">
              CCNA
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.left-side {
  /* background-color: #4aa43c; */
  background-color: #00263d;
  color: #fff;
  /* border-radius: 0 1.5rem 1.5rem 0; */
  padding-bottom: 60px;
}

.left-side .title {
  /* background-color: #00431b; */
  background-color: #fff;
  color: #00263d;
  width: 330px;
  height: 52px;
  line-height: 52px;
  padding-left: 30px;
  border-radius: 0 26px 26px 0;
  display: flex;
  align-items: baseline;
}

.left-side .contact-info {
  padding-left: 30px;
}

.contact-info .icon {
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
}

.contact-info ul {
  padding-bottom: 40px;
}

.contact-info ul li.flex {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>