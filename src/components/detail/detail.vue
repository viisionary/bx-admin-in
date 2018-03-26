<template>
  <div class="detail">
    <el-form ref="form" :model="detail" label-width="120px" :disabled="edit" class="detail-from">
      <el-form-item label="产品名称">
        <el-input v-model="detail.name"></el-input>
      </el-form-item>
      <el-form-item label="产品价格">
        <el-input v-model="detail.price"></el-input>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-select v-model="detail.type" placeholder="请选择活动区域">
          <el-option label="成人" value="成人"></el-option>
          <el-option label="儿童" value="儿童"></el-option>
          <el-option label="家庭" value="老人"></el-option>
          <el-option label="老人" value="家庭"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="被保人生日">
        <el-date-picker type="date" placeholder="选择日期" v-model="detail.precept.birthday" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="保障期间">
        <el-input v-model="detail.precept.period"></el-input>
      </el-form-item>
      <el-form-item label="保障计划">
        <el-input v-model="value.info" v-for="value in detail.precept.plan" :key="value.type"></el-input>
      </el-form-item>
      <el-form-item label="保障范围">
        <el-form-item :label="value.name" v-for="(value, key) in detail.coverage" :key="key">
          <el-input v-model="value.info"></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item label="是否可见">
        <el-switch v-model="show"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button @click="closeDetail">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{
  data () {
    return {
      show: true
    }
  },
  props: {
    detail: {
      type: Object
    },
    edit: {
      type: Boolean
    }
  },
  methods: {
    closeDetail () {
      this.$emit('closeDetail')
    }
  },
  components: {},
  computed: {},
  created () {}
}
</script>

<style scoped lang="sass">
  .detail
    .detail-from
      width: 80%
</style>
