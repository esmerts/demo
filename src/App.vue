<template>
  <div class="container">
    <!-- 头部导航栏 -->
    <div class="header">
      <!-- 头部导航栏上半部分 -->
      <div class="header-top">
        <div class="content">
          <div class="left">
            <div class="icon"></div>
            <span>客服热线：400-888-888</span>
          </div>
          <div class="right">
            <span
              >你好，15656955775
              <div class="icon"></div
            ></span>
            <span>新手教程</span>
            <span>常见问题</span>
            <span>意见反馈</span>
          </div>
        </div>
      </div>
      <!-- 头部导航栏下半部分 -->
      <div class="header-bottom">
        <div class="content">
          <div class="left">
            <div class="icon-logo"></div>
            <div class="site-name">
              <span class="name-en">VENUS</span>
              <span class="name-zh">智慧双创服务平台</span>
            </div>
          </div>
          <div class="right">
            <router-link :to="{ name: 'basismsg' }" exact>企业首页</router-link>
            <router-link :to="{ name: 'account' }">账号设置</router-link>
            <router-link :to="{ name: 'message' }"
              >消息
              <div class="msg-count">3</div></router-link
            >
            <span
              ><div class="icon"></div>
              企业用户
              <div class="icon"></div
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <div class="content">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
export default {
  components: {Footer},
};
</script>

<style scopde lang="less">
@import "./styles/var.less";
@import "./styles/common.less";

.container {
  background: @bg-page;
  height: 100%;
  min-height: 100vh;
}

.icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: @gray;
  border-radius: 1px;
  margin: 0 2px;
}

.icon-logo {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: @gray;
  border-radius: 5px;
}

.header {
  .header-top {
    background: @bg;
    .content {
      display: flex;
      justify-content: space-between;
      color: @gray;
      font-size: 12px;
      padding: 15px 0;
      .center-page();
      margin-bottom: 1px;
      .right {
        span {
          padding: 0 5px;
        }
        span:nth-of-type(2)::after,
        span:nth-of-type(3)::after {
          content: "";
          background: @gray-light;
          display: inline-block;
          width: 1px;
          height: 11px;
          transform: translate(5px, 1px);
        }
      }
    }
  }

  .header-bottom {
    background: @bg;
    .content {
      .center-page();
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      .left {
        display: flex;
        .site-name {
          display: flex;
          flex-direction: column;
          margin-left: 5px;
          .name-en {
            font-size: 35px;
            font-weight: bold;
            padding: 0;
            margin: 0;
            line-height: 35px;
            letter-spacing: 1px;
            color: rgb(59, 71, 93);
          }
          .name-zh {
            font-size: 5px;
            line-height: 5px;
            padding: 3px 0;
            letter-spacing: 4px;
            color: @gray;
          }
        }
      }
      .right {
        transform: translateY(14px);
        a {
          padding: 0 10px;
        }
        span {
          padding: 10px 10px;
          border-left: 1px solid @gray-light;
        }
        .router-link-active {
          color: @active;
        }
        .msg-count {
          background-color: red;
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          color: #fff;
          text-align: center;
          margin-left: 2px;
          position: relative;
          z-index: 10;
        }
      }
    }
  }
}

.main {
  .center-page();
}

.footer {
  background: @bg;
  margin-top: 50px;
  .content {
    .center-page();
  }
}
</style>