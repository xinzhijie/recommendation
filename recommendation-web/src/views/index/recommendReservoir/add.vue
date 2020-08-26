<template>
  <div style="padding: 0 0 0 0">
    <div style="text-align: center">
      <h2>推荐注剂</h2>

    </div>

    <el-row>
      <el-col :push="1" :span="22">
        <el-card>
          <el-row style="margin-bottom: 50px" >
            <el-checkbox-group :disabled="disabled" v-model="checkList">
              <el-col :span="8">
                <el-checkbox label="injectionPattern" style="margin-right: 10px">注入方式</el-checkbox>
                <span class="font16">范围：</span> <el-input
                  class="input16"
                  :disabled="disabled"
                  @input="inputValue(rangeInjectionPattern.minNum, 'rangeInjectionPattern', 'minNum')"
                  @blur="inputValue(rangeInjectionPattern.minNum, 'rangeInjectionPattern', 'minNum')"
                  v-model="rangeInjectionPattern.minNum"
                  size="mini"/>-
                <el-input
                    class="input16"
                    :disabled="disabled"
                    @input="inputValue(rangeInjectionPattern.maxNum, 'rangeInjectionPattern', 'maxNum')"
                    @blur="inputValue(rangeInjectionPattern.maxNum, 'rangeInjectionPattern', 'maxNum')"
                    v-model="rangeInjectionPattern.maxNum"
                    size="mini"/>
                <span class="font16">步长：</span> <el-input
                  class="input16"
                  :disabled="disabled"
                  v-model="rangeInjectionPattern.step"
                  size="mini"/>
              </el-col>
              <el-col :span="8">
                <el-checkbox label="noteType" style="margin-right: 10px">注剂类型</el-checkbox>
                <span class="font16">范围：</span> <el-input
                  :disabled="disabled"
                  class="input16"
                  v-model="rangeNoteType.minNum"
                  @input="inputValue(rangeNoteType.minNum, 'rangeNoteType', 'minNum')"
                  @blur="inputValue(rangeNoteType.minNum, 'rangeNoteType', 'minNum')"
                  size="mini"/>-
                <el-input
                    :disabled="disabled"
                    class="input16"
                    @input="inputValue(rangeNoteType.maxNum, 'rangeNoteType', 'maxNum')"
                    @blur="inputValue(rangeNoteType.maxNum, 'rangeNoteType', 'maxNum')"
                    v-model="rangeNoteType.maxNum"
                    size="mini"/>
                <span class="font16">步长：</span> <el-input
                  :disabled="disabled"
                  class="input16"
                  v-model="rangeNoteType.step"
                  size="mini"/>
              </el-col>
              <el-col :span="8">
                <el-checkbox label="noteDose" style="margin-right: 10px">注剂量</el-checkbox>
                <span class="font16">范围：</span> <el-input
                  class="input16"
                  :disabled="disabled"
                  @input="inputValue(rangeNoteDose.minNum, 'rangeNoteDose', 'minNum')"
                  @blur="inputValue(rangeNoteDose.minNum, 'rangeNoteDose', 'minNum')"
                  v-model="rangeNoteDose.minNum"
                  size="mini"/>-
                <el-input
                    class="input16"
                    :disabled="disabled"
                    @input="inputValue(rangeNoteDose.maxNum, 'rangeNoteDose', 'maxNum')"
                    @blur="inputValue(rangeNoteDose.maxNum, 'rangeNoteDose', 'maxNum')"
                    v-model="rangeNoteDose.maxNum"
                    size="mini"/>
                <span class="font16">步长：</span> <el-input
                  class="input16"
                  :disabled="disabled"
                  v-model="rangeNoteDose.step"
                  size="mini"/>
              </el-col>
            </el-checkbox-group>
          </el-row>
          <el-button v-if="submit.deleted === 1"  @click="check()" type="primary">确定</el-button>
          <el-button v-if="submit.deleted === 1" style="float: right"   @click="addData()" type="primary">新增</el-button>
          <el-button v-if="submit.deleted === 1" style="float: right"   @click="generate()" type="primary">生成推荐</el-button>
          <el-button v-if="submit.deleted !== 1"  style="float: right"  @click="download()" type="primary">下载</el-button>
          <el-button @click="back()" style="float: right" >返回</el-button>
          <div  v-if="submit.deleted === 1"  style="float: right;margin-right: 10px">
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
          <el-table style="margin-top: 20px" :data="tableData" :height="460" :max-height="460">
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
              <el-table-column v-if="!noteType" align="center" prop="noteType" label="注剂类型">
              </el-table-column>
              <el-table-column
                  align="center"
                  prop="injectionPattern"
                  label="注入方式"
                  v-if="!injectionPattern"
                  width="120"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  v-if="!noteDose"
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
            <el-table-column v-if="noteType" fixed="right" align="center" prop="noteType" label="注剂类型">
            </el-table-column>
            <el-table-column v-if="injectionPattern" fixed="right" align="center" prop="injectionPattern" label="注入方式">
            </el-table-column>
            <el-table-column v-if="noteDose" fixed="right" align="center" prop="noteDose" label="注剂量">
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
  import { get, updateSubmit } from "@/api/submit";

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
    header =  {
      'token': getToken()
    }
    private submit = {
    }
    noteDose = false
    injectionPattern = false
    noteType = false
    checkList = []
    disabled = false
    rangeInjectionPattern = {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangeNoteDose = {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangeNoteType = {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    loading = false
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
      list<any>({submitId : this.$route.params.id}).then(res => {
        this.tableData = res.data
        this.loading = false
      })
    }
    addData() {
      this.dialogOrgVisible = true
    }
    clickNode() {
      add(this.formData).then(res => {
        this.list()
      })
      this.dialogOrgVisible = false
    }
    generate() {
      generate<[]>(this.$route.params.id, 'recommendReservoir',{predict: this.submit.predict}).then(res => {
        this.tableData = res.data
        get<{}>(this.$route.params.id).then(res => {
          this.submit = res.data
          this.submit.predict = JSON.parse(decodeURIComponent(this.submit.predict))
          this.submit.predict.forEach(item => {
            if (item != '') {
              this.checkList.push(item.name)
              this.check1(item)
            }
          })
          if (this.checkList.length > 0) {
            this.disabled = true
          }
        })
      })
    }
    handleClose() {
      this.dialogOrgVisible = false
    }
    created() {
      this.formData.submitId = this.$route.params.id
      get<{}>(this.$route.params.id).then(res => {
        this.submit = res.data
        this.submit.predict = JSON.parse(decodeURIComponent(this.submit.predict))
        this.submit.predict.forEach(item => {
          if (item != '') {
            this.checkList.push(item.name)
            this.check1(item)
          }
        })
        if (this.checkList.length > 0) {
          this.disabled = true
        }
      })
      this.list()
    }
    inputValue(value:any, col:any, name:any){
      const numReg = /^[0-9.]*$/
      const numRe = new RegExp(numReg)
      if(!numRe.test(value)) {
        Vue.set(this[col], name, 0)
      }
    }
    check() {
      const checkList:any = []
      this.checkList.forEach(item => {
        let maxNum
        let minNum
        let step
        if (item === 'noteDose') {
          maxNum = this.rangeNoteDose.maxNum
          minNum = this.rangeNoteDose.minNum
          step = this.rangeNoteDose.step
        }
        if (item === 'injectionPattern') {
          maxNum = this.rangeInjectionPattern.maxNum
          minNum = this.rangeInjectionPattern.minNum
          step = this.rangeInjectionPattern.step
        }
        if (item === 'noteType') {
          maxNum = this.rangeNoteType.maxNum
          minNum = this.rangeNoteType.minNum
          step = this.rangeNoteType.step
        }
        const object = {
          name: item,
          minNum: minNum,
          maxNum: maxNum,
          step: step
        }
        checkList.push(object)
      })
      updateSubmit<[]>(this.$route.params.id, {predict: encodeURIComponent(JSON.stringify(checkList))})
      this.disabled = true
      this.noteDose = false
      this.injectionPattern = false
      this.noteType = false
      this.checkList.forEach(item => {
        if (item === 'noteDose') {
          this.noteDose = true
        }
        if (item === 'injectionPattern') {
          this.injectionPattern = true
        }
        if (item === 'noteType') {
          this.noteType = true
        }

      })
    }
    check1(value:any) {
      if (value.name === 'noteDose') {
        this.rangeNoteDose.maxNum = value.maxNum
        this.rangeNoteDose.minNum = value.minNum
        this.rangeNoteDose.step = value.step
      }
      if (value.name === 'injectionPattern') {
        this.rangeInjectionPattern.maxNum = value.maxNum
        this.rangeInjectionPattern.minNum = value.minNum
        this.rangeInjectionPattern.step = value.step
      }
      if (value.name === 'noteType') {
        this.rangeNoteType.maxNum = value.maxNum
        this.rangeNoteType.minNum = value.minNum
        this.rangeNoteType.step = value.step
      }
      this.disabled = true
      this.noteDose = false
      this.injectionPattern = false
      this.noteType = false
      this.checkList.forEach(item => {
        if (item === 'noteDose') {
          this.noteDose = true
        }
        if (item === 'injectionPattern') {
          this.injectionPattern = true
        }
        if (item === 'noteType') {
          this.noteType = true
        }
      })
    }
    download() {
      window.open("/api/download/" + this.$route.params.id)
    }
  }
</script>
<style>
.font16{
  font-size: 14px;
}
.input16 {
  width: 58px;
}
.el-input--mini .el-input__inner {
  height: 20px;
  line-height: 20px;
}
</style>