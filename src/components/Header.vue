<template>
  <header class="columns is-full is-justify-content-flex-start">
    <div class="column is-5">
      <div class="img-cover">
        <img src="@/assets/avatar.png" title="jeff huang" alt="jeff huang" />
      </div>
    </div>
    
    <div class="column is-3 information is-family-monospace">
      <div class="name is-size-3">黃國欽</div>
      <div class="name-en is-size-4">Jeff Huang</div>
      <div class="job-title is-size-3">前端工程師</div>
    </div>
  </header>
</template>

<style scoped>
header {
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 240px;
  /* background-color: #9ccc72; */
  background-color: #fff;
  color: #fff;
}

.img-cover {
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
  margin: 0 auto;
}

.img-cover img {
  width: 100%;
}

.information {
  font-size: 16px;
  /* color: #003f1a; */
  /* color: #9e0c18; */
  color: #00263d;
}

.name-en {
  /* border-bottom: 2px solid #003f1a; */
  border-bottom: 2px solid #00263d;
}

.job-title {
  font-weight: 700;
}

@media (max-width: 768px) {
  .columns {
    display: flex;
    align-items: center;
  }
  .columns .column {
    display: inline-flex;
  }

  .columns .column.information {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  header {
    height: auto;
    padding: 1rem 0;
  }
  .columns .column .img-cover {
    width: 130px;
    height: 130px;
  }

  .columns .column .is-size-3 {
    font-size: 1.5rem !important;
  }

  .columns .column .is-size-4 {
    font-size: 1.2rem !important;
  }
}

</style>