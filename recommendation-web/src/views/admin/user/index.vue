<template>
  <div class="template-tab">
    <div style="padding: 50px 0px 50px 0px">
      <el-row style="margin-top: 10px">
        <el-col :span="22" :push="1">
          <el-card>
            <el-table :data="tableData" height="610" border style="width: 100%">
              <el-table-column prop="name" label="昵称" width="180">
              </el-table-column>
              <el-table-column prop="username" label="用户名"> </el-table-column>
              <el-table-column prop="password" label="密码"> </el-table-column>
              <el-table-column prop="email" label="邮箱"> </el-table-column>
              <el-table-column prop="role" label="角色"> </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {list} from "@/api/auth";

  @Component({
    name: "index"
  })
  export default class extends Vue {
    private tableData = []
    add() {
      this.$router.push("/" + this.$route.params.code + "/add");
    }
    back() {
      window.history.go(-1);
    }
    created() {
      list<[]>({createId: 1}).then(res => {
        this.tableData = res.data
      })
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.template-tab {
  background-color: rgb(236, 240, 245);
}
</style>
