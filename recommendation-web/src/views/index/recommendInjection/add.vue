<template>
  <div style="padding: 0 0 0 0">
    <div style="text-align: center">
      <h2>推荐油藏</h2>

    </div>

    <el-row>
      <el-col :push="1" :span="22">
        <el-card>

          <el-row >
                <el-checkbox-group :disabled="disabled" v-model="checkList">
                  <el-col :span="8">
                    <el-checkbox label="cycle" style="margin-right: 10px">油藏周期</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangeCycle.minNum, 'rangeCycle', 'minNum')"
                      @blur="inputValue(rangeCycle.minNum, 'rangeCycle', 'minNum')"
                      v-model="rangeCycle.minNum"
                      size="mini"/>-
                    <el-input
                        class="input16"
                        :disabled="disabled"
                        @input="inputValue(rangeCycle.maxNum, 'rangeCycle', 'maxNum')"
                        @blur="inputValue(rangeCycle.maxNum, 'rangeCycle', 'maxNum')"
                        v-model="rangeCycle.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangeCycle.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="perforatingSection" style="margin-right: 10px">射孔井段</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      :disabled="disabled"
                      class="input16"
                      v-model="rangePerforatingSection.minNum"
                      @input="inputValue(rangePerforatingSection.minNum, 'rangePerforatingSection', 'minNum')"
                      @blur="inputValue(rangePerforatingSection.minNum, 'rangePerforatingSection', 'minNum')"
                      size="mini"/>-
                    <el-input
                        :disabled="disabled"
                        class="input16"
                        @input="inputValue(rangePerforatingSection.maxNum, 'rangePerforatingSection', 'maxNum')"
                        @blur="inputValue(rangePerforatingSection.maxNum, 'rangePerforatingSection', 'maxNum')"
                        v-model="rangePerforatingSection.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      :disabled="disabled"
                      class="input16"
                      v-model="rangePerforatingSection.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="perforationPermeability" style="margin-right: 10px">射孔段渗透率</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangePerforationPermeability.minNum, 'rangePerforationPermeability', 'minNum')"
                      @blur="inputValue(rangePerforationPermeability.minNum, 'rangePerforationPermeability', 'minNum')"
                      v-model="rangePerforationPermeability.minNum"
                      size="mini"/>-
                    <el-input
                        class="input16"
                        :disabled="disabled"
                        @input="inputValue(rangePerforationPermeability.maxNum, 'rangePerforationPermeability', 'maxNum')"
                        @blur="inputValue(rangePerforationPermeability.maxNum, 'rangePerforationPermeability', 'maxNum')"
                        v-model="rangePerforationPermeability.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangePerforationPermeability.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="perforationThickness" style="margin-right: 10px">射孔厚度</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangePerforationThickness.minNum, 'rangePerforationThickness', 'minNum')"
                      @blur="inputValue(rangePerforationThickness.minNum, 'rangePerforationThickness', 'minNum')"
                      v-model="rangePerforationThickness.minNum"
                      size="mini"/>-
                    <el-input
                        class="input16"
                        :disabled="disabled"
                        @input="inputValue(rangePerforationThickness.maxNum, 'rangePerforationThickness', 'maxNum')"
                        @blur="inputValue(rangePerforationThickness.maxNum, 'rangePerforationThickness', 'maxNum')"
                        v-model="rangePerforationThickness.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangePerforationThickness.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="perforationLayer" style="margin-right: 10px">射孔层数</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangePerforationLayer.minNum, 'rangePerforationLayer', 'minNum')"
                      @blur="inputValue(rangePerforationLayer.minNum, 'rangePerforationLayer', 'minNum')"
                      v-model="rangePerforationLayer.minNum"
                      size="mini"/>-
                    <el-input
                        :disabled="disabled"
                        class="input16"
                        @input="inputValue(rangePerforationLayer.maxNum, 'rangePerforationLayer', 'maxNum')"
                        @blur="inputValue(rangePerforationLayer.maxNum, 'rangePerforationLayer', 'maxNum')"
                        v-model="rangePerforationLayer.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangePerforationLayer.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="porosityPerforationSection" style="margin-right: 10px">射孔段孔隙度</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangePorosityPerforationSection.minNum, 'rangePorosityPerforationSection', 'minNum')"
                      @blur="inputValue(rangePorosityPerforationSection.minNum, 'rangePorosityPerforationSection', 'minNum')"
                      v-model="rangePorosityPerforationSection.minNum"
                      size="mini"/>-
                    <el-input
                        class="input16"
                        :disabled="disabled"
                        @input="inputValue(rangePorosityPerforationSection.maxNum, 'rangePorosityPerforationSection', 'maxNum')"
                        @blur="inputValue(rangePorosityPerforationSection.maxNum, 'rangePorosityPerforationSection', 'maxNum')"
                        v-model="rangePorosityPerforationSection.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangePorosityPerforationSection.step"
                      size="mini"/>
                  </el-col>
                  <el-col :span="8">
                    <el-checkbox label="reservoirThickness" style="margin-right: 10px">油藏厚度</el-checkbox>
                    <span class="font16">范围：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      @input="inputValue(rangeReservoirThickness.minNum, 'rangeReservoirThickness', 'minNum')"
                      @blur="inputValue(rangeReservoirThickness.minNum, 'rangeReservoirThickness', 'minNum')"
                      v-model="rangeReservoirThickness.minNum"
                      size="mini"/>-
                    <el-input
                        :disabled="disabled"
                        class="input16"
                        @input="inputValue(rangeReservoirThickness.maxNum, 'rangeReservoirThickness', 'maxNum')"
                        @blur="inputValue(rangeReservoirThickness.maxNum, 'rangeReservoirThickness', 'maxNum')"
                        v-model="rangeReservoirThickness.maxNum"
                        size="mini"/>
                    <span class="font16">步长：</span> <el-input
                      class="input16"
                      :disabled="disabled"
                      v-model="rangeReservoirThickness.step"
                      size="mini"/>
                  </el-col>
                </el-checkbox-group>
              </el-row>

          <el-button v-if="submit.deleted === 1" style="float: right"  @click="addData()" type="primary">新增</el-button>
          <el-button v-if="submit.deleted === 1" style="float: right"  @click="generate()" type="primary">生成推荐</el-button>
          <el-button v-if="submit.deleted !== 1" style="float: right"  @click="download()" type="primary">下载</el-button>

          <el-button @click="back()" style="float: right">返回</el-button>
          <el-button v-if="submit.deleted === 1"  @click="check()" type="primary">确定</el-button>

          <div  v-if="submit.deleted === 1"  style="float: left;margin-right: 10px;float: right">
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
                  v-if="!cycle"
                  width="120"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  prop="perforatingSection"
                  v-if="!perforatingSection"
                  label="射孔井段"
                  width="120"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  v-if="!perforationThickness"
                  prop="perforationThickness"
                  label="射孔厚度"
                  width="300"
              >
              </el-table-column>
              <el-table-column  v-if="!perforationLayer" align="center" prop="perforationLayer" label="射孔层数">
              </el-table-column>
              <el-table-column
                  align="center"
                  v-if="!perforationPermeability"
                  prop="perforationPermeability"
                  label="射孔段渗透率"
                  width="120"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  prop="porosityPerforationSection"
                  v-if="!porosityPerforationSection"
                  label="射孔段孔隙度"
                  width="300"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  v-if="!reservoirThickness"
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
            <el-table-column v-if="cycle" fixed="right" align="center" prop="cycle" label="周期">
              <template slot-scope="scope">
                <span >{{scope.row.cycle}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="perforatingSection" fixed="right" align="center" prop="perforatingSection" label="射孔井段">
              <template slot-scope="scope">
                <span >{{scope.row.perforatingSection}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="perforationPermeability" fixed="right" align="center" prop="perforationPermeability" label="射孔段渗透率">
              <template slot-scope="scope">
                <span >{{scope.row.perforationPermeability}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="perforationThickness" fixed="right" align="center" prop="perforationThickness" label="射孔厚度">
              <template slot-scope="scope">
                <span >{{scope.row.perforationThickness}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="perforationLayer" fixed="right" align="center" prop="perforationLayer" label="射孔层数">
              <template slot-scope="scope">
                <span >{{scope.row.perforationLayer}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="porosityPerforationSection" fixed="right" align="center" prop="porosityPerforationSection" label="射孔段孔隙度">
              <template slot-scope="scope">
                <span >{{scope.row.porosityPerforationSection}}</span>
              </template>
            </el-table-column>
            <el-table-column v-if="reservoirThickness" fixed="right" align="center" prop="reservoirThickness" label="油藏厚度">
              <template slot-scope="scope">
                <span >{{scope.row.reservoirThickness}}</span>
              </template>
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
    checkList = []
    header =  {
      'token': getToken()
    }
    private submit = {
    }
    disabled = false
    cycle = false
    perforatingSection = false
    perforationPermeability = false
    perforationThickness = false
    perforationLayer = false
    porosityPerforationSection = false
    reservoirThickness = false
    rangePerforationPermeability = {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangePerforationThickness = {
      minNum: 0,
      maxNum: 100,
      step: 1
    }

    rangePerforatingSection= {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangeCycle= {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangePerforationLayer= {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangePorosityPerforationSection= {
      minNum: 0,
      maxNum: 100,
      step: 1
    }
    rangeReservoirThickness = {
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
      generate<[]>(this.$route.params.id, 'recommendInjection',{predict: this.submit.predict}).then(res => {
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
    download() {
      window.open("/api/download/" + this.$route.params.id)
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
        if (item === 'cycle') {
          maxNum = this.rangeCycle.maxNum
          minNum = this.rangeCycle.minNum
          step = this.rangeCycle.step
        }
        if (item === 'perforatingSection') {
          maxNum = this.rangePerforatingSection.maxNum
          minNum = this.rangePerforatingSection.minNum
          step = this.rangePerforatingSection.step
        }
        if (item === 'perforationPermeability') {
          maxNum = this.rangePerforationPermeability.maxNum
          minNum = this.rangePerforationPermeability.minNum
          step = this.rangePerforationPermeability.step
        }
        if (item === 'perforationThickness') {
          maxNum = this.rangePerforationThickness.maxNum
          minNum = this.rangePerforationThickness.minNum
          step = this.rangePerforationThickness.step
        }
        if (item === 'perforationLayer') {
          maxNum = this.rangePerforationLayer.maxNum
          minNum = this.rangePerforationLayer.minNum
          step = this.rangePerforationLayer.step
        }
        if (item === 'porosityPerforationSection') {
          maxNum = this.rangePorosityPerforationSection.maxNum
          minNum = this.rangePorosityPerforationSection.minNum
          step = this.rangePorosityPerforationSection.step
        }
        if (item === 'reservoirThickness') {
          maxNum = this.rangeReservoirThickness.maxNum
          minNum = this.rangeReservoirThickness.minNum
          step = this.rangeReservoirThickness.step
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
      this.cycle = false
      this.perforatingSection = false
      this.perforationPermeability = false
      this.perforationLayer = false
      this.perforationThickness = false
      this.porosityPerforationSection = false
      this.reservoirThickness = false
      this.checkList.forEach(item => {
        if (item === 'cycle') {
          this.cycle = true
        }
        if (item === 'perforatingSection') {
          this.perforatingSection = true
        }
        if (item === 'perforationPermeability') {
          this.perforationPermeability = true
        }
        if (item === 'perforationThickness') {
          this.perforationThickness = true
        }
        if (item === 'perforationLayer') {
          this.perforationLayer = true
        }
        if (item === 'porosityPerforationSection') {
          this.porosityPerforationSection = true
        }
        if (item === 'reservoirThickness') {
          this.reservoirThickness = true
        }

      })
    }
    check1(value:any) {
      if (value.name === 'cycle') {
        this.rangeCycle.maxNum = value.maxNum
        this.rangeCycle.minNum = value.minNum
        this.rangeCycle.step = value.step
      }
      if (value.name === 'perforatingSection') {
        this.rangePerforatingSection.maxNum = value.maxNum
        this.rangePerforatingSection.minNum = value.minNum
        this.rangePerforatingSection.step = value.step
      }
      if (value.name === 'perforationPermeability') {
        this.rangePerforationPermeability.maxNum = value.maxNum
        this.rangePerforationPermeability.minNum = value.minNum
        this.rangePerforationPermeability.step = value.step
      }
      if (value.name === 'perforationThickness') {
        this.rangePerforationThickness.maxNum = value.maxNum
        this.rangePerforationThickness.minNum = value.minNum
        this.rangePerforationThickness.step = value.step
      }
      if (value.name === 'perforationLayer') {
        this.rangePerforationLayer.maxNum = value.maxNum
        this.rangePerforationLayer.minNum = value.minNum
        this.rangePerforationLayer.step = value.step
      }

      if (value.name === 'porosityPerforationSection') {
        this.rangePorosityPerforationSection.maxNum = value.maxNum
        this.rangePorosityPerforationSection.minNum = value.minNum
        this.rangePorosityPerforationSection.step = value.step
      }
      if (value.name === 'reservoirThickness') {
        this.rangeReservoirThickness.maxNum = value.maxNum
        this.rangeReservoirThickness.minNum = value.minNum
        this.rangeReservoirThickness.step = value.step
      }

      this.disabled = true
      this.cycle = false
      this.perforatingSection = false
      this.perforationPermeability = false
      this.perforationLayer = false
      this.perforationThickness = false
      this.porosityPerforationSection = false
      this.reservoirThickness = false
      this.checkList.forEach(item => {
        if (item === 'cycle') {
          this.cycle = true
        }
        if (item === 'perforatingSection') {
          this.perforatingSection = true
        }
        if (item === 'perforationPermeability') {
          this.perforationPermeability = true
        }
        if (item === 'perforationThickness') {
          this.perforationThickness = true
        }
        if (item === 'perforationLayer') {
          this.perforationLayer = true
        }
        if (item === 'porosityPerforationSection') {
          this.porosityPerforationSection = true
        }
        if (item === 'reservoirThickness') {
          this.reservoirThickness = true
        }

      })
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