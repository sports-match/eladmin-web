<template>
  <div class="app-container">
    <el-alert :closable="false" title="Menu Level 3-1" type="success" />
    <el-form label-width="170px" style="margin-top: 20px">
      <el-form-item label="Level 3 Menu Cache Test Area">
        <el-input v-model="input" placeholder="Please enter content" style="width: 360px;" />
      </el-form-item>
    </el-form>
    <div>
      <blockquote class="my-blockquote"> Level 3 Menu Cache Configuration Tutorial</blockquote>
      <pre class="my-code">
 1. Update the front-end and back-end code to the latest version, or modify according to the commit record. Click to view -> <a href="https://gitee.com/elunez/eladmin/commit/43d1a63577f9d5347924355708429a2d210e29f7" target="_blank">Commit(1)</a>, <a href="https://gitee.com/elunez/eladmin/commit/46393875148fcca5eaa327d4073f72edb3752f5c" target="_blank">Commit(2)</a>, <a href="https://gitee.com/elunez/eladmin-web/commit/c93c99d8921abbb2c52afc806635f5ca08d6bda8" target="_blank">Commit(3)</a>
 2. Set the menu type of the Level 2 menu to Directory level, and clear the original component path
 3. Set the menu cache of the Level 3 menu to Yes, and finally fill in the correct component name
 4. For specific settings, refer to the multi-level menu configuration in Menu Management for corresponding modifications
 </pre>
      <blockquote class="my-blockquote">More Help</blockquote>
      <pre class="my-code">QQ Groups: Group 1: 891137268, Group 2: 947578238, Group 3: 659622532</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Test',
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style scoped>
  .my-code a{
    color:#009688;
  }
</style>
