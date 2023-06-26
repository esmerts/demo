<template>
  <div class="footer-container">
    <!-- 页脚顶部 -->
    <div class="footer-top">
      <div class="item">
        <div class="icon-auth"></div>
        <div class="text">
          <div class="title">商家资质认证</div>
          <div class="desc">严格筛选服务商，提供品质服务</div>
        </div>
      </div>
      <div class="item">
        <div class="icon-auth"></div>
        <div class="text">
          <div class="title">交易过程安全</div>
          <div class="desc">服务完成，再付款给服务商</div>
        </div>
      </div>
      <div class="item">
        <div class="icon-auth"></div>
        <div class="text">
          <div class="title">价格更优惠</div>
          <div class="desc">先领券再消费，为企业带来实惠</div>
        </div>
      </div>
    </div>

    <!-- 页脚中间部分 -->
    <div class="footer-center">
      <div class="left">
        <div class="item">
          <div class="title">关于平台</div>
          <div class="desc">关于我们</div>
          <div class="desc">平台特色</div>
          <div class="desc">法律声明</div>
          <div class="desc">练习方式</div>
        </div>
        <div class="item">
          <div class="title">交易保障</div>
          <div class="desc">安全保障</div>
          <div class="desc">交易流程</div>
          <div class="desc">风险监控</div>
          <div class="desc">信息安全</div>
        </div>
        <div class="item">
          <div class="title">帮助中心</div>
          <div class="desc">新手教程</div>
          <div class="desc">意见反馈</div>
          <div class="desc">常见问题</div>
          <div class="desc">用户协议</div>
        </div>
      </div>
      <div class="right">
        <div class="contact">
          <div class="item">
            <div class="icon-tel"></div>
            <div class="text">
              <div class="title">4006-200-200</div>
              <div class="desc">服务时间：工作日09:00-22:00</div>
            </div>
          </div>
          <div class="item">
            <div class="icon-tel"></div>
            <div class="email">kefu@curqq.cn</div>
          </div>
        </div>
        <div class="qrcode">
          <div class="item">
            <div class="icon-qr"></div>
            <div class="desc">公众号</div>
          </div>
          <div class="item">
            <div class="icon-qr"></div>
            <div class="desc">小程序</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页脚底部 -->
    <div class="footer-bottom">
      <div class="text">皖公网安备 50019002500154 皖ICP备10202274-4号 经营许可证：皖B2-2016034</div>
      <div class="text">Copright 2020 Venus（合肥微青罗网络科技有限公司）版权所有</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.icon-auth {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: @gray;
}

.icon-tel {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: @gray;
}

.icon-qr {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background: @gray;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 2px solid @bg-page;
  .item {
    display: flex;
    .text {
      margin-left: 10px;
      .title {
        font-weight: bold;
        font-size: 20px;
        line-height: 20px;
      }
      .desc {
        font-size: 7px;
        color: gray;
        transform: translateY(3px);
      }
    }
  }
}

.footer-center {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    justify-content: space-between;
    .item {
      flex: 0 0 150px;
      .title {
        font-weight: bold;
        padding-bottom: 10px;
      }
      .desc {
        font-size: 7px;
        color: @gray-light;
        padding: 5px 0;
      }
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    .contact {
      .item {
        display: flex;
        margin-bottom: 10px;
        .text {
          margin-left: 10px;
          .title {
            font-weight: bold;
            font-size: 20px;
            line-height: 20px;
          }
          .desc {
            font-size: 7px;
            color: @gray;
            padding: 5px 0;
          }
        }
        .email {
          font-weight: bold;
          font-size: 20px;
          line-height: 40px;
          margin-left: 10px;
        }
      }
    }
    .qrcode {
      display: flex;
      margin-left: 40px;
      .item {
        margin-left: 40px;
        .desc {
          font-size: 7px;
          color: @gray-light;
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
}

.footer-bottom {
  color: @gray-light;
  text-align: center;
  font-size: 2px;
  padding: 30px 0;
}
</style>