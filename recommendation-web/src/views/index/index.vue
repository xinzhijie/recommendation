<template>
  <div class="content">
    <div class="topbar-title">
      <el-row>
        <el-col :span="24">
          <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  :router="true"
          >
            <el-menu-item key="1" index="/">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item key="2" v-if="user.role === '10'" index="/admin/index">
              <span slot="title">后台</span>
            </el-menu-item>
            <el-menu-item style="margin-left: 550px" key="2" v-if="user.role === '10'" index="/admin/index">
              <b style="font-size: 20px" slot="title">RIPED-稠油开采大数据分析系统</b>
            </el-menu-item>
            <el-menu-item style="float: right" key="3">
              <span slot="title" @click="loginOut()">退出</span>
            </el-menu-item>
            <el-menu-item style="float: right" key="4">
              <span slot="title">{{ user.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <el-row class="tac">
      <el-col class="tacs" :span="3">

        <el-select
                v-model="formData.field115"
                placeholder="请选择模型选择"
                clearable
                @change="change"
                :style="{ width: '100%' }"
        >
          <el-option
                  v-for="(item, index) in field115Options"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
          ></el-option>
        </el-select>

        <el-menu
                style="height: 2000px"
                default-active="2"
                class="el-menu-vertical-demo"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
`
          <el-menu-item @click="addModel()" >
            <i class="el-icon-setting"></i>
            <span slot="title">新增模型</span>
          </el-menu-item>

            <router-link :to="{ path: '/list/predictionScore'}" >
              <el-menu-item index="2">
                <i class="el-icon-setting"></i>
                <span slot="title">注采效果评价</span>
              </el-menu-item>
            </router-link>

            <router-link :to="{ path: '/list/recommendInjection'}" >
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">油藏区块推荐</span>
              </el-menu-item>
            </router-link>
            <router-link :to="{ path: '/list/recommendReservoir'}" >
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">推荐注剂参数</span>
              </el-menu-item>
            </router-link>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view/>
      </el-col>
    </el-row>
    <el-dialog :modal-append-to-body="false"  :visible.sync="dialogOrgVisible">
      <el-card class="box-card">
        <div class="text" style="max-height: 40em;overflow: auto">
          <el-form ref="model" :model="formModel" :rules="rulesModel">
            <el-form-item prop="name">
              模型名称： <el-input v-model="formModel.name" />
            </el-form-item>
            <el-form-item prop="fileSize">
              <el-upload
                      ref="upload"
                      :auto-upload="false"
                      :show-file-list="false"
                      :on-success="handleSuccess"
                      :headers="header"
                      :data="{createId: user.id, name: formModel.name}"
                      :on-change="handleChange"
                      action="/api/trainingModel/upload">
                {{ fileName }}
                <el-button slot="trigger" size="small" type="primary" >选取文件</el-button>
              </el-upload>
            </el-form-item>

          </el-form>
        </div>
      </el-card>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="clickNode()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getTrainingModel } from "@/api/model/index"
import { namespace } from "vuex-class";
import { getToken } from "@/api/auth";

const somemodule = namespace("user")
@Component({
  name: "index"
})
export default class extends Vue {
  @somemodule.State(state => state.user) user: any;
  @somemodule.Action("setModel") setModel: any;
  @somemodule.Action("removeUser") removeUser: any;
  @somemodule.Action("setModelInfo") setModelInfo: any;

  public formData = {
    field115: "",
  };
  public formModel = {
    name: ""
  }
  public fileName = ""
  private dialogOrgVisible = false
  private rules = {
    field115: [
      {
        required: true,
        message: "请选择模型选择",
        trigger: "change"
      }
    ]
  };
  handleChange(file: any, fileList: any){
    if (fileList.length > 1) {
      fileList.splice(0, 1);
    }
    this.fileName = fileList[0].name
    this.$refs.model.clearValidate('fileSize');
  }
  public fileSizeValidate = (rule: any, value: string, callback: Function) => {
    if (this.$refs.upload.uploadFiles.length === 0) {
      callback(new Error("请上传文件"));
    } else {
      callback();
    }
  };
  private loginOut() {
    localStorage.removeItem("token");
    this.removeUser('user')
    this.$router.push("/login");
  }
  private rulesModel = {
    name: [
      {
        required: true,
        message: "模型名称必填",
        trigger: "blur"
      }
    ],
    fileSize: [{ validator: this.fileSizeValidate, trigger: "blur" }]
  }


  header =  {
    'token': getToken()
  }
  private handleSuccess(response:any, file:any, fileList:any) {
    this.getList()
  }
  private field115Options:any = {
    name: ""
  }
  private addModel() {
    this.fileName = ""
    this.formModel.name = ""
    this.dialogOrgVisible = true
  }
  private handleClose() {
    this.dialogOrgVisible = false
  }
  private uploadFile() {
    this.$refs.upload.submit()
  }
  change() {
    this.field115Options.forEach((item:any) => {
      if (item.id === this.formData.field115) {
        this.setModelInfo(item)
      }
    })
    this.setModel(this.formData.field115)
  }
  private clickNode() {
    const el: any = this.$refs["model"];
    el.validate((valid: boolean) => {
      if (valid) {
        this.uploadFile()
        this.dialogOrgVisible = false
      }
    })
  }
  private getList() {
    getTrainingModel({createId : this.user.id}).then(res => {
      this.field115Options = res.data
    })
  }
  created() {
    this.formData.field115 = this.user.model
    this.getList()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.login-page {
  text-align: center;
  font-weight: 700;
  border-radius: 5px;
  margin: 100px auto;
  width: 1000px;
  height: 500px;
  padding: 50px 50px 15px;
  background: #fff;
  box-shadow: 0 0 25px #cac6c6;
}
.tacs {
  .el-input__inner {

    background-color: #535c64;
    color: white;
  }
}

.content{
  width: 100%;
  position: fixed;
}
.topbar-title {
 .el-menu {
   background-color: #3e3d68 !important;
 }
 .el-menu-demo > .el-menu-item {
   color: #fff !important;
   padding: 0 30px !important;
 }
 .el-menu-item:hover {
   background: rgba(190, 190, 190, 0.5) !important;
 }
 .el-menu-item:focus {
   background: rgba(190, 190, 190, 0.5) !important;
 }
 .el-menu-item {
   border-bottom: none !important;
 }
 .el-menu-item.is-active {
   background: rgba(190, 190, 190, 0.5) !important;
 }
}

</style>
