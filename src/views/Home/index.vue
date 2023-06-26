<template>
  <div class="home-container">
    <div class="aside">
      <router-link :to="{ name: 'basismsg' }">基本信息</router-link>
      <router-link :to="{ name: 'companyMsg' }">企业信息</router-link>
      <router-link :to="{ name: 'authentication' }">实名认证</router-link>
      <router-link :to="{ name: 'changePwd' }">修改密码</router-link>
      <router-link :to="{ name: 'changePhone' }">更变手机号</router-link>
    </div>
    <div class="main-home">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.home-container {
  display: flex;
  justify-content: space-between;
  .aside {
    flex: 0 0 160px;
    background: @bg;
    width: 400px;
    display: flex;
    flex-direction: column;
    height: 210px;
    a {
        padding: 8px 0;
        padding-left: 30px;
        color: @gray;
        font-size: 13px;
    }
    .router-link-exact-active {
        color: @active;
        background: @active-bg;
        position: relative;
    }
    .router-link-exact-active::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 100%;
        background: @active;
        top: 0;
        left: 0;
    }
  }
  .main-home {
    width: 100%;
    .content {
      margin: 20px;
    }
  }
}
</style>