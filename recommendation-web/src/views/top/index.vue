<!--<template>-->
<!--  <div >-->
<!--    <div class="topbar-title">-->
<!--      <el-row>-->
<!--        <el-col :span="24">-->
<!--          <el-menu-->
<!--            class="el-menu-demo"-->
<!--            mode="horizontal"-->
<!--            :router="true"-->
<!--          >-->
<!--            <el-menu-item key="1" index="/">-->
<!--              <span slot="title">首页</span>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item key="2" v-if="user.role === '10'" index="/admin/index">-->
<!--              <span slot="title">后台</span>-->
<!--            </el-menu-item>-->

<!--            <el-menu-item style="float: right" key="3">-->
<!--              <span slot="title" @click="loginOut()">退出</span>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item style="float: right" key="4">-->
<!--              <span slot="title">admin</span>-->
<!--            </el-menu-item>-->
<!--          </el-menu>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
<!--    <div >-->
<!--      <router-view />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script lang="ts">-->
<!--  import { Component, Vue } from "vue-property-decorator";-->
<!--  import {namespace} from "vuex-class";-->

<!--  const userModules = namespace("user")-->
<!--  @Component({-->
<!--    name: "topMenu"-->
<!--  })-->
<!--  export default class extends Vue {-->
<!--    @userModules.State("user") user: any;-->
<!--    private menu = {-->
<!--      menu: [{ title: "标题", url: "/list" }],-->
<!--      defaultActiveIndex: "/list",-->
<!--      choseTabs: ""-->
<!--    };-->
<!--    private loginOut() {-->
<!--      localStorage.removeItem("token");-->
<!--      this.$router.push("/login");-->
<!--    }-->
<!--  }-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--.topbar-title {-->
<!--  .el-menu {-->
<!--    background-color: #3e3d68 !important;-->
<!--  }-->
<!--  .el-menu-demo > .el-menu-item {-->
<!--    color: #fff !important;-->
<!--    padding: 0 30px !important;-->
<!--  }-->
<!--  .el-menu-item:hover {-->
<!--    background: rgba(190, 190, 190, 0.5) !important;-->
<!--  }-->
<!--  .el-menu-item:focus {-->
<!--    background: rgba(190, 190, 190, 0.5) !important;-->
<!--  }-->
<!--  .el-menu-item {-->
<!--    border-bottom: none !important;-->
<!--  }-->
<!--  .el-menu-item.is-active {-->
<!--    background: rgba(190, 190, 190, 0.5) !important;-->
<!--  }-->
<!--}-->
<!--</style>-->
