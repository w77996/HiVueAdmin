<template>
  <el-form ref="LoginFrom" :model="account" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {Message} from 'element-ui'

  export default {
    name: 'Login',
    data() {
      return {
        logining: false,
        account: {
          username: '',
          password: ''
        }
      };
    },
    created: function () {
      var _this = this;
      document.onkeydown = function (e) {
        var key = window.event.keyCode;
        if (key == 13) {
          _this.login();
        }
      }
    },
    methods: {
      login() {
        var _this = this;
        //页面跳转
        if (_this.loginCheck()) {
          this.$axios.get("https://yigou.ketao.com/api/banner/list", {
            params: {
              categoryid: 1
            }
          }).then(function (response) {
            console.log(response.data.status)
          }).catch(function (response) {
            console.log(response)
          })
          //_this.$router.push("/index");
        }
      },
      //登录参数校验
      loginCheck() {
        var _this = this;
        if (!_this.account.username) {
          console.log("username null")
          Message.warning("请输入账号")
          return false;
        }
        if (!_this.account.password) {
          console.log("password null")
          Message.warning("请输入密码")
          return false;
        }
        return true;
      }
    }
  }
</script>


<style>
  body {
    width: 100%;
    height: 100%;
    background: #DFE9FB;
  }

  .login-container {
    width: 350px;
    margin: 0 auto;
  }
</style>
