<template>
  <el-tabs v-model="activeName" style="padding-left: 8px;" @tab-click="tabClick">
    <el-tab-pane label="本地存储" name="first">
      <Local ref="local" />
    </el-tab-pane>
    <el-tab-pane label="S3 存储" name="second">
      <S3Storage ref="s3Storage" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import S3Storage from './s3/index'
import Local from './local/index'
export default {
  name: 'Storage',
  components: { S3Storage, Local },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    tabClick(name) {
      if (this.activeName === 'first') {
        this.$refs.local.crud.toQuery()
      } else {
        this.$refs.s3Storage.crud.toQuery()
      }
    }
  }
}
</script>

<style scoped>
</style>
