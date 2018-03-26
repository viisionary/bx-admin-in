<template>
  <div class="index">
    <el-container>
      <el-header class="header">
        <span class="title">保险管理系统</span>️
        <el-dropdown class="dropdown">
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-row>
          <el-col>
            <el-menu
              default-active='2'
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>保险</span>
                </template>
                  <el-menu-item index="viewInsurance">查看所有保险</el-menu-item>
                <el-menu-item-group title="操作">
                  <el-menu-item index="add">增加</el-menu-item>
                  <el-menu-item index="delete">删除</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="viewInsuranceDeal">
                <i class="el-icon-menu"></i>
                <span slot="title">查看所有保单</span>
              </el-menu-item>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户</span>
                </template>
                <el-menu-item index="viewUsers">查看所有用户</el-menu-item>
                <el-menu-item-group title="操作">
                  <el-menu-item index="add">增加</el-menu-item>
                  <el-menu-item index="delete">删除</el-menu-item>
                  <el-menu-item index="update">修改</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ElMain from '../../node_modules/element-ui/packages/main/src/main.vue'
import ElContainer from '../../node_modules/element-ui/packages/container/src/main.vue'

export default{
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      activeMenu: '2'
    }
  },
  props: {},
  methods: {
  },
  components: {
    ElContainer,
    ElMain},
  computed: {},
  created () {}
}
</script>

<style scoped lang="sass">
.index
  .header
    background-color: #545c64
    text-align: center
    line-height: 60px
    font-size: 20px
    color: aliceblue
    .dropdown
      float: right
.main
  padding: 0
</style>
