<template>
  <div class="basis-container">
    <!-- 标题 -->
    <div class="title">基本设置</div>
    <div class="main-content">
      <!-- 头像部分 -->
      <div class="left">
        <div class="icon-avatar"></div>
        <button class="btn">更换头像</button>
      </div>
      <!-- 表单部分 -->
      <div class="right">
        <div class="item">
          <div class="name">用户ID</div>
          <div class="content">800888888</div>
        </div>
        <div class="item">
          <label for="nickname" class="name"
            >昵称
            <input
              type="text"
              id="nickname"
              v-model="form.nickname"
              @change="handleChange"
            />
          </label>
        </div>
        <div class="item">
          <div class="name">手机号</div>
          <div>182 6523 8933<span class="change">变更手机号</span></div>
        </div>
        <div class="item">
          <label for="name" class="name"
            >联系人姓名
            <input
              type="text"
              id="name"
              v-model="form.name"
              @change="handleChange"
            />
          </label>
        </div>
        <div class="item">
          <label for="" class="name"
            >联系人电话
            <input
              type="text"
              id="tel"
              v-model="form.tel"
              @change="handleChange"
            />
          </label>
        </div>
        <div class="item">
          <label for="email" class="name"
            >联系人邮箱
            <input
              type="text"
              id="email"
              v-model="form.email"
              @change="handleChange"
            />
          </label>
        </div>
        <div class="item">
          <label for="address" class="name"
            >联系人地址
            <input
              type="text"
              id="address"
              v-model="form.address"
              @change="handleChange"
            />
          </label>
        </div>
        <button class="btn update" ref="btn">更新基本信息</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nickname: "18265238933",
        name: "张三",
        tel: "15656955775",
        email: "合肥上云网络科技有限公司",
        address: "安徽合肥长江路",
      },
      backups: {}, // form数据的备份
    };
  },
  created() {
    this.backups = JSON.parse(JSON.stringify(this.form)); // 深度克隆
  },
  methods: {
    handleChange(e) {
      // 与created声明周期函数中保存在backups中的数据进行对比，不同时改变按钮的状态
      if (e.target.value === this.backups[e.target.id]) {
        this.$refs.btn.classList.remove("btn-active");
      } else {
        this.$refs.btn.classList.add("btn-active");
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.icon-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: @gray;
}

.btn {
  font-size: inherit;
  margin-top: 20px;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid @gray-light;
  border-radius: 3px;
}

.basis-container {
  background: @bg;
  padding: 40px 60px;
  font-size: 13px;
  width: 100%;
  box-sizing: border-box;
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 70px;
  }
  .main-content {
    width: 500px;
    display: flex;
    .left {
      text-align: center;
      margin-left: 80px;
    }
    .right {
      margin-left: 110px;
      .item {
        margin-bottom: 30px;
        .name {
          margin-bottom: 10px;
          color: @gray;
        }
        input {
          display: block;
          margin-top: 10px;
          width: 340px;
          height: 30px;
          line-height: 30px;
          border: 1px solid @gray-light;
          border-radius: 2px;
          outline-color: @active;
          text-indent: 5px;
        }
        .change {
          color: @active;
          margin-left: 10px;
        }
      }
      .update {
        color: #fff;
        background: @active;
        opacity: 0.38;
        margin-left: 60px;
      }
      .btn-active {
        opacity: 1;
      }
    }
  }
}
</style>