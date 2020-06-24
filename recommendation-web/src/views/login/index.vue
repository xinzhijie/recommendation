<template>
  <div class="login-container">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page"
    >
      <h3 class="title">登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="ruleForm2.username"
          auto-complete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm2.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>

      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="handleSubmit('ruleForm2')"
          :loading="logining"
          >登录</el-button
        >
      </el-form-item>
      <el-link type="primary" @click="register()">用户注册</el-link>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { login } from "@/api/login";
import { IUser } from "@/interface/IUser";


const someModule = namespace('user')

@Component({
  name: "login"
})
export default class extends Vue {

  @someModule.Action("getUserInfo") getUserInfo: any;

  public logining = false;
  public ruleForm2 = { username: "admin", password: "admin" };
  public rules2 = {
    username: [
      { required: true, message: "please enter your account", trigger: "blur" }
    ],
    password: [
      { required: true, message: "enter your password", trigger: "blur" }
    ]
  };
  private handleSubmit(event: string) {
    const el: any = this.$refs[event];
    el.validate((valid: boolean) => {
      if (valid) {
        this.logining = true;
        login<IUser>({
          username: this.ruleForm2.username,
          password: this.ruleForm2.password
        }).then(res => {
          if (res.code === 200) {
            this.logining = false;

            localStorage.setItem("token", res.data.token);

            this.getUserInfo()
            this.$router.push("/");
          } else {
            this.logining = false;
            this.$alert(res.msg, "提示", {
              confirmButtonText: "确定"
            });
          }
        });
      } else {
        return false;
      }
    });
  }

  private register() {
    this.$router.push("/registry");
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  text-align: center;
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
}
</style>
