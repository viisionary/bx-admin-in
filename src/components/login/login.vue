<template>
  <div class="login">
    <div class="from">
      账户<el-input v-model="account" placeholder="请输入账户" class="input"></el-input>
      密码<el-input v-model="pwd" placeholder="请输入密码" class="input"></el-input>
      <!--<router-link>还没有账号? 去注册</router-link>-->
      <el-button type="success" class="submit" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      account: '',
      pwd: ''
    }
  },
  props: {},
  methods: {
    login () {}
  },
  components: {},
  computed: {},
  created () {}
}
</script>

<style scoped lang="sass">
.login
  width: 100%
  height: 100%
  /*filter: blur(20px)*/
  background-image: url(bg.jpg)
  background-size: 100% 100%
  color: #fff
  z-index: -1000
  .from
    width: 300px
    margin: 0 auto
    padding: 300px
    .submit
      margin-top: 30px
      float: right
</style>
