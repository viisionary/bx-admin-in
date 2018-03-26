<template>
  <div class="view-insurance">
    <template>
      <el-table
        :data="insurance"
        border
        style="width: 100%">
        <el-table-column
          prop="type"
          label="类型"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="info"
          label="简介"
          width="120">
        </el-table-column>
        <el-table-column
          prop="info"
          label="简介"
          width="120">
        </el-table-column>
        <el-table-column
          prop="info"
          label="简介"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="viewDetail(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="editDetail(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <detail :detail="detail" v-show="detailShow" class="detail" :edit="edit" @closeDetail="closeDetail"></detail>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import detail from '../../components/detail/detail.vue'
export default{
  data () {
    return {
      detail: {},
      detailShow: false,
      edit: true
    }
  },
  props: {},
  methods: {
    ...mapActions([
      'getInsurance'
    ]),
    viewDetail (row) {
      this.detail = row
      this.detailShow = true
    },
    editDetail (row) {
      this.detail = row
      this.detailShow = true
      this.edit = false
    },
    closeDetail () {
      this.detailShow = false
      this.edit = true
    }
  },
  components: {
    detail
  },
  computed: {
    ...mapGetters([
      'insurance'
    ])
  },
  created () {
    this.getInsurance()
    this.typeClass = ['成人', '儿童', '老人', '家庭']
  }
}
</script>

<style scoped lang="sass">
.view-insurance
  .detail
    background-color: rgba(226, 226, 226, 0.84)
    position: fixed
    top: 0
    width: 80%
    height: 90%
    z-index: 1000
    overflow: scroll
    padding: 50px 30px
</style>
