<template>
  <div class="template-tab">
    <div >
      <h2 style="text-align: center" v-if="$route.params.code === 'predictionScore'">注采效果评价</h2>
      <h2 style="text-align: center" v-if="$route.params.code === 'recommendInjection'">油藏区块推荐</h2>
      <h2 style="text-align: center" v-if="$route.params.code === 'recommendReservoir'">推荐注剂参数</h2>
      <el-row >
        <el-col :span="22" :push="1">
          <el-button
            type="primary"
            style="float: right;margin-right: 10px"
            @click="add()"
            >新增</el-button
          >
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="22" :push="1">
          <el-card>
            <el-table :data="tableData" :max-height="450" :height="450" border style="width: 100%">
              <el-table-column
                      align="center"
                      type="index"
                      width="100">
              </el-table-column>
              <el-table-column align="center" prop="create_time" label="日期" width="400">
              </el-table-column>
              <el-table-column align="center" prop="model_name" label="模型名称" width="300">
              </el-table-column>
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button size="small" type="success" @click="handleInfo(scope.row)">查看
                  </el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除
                  </el-button>
                  <el-button size="small" type="danger" @click="handleUpload(scope.row)">下载结果
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
  import { list, add, deleteSubmit } from "@/api/submit";
  import {namespace} from "vuex-class";
  const somemodule = namespace("user")
  @Component({
    name: "list"
  })

  export default class extends Vue {
    @Watch("$route")
    getVisible(newVal: any) {
      this.list()
    }
    @somemodule.State(state => state.user) user: any;
    private tableData:any = []
    private add() {
      const data = {
        createId: this.user.id,
        modelName: this.user.modelInfo.name,
        modelPath: this.user.modelInfo.path,
        code: this.$route.params.code
      }
      add<any>(data).then(res => {
        this.$router.push("/" + this.$route.params.code + "/add/" + res.data.id);
      })

    }
    private back() {
      window.history.go(-1)
    }
    private list() {
      list({createId: this.user.id, code: this.$route.params.code}).then(res => {
        this.tableData = res.data
      })
    }
    private handleUpdate() {
      console.log("update")
    }
    private handleInfo(row:any) {
      this.$router.push("/" + this.$route.params.code + "/add/" + row.id)
    }
    private handleDelete(row: any) {
      deleteSubmit(row.id).then(res => {
        this.list()
      })
    }
    private handleUpload(row: any) {
      window.open("/api/download/" + row.id + "?score=" + this.$route.params.code)
    }
    created() {
      this.list()
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" >
body {
  width: 100%;
  height: 100%;
  background-color: rgb(236, 240, 245);
}
</style>
