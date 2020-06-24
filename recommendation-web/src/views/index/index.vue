<template>
  <div>
    <div class="login-page">
      <el-form
        ref="elForm"
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="100px"
      >
        <el-row>
          <el-col :push="7">
            <el-form-item label="模型选择" prop="field115">
              <div style="float: left">
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
              </div>
              <div style="float: left;margin-left: 10px">
                <el-button type="primary" @click="addModel()" size="small">
                  新增模型
                </el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-top: 60px">
          <el-form-item label="" >
            <router-link :to="{ path: '/list/predictionScore' }">
              <el-button
                style="width: 200px;height:60px"
                type="primary"
                icon="el-icon-search"
                size="medium"
              >
                预测分数情况
              </el-button>
            </router-link>
          </el-form-item>
          <el-form-item label="" >
            <router-link :to="{ path: '/list/recommendInjection' }">
              <el-button
                style="width: 200px;height:60px"
                type="primary"
                icon="el-icon-search"
                size="medium"
              >
                推荐油藏参数
              </el-button>
            </router-link>
          </el-form-item>
          <el-form-item label="" >
            <router-link :to="{ path: '/list/recommendReservoir' }">
              <el-button
                style="width: 200px;height:60px"
                type="primary"
                icon="el-icon-search"
                size="medium"
              >
                推荐注剂参数
              </el-button>
            </router-link>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogOrgVisible">
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
  handleChange(file:any, fileList:any){
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
<style rel="stylesheet/scss" lang="scss" scoped>
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
</style>
