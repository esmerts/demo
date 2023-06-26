<template>
  <div class="loading-container">
    <div class="wrapper">
      <div class="loading"></div>
      <div class="des">加载中...</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scopde lang="less">
@import "~@/styles/var.less";

.loading-container {
  width: 100%;
  height: calc(100vh - 200px);
  min-height: 500px;
  background: @bg;
  position: relative;
  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .loading {
      width: 50px;
      height: 50px;
      border: 5px solid @active;
      border-radius: 50%;
      border-right-color: transparent;
      animation: load 1.5s linear infinite;
    }
  }
}

@keyframes load {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>