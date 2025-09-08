<template>
  <el-dialog :visible.sync="dialog" :close-on-click-modal="false" title="S3 配置" append-to-body width="580px">
    <el-form ref="form" :model="form" :rules="rules" style="margin-top: 6px;" size="small" label-width="110px">
      <el-form-item label="Access Key" prop="accessKey">
        <el-input v-model="form.accessKey" style="width: 95%" placeholder="AWS Access Key ID" />
      </el-form-item>
      <el-form-item label="Secret Key" prop="secretKey">
        <el-input v-model="form.secretKey" type="password" style="width: 95%;" placeholder="AWS Secret Access Key" />
      </el-form-item>
      <el-form-item label="空间名称" prop="bucket">
        <el-input v-model="form.bucket" style="width: 95%;" placeholder="S3 Bucket 名称" />
      </el-form-item>
      <el-form-item label="外链域名" prop="host">
        <el-input v-model="form.host" style="width: 95%;" placeholder="S3 服务端点 (例如: s3.amazonaws.com)" />
      </el-form-item>
      <el-form-item label="区域">
        <el-input v-model="form.region" style="width: 95%;" placeholder="AWS 区域 (例如: us-east-1)" />
      </el-form-item>
      <el-form-item label="访问控制" prop="acl">
        <el-radio v-model="form.acl" label="public-read">公共读</el-radio>
        <el-radio v-model="form.acl" label="private">私有</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="dialog = false">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { get, update } from '@/api/tools/s3'
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      form: {
        accessKey: '',
        secretKey: '',
        bucket: '',
        host: '',
        region: 'us-east-1',
        acl: 'public-read'
      },
      rules: {
        accessKey: [
          { required: true, message: '请输入accessKey', trigger: 'blur' }
        ],
        secretKey: [
          { required: true, message: '请输入secretKey', trigger: 'blur' }
        ],
        bucket: [
          { required: true, message: '请输入空间名称', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '请输入外链域名', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '空间类型不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    init() {
      get().then(res => {
        this.form = res
      })
    },
    doSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          update(this.form).then(res => {
            this.$notify({
              title: '修改成功',
              type: 'success',
              duration: 2500
            })
            this.$parent.crud.toQuery()
            this.loading = false
            this.dialog = false
          }).catch(err => {
            this.loading = false
            console.log(err.response.data.message)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
