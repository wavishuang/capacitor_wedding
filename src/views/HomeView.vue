<template>
  <div 
    class="home"
  >
    <div class="home-bg"></div>

    <div class="home-wrapper">
      <Navbar />

      <div class="home-inner">
        <div class="content">
          <h2 class="title">WEDDING PASS</h2>

          <div class="options">
            <div class="option">
              <div class="line"></div>
              <div class="img-cover icon01">
                <img src="@/assets/icon01-1.png" />
              </div>
              <div class="option-text">輕鬆<br class="mobile-shown" />管理</div>
            </div>
            <div class="option">
              <div class="line"></div>
              <div class="img-cover icon02">
                <img src="@/assets/icon02-1.png" />
              </div>
              <div class="option-text">提領<br class="mobile-shown" />喜餅</div>
            </div>
            <div class="option">
              <div class="line"></div>
              <div class="img-cover icon03">
                <img src="@/assets/icon03-1.png" />
              </div>
              <div class="option-text">QRCode<br class="mobile-shown" />快速簽到</div>
            </div>
          </div>
        </div>

        <div class="content-footer">
          <button type="button" class="btn btn-link">
            設計專屬於你的祝福
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
  /**
  * imports
  */
    import Navbar from '@/components/Navbar.vue'
    import LeftSide from '@/components/LeftSide.vue'
    import RightSide from '@/components/RightSide.vue'
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

  .mobile-shown {
    display: none;
  }

  .home {
    width: 100%;
    height: 100%;
    padding: 67px 5.15625% 97px;
    min-height: calc(38vw + 105px + 2.86458vw + 2.60416vw);

    .home-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #3B3B3B 0% 0% no-repeat border-box;
      opacity: 0.44;
    }

    .home-wrapper {
      position: relative;
      z-index: 1;
      height: calc(100vh - 67px - 97px);
    }
  }

  .home-inner {
    border: 3px solid #fff;
    border-radius: 16px;
    height: calc(100% - 2.86458vw - 2.60416vw);
    padding: 6.97916vw 0 0; //3.125vw 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 38vw;

    .content {
      width: 78%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 0 0 15px;

      .title {
        font-family: 'Libre Baskerville';
        font-weight: 600;
        font-size: 3.90625vw;
        line-height: 4.79166vw;
        letter-spacing: 3.75px;
        color: #F5F5F4;
        opacity: 1;
        text-align: center;
      }
      
      .options {
        display: flex;
        justify-content: space-around;
        border-top: 3px solid #fff;
        padding: 2.39583vw 0 0;

        .option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 11.9791vw;
          justify-content: space-between;
          .line {
            width: 3px;
            height: 1.171875vw;
            background-color: #fff;
            min-height: 13.5px;
          }
          .img-cover {
            &.icon01 {
              width: 2.8125vw;
              min-width: 18px;
            }
            &.icon02 {
              width: 4.16667vw;
              min-width: 26px;
            }
            &.icon03 {
              width: 5vw;
              min-width: 32px;
            }
            img {
              width: 100%;
            }
          }

          .option-text {
            font-family: 'Noto Sans TC';
            font-weight: bold;
            font-size: 1.40625vw;
            line-height: 1.875vw;
            letter-spacing: 2.7px;
            color: #FFFFFF;
            opacity: 1;
          }
        }
      }
    }

    .content-footer {
      margin: 3.90625vw 0;
      .btn.btn-link {
        width: 26.40625vw;
        height: 5.3125vw;
        /* UI Properties */
        background: #F4F4F590 0% 0% no-repeat padding-box;
        border: 2px solid #FFFFFF;
        border-radius: 0px 2.86458vw;
        opacity: 1;
        font-family: 'Noto Sans TC';
        font-weight: bold;
        font-size: 1.92708vw;
        line-height: 2.55208vw;
        letter-spacing: 3.7px;
        color: #4C4053;
        min-width: 260px;
        min-height: 44px;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .home {
      padding: 0;

      .home-wrapper {
        height: 100%;
        padding-bottom: 8.7vw;
      }
    }

    .home-inner {
      width: calc(100vw - 10vw);
      margin: 6.4vw auto 0;
      height: calc(100vh - 65px - 6.4vw - 8.7vw);
      border-width: 1px;
      padding: 0;

      .content {
        flex: 2;
        justify-content: flex-end;
        .title {
          font-size: 22px;
          line-height: 27px;
        }
        .options {
          border-width: 1px;
          .option {
            .line {
              width: 1px;
            }
            .option-text {
              font-size: 16px;
            }
          }
        }
      }

      .content-footer {
        flex: 1;
        display: flex;
        align-items: center;
        .btn.btn-link {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .mobile-shown {
      display: block;
    }

    .home-inner {
      .content {
        width: 79%;
        .options {
          .option {
            height: 118px;
            .img-cover {
              &.icon01,
              &.icon02,
              &.icon03 {
                &+.option-text {
                  width: 100%;
                  line-height: 21px;
                  text-align: center;
                }
              }
            }
          }
        }
      }

      .content-footer {
        .btn.btn-link {
          border-radius: 0 20px;
        }
      }
    }
  }
</style>


