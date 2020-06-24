<template>
  <div class="login-container">
    <div class="login-page">
      <div class="user_logon_develop_ym">
        <div style="font-size: 35px">注册</div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
        >
          <el-form-item label=" 昵 称 : " prop="name">
            <el-input
              type="text"
              v-model="ruleForm.name"
              placeholder="请输入昵称:"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label=" 登 陆 名 : " prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              placeholder="请输入登陆名:"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label=" 密 码 : " prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入密码:"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label=" 确认密码 : " prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              placeholder="请再输入一遍密码:"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label=" 邮 箱 : " prop="email">
            <el-input
              type="text"
              v-model="ruleForm.email"
              placeholder="请输入邮箱:"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即注册</el-button
            >
            <el-button @click="resetForm('ruleForm')"> 重 置</el-button>
            <el-button @click="back()"> 返 回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { registry } from "@/api/login/registry/index";
import { User } from "@/class/User";
@Component({
  name: "registry"
})
export default class extends Vue {
  public checkUsername = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error("用户名不能为空!"));
    }
    callback();
  };
  public email = (rule: any, value: any, callback: any) => {
    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!value) {
      return callback(new Error("邮箱不能为空"));
    }
    setTimeout(() => {
      if (mailReg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的邮箱格式"));
      }
    }, 100);
  };
  public validatePass = (rule: any, value: string, callback: Function) => {
    if (value === "") {
      callback(new Error("请输入密码"));
    } else {
      if (this.ruleForm.checkPass !== "") {
        const el: any = this.$refs.ruleForm;
        el.validateField("checkPass");
      }
      callback();
    }
  };
  public validatePass2 = (rule: any, value: string, callback: Function) => {
    if (value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.ruleForm.password) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };
  public rules: {
    password: { validator: any; trigger: string }[];
    checkPass: { validator: any; trigger: string }[];
    username: { validator: any; trigger: string }[];
    email: { validator: any; trigger: string }[];
  } = {
    username: [{ validator: this.checkUsername, trigger: "blur" }],
    email: [{ validator: this.email, trigger: "blur" }],
    password: [{ validator: this.validatePass, trigger: "blur" }],
    checkPass: [{ validator: this.validatePass2, trigger: "blur" }]
  };
  public ruleForm = new User();
  public back() {
    window.history.go(-1);
  }
  public submitForm(formName: string) {
    const el: any = this.$refs[formName];
    el.validate((valid: boolean) => {
      if (valid) {
        registry(this.ruleForm).then(res => {
          if (res.code === 200) {
            this.$alert("注册成功", "提示", {
              confirmButtonText: "确定"
            });
            this.$router.push("/login");
          } else {
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
  public resetForm(formName: string) {
    const el: any = this.$refs[formName];
    el.resetFields();
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  .login-page {
    text-align: center;
    font-weight: 700;
    line-height: 100px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 800px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .user_logon_develop_ym {
    width: 500px;
    margin: auto;
  }
}
</style>
