<template>
  <div>
    <h2 style="text-align: center">油藏区块推荐</h2>
    <el-row>
      <el-col :push="1" :span="22">
        <el-card v-loading="loading">
          <el-button style="float: right;margin-left: 10px" @click="searchQuery()" type="primary">查询</el-button>
          <el-input
            style="width:150px;float: right;margin-bottom: 10px;" v-model="query.score"
          ></el-input>
          <span style="float: right;line-height: 50px">分数查询：</span>
          <el-button v-if="submit.deleted === 1"  @click="addData()" type="primary">新增</el-button>
          <el-button v-if="submit.deleted === 1"  @click="generate()" type="primary">生成分数</el-button>
          <el-button v-if="submit.deleted !== 1"  @click="download()" type="primary">下载</el-button>
          <el-button @click="back()">返回</el-button>

          <div  v-if="submit.deleted === 1"  style="float: left;margin-right: 10px">
            <el-upload
                    ref="upload"
                    :show-file-list="false"
                    :on-success="handleSuccess"
                    :headers="header"
                    :data="{createId: user.id, submitId: $route.params.id}"
                    :before-upload="beforeUpload"
                    action="/api/upload/excel">
              <el-button slot="trigger" type="primary" >导入Excel</el-button>
            </el-upload>
          </div>


          <el-table :data="tableData" :height="460" :max-height="460">
            <el-table-column
                    align="center"
                    type="index"
                    label="序号"
                    width="100">
            </el-table-column>
            <el-table-column align="center" label="油藏参数">
              <el-table-column
                align="center"
                prop="cycle"
                label="周期"
                width="120"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="perforatingSection"
                label="射孔并段"
                width="120"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="perforationThickness"
                label="射孔厚度"
                width="300"
              >
              </el-table-column>
              <el-table-column align="center" prop="perforationLayer" label="射孔层数">
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="perforationPermeability"
                      label="射孔段渗透率"
                      width="120"
              >
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="porosityPerforationSection"
                      label="射孔段孔隙度"
                      width="300"
              >
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="reservoirThickness"
                      label="油藏厚度"
                      width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="注剂参数">


              <el-table-column align="center" prop="noteType" label="注剂类型">
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="injectionPattern"
                      label="注入方式"
                      width="120"
              >
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="noteDose"
                      label="注剂量"
                      width="120"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="注气参数">


              <el-table-column
                align="center"
                prop="steamInjectionIntensity"
                label="注汽强度"
                width="300"
              >
              </el-table-column>
              <el-table-column align="center" prop="numberDays" label="注入天数">
              </el-table-column>
              <el-table-column align="center" prop="oilPressure" label="油压">
              </el-table-column>
              <el-table-column align="center" prop="periodicSteamInjection" label="周期注汽量">
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="生产参数">
              <el-table-column
                      align="center"
                      prop="soakTime"
                      label="焖井时间"
                      width="120"
              >
              </el-table-column>
              <el-table-column
                      align="center"
                      prop="productionCycle"
                      label="周期生产"
                      width="300"
              >
              </el-table-column>
            </el-table-column>
            <el-table-column fixed="right" align="center" prop="score" label="分数">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog  :modal-append-to-body="false" :visible.sync="dialogOrgVisible">
      <el-card class="box-card">
        <div class="text" style="max-height: 350px;overflow: auto">
          <el-form label-width="150px" ref="model" :model="formData">
            <el-col :span="11">
              <el-form-item label="周期： " prop="name">
                <el-input v-model="formData.cycle" />
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="射孔并段： " prop="name">
                <el-input v-model="formData.perforatingSection" />
              </el-form-item>
            </el-col>
          <el-col :span="11">
            <el-form-item label="射孔厚度： " prop="name">
              <el-input v-model="formData.perforationThickness" />
            </el-form-item>
          </el-col>
            <el-col :span="11">
              <el-form-item label="射孔层数： " prop="name">
              <el-input v-model="formData.perforationLayer" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="油藏厚度： " prop="name">
              <el-input v-model="formData.reservoirThickness" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="射孔段渗透率： " prop="name">
              <el-input v-model="formData.perforationPermeability" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="射孔段孔隙度： " prop="name">
              <el-input v-model="formData.porosityPerforationSection" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="注剂类型： " prop="name">
              <el-input v-model="formData.noteType" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="注入方式： " prop="name">
              <el-input v-model="formData.injectionPattern" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="注剂量： " prop="name">
              <el-input v-model="formData.noteDose" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="注汽强度： " prop="name">
              <el-input v-model="formData.steamInjectionIntensity" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="注入天数： " prop="name">
              <el-input v-model="formData.numberDays" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="油压： " prop="name">
              <el-input v-model="formData.oilPressure" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="周期注汽量： " prop="name">
              <el-input v-model="formData.periodicSteamInjection" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="焖井时间： " prop="name">
              <el-input v-model="formData.soakTime" />
            </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="周期生产： " prop="name">
              <el-input v-model="formData.productionCycle" />
            </el-form-item>
            </el-col>
          </el-form>
        </div>
      </el-card>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickNode()">确 定</el-button>
        <el-button @click="handleClose">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import {namespace} from "vuex-class";
  import {Component, Vue} from "vue-property-decorator";
  import {getToken} from "@/api/auth";
  import { list, add, generate } from "@/api/predictionScore";
  import { get } from "@/api/submit";

  const somemodule = namespace("user")
  @Component({
    name: "index"
  })
  export default class extends Vue {
    @somemodule.State(state => state.user) user: any;
    private tableData = []
    private back() {
      window.history.go(-1);
    }
    private query = {
      score: 0
    }
    private loading = false;
    header =  {
      'token': getToken()
    }
    private submit = {

    }
    formData = {
      cycle: "12",
      perforatingSection: "12",
      perforationThickness: "12",
      perforationLayer: "12",
      reservoirThickness: "12",
      perforationPermeability: "12",
      porosityPerforationSection: "12",
      noteType: "12",
      injectionPattern: "12",
      noteDose: "12",
      steamInjectionIntensity: "12",
      numberDays: "12",
      oilPressure: "12",
      periodicSteamInjection: "12",
      soakThePressure: "12",
      soakTime: "12",
      productionCycle: "12",
      periodicLiquidProduction: "12",
      cycleOilProduction: "12",
      periodicYield: "12",
      submitId: ""
    }
    dialogOrgVisible = false
    private handleSuccess(response:any, file:any, fileList:any) {
      this.list()
    }
    beforeUpload(file:any) {
      // 取文件大小，限制文件大小超过1mb
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: '上传的Excel文件不能大于1mb.',
        type: 'warning'
      })
      return false
    }
    list() {
      this.loading = true
      list<any>({submitId : this.$route.params.id, score: this.query.score}).then(res => {
        this.tableData = res.data
        this.loading = false
      })
    }
    addData() {
      this.dialogOrgVisible = true
    }
    searchQuery() {
      this.list()
    }
    clickNode() {
      add(this.formData).then(res => {
        this.list()
      })
      this.dialogOrgVisible = false
    }
    generate() {
      if (this.tableData.length > 0) {
        generate<[]>(this.$route.params.id).then(res => {
          this.tableData = res.data
          get<{}>(this.$route.params.id).then(res => {
            this.submit = res.data
          })
        })
      } else {
        this.$message({
          message: '请新增数据',
          type: 'warning'
        })
      }

    }
    download() {
      window.open("/api/download/" + this.$route.params.id + "?score=" + this.query.score)
    }
    handleClose() {
      this.dialogOrgVisible = false
    }
    created() {
      this.formData.submitId = this.$route.params.id
      get<{}>(this.$route.params.id).then(res => {
        this.submit = res.data
      })
      this.list()
    }
  }
</script>
