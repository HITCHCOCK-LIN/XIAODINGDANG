<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="数据源名称：" prop="sourceName">
        <el-input
          v-model="queryParams.sourceName"
          placeholder="请输入数据源名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="采集方式：" prop="accessMode">
        <el-input
          v-model="queryParams.accessMode"
          placeholder="请输入数据采集方式"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['governance:source:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['governance:source:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['governance:source:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['governance:source:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="sourceList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="数据源编码" align="center" prop="sourceId" />
      <el-table-column label="数据源名称" align="center" prop="sourceName" />
      <el-table-column label="采集方式" align="center" prop="accessMode" />
      <el-table-column label="数据库类型" align="center" prop="dbType" />
      <el-table-column label="数据库地址" align="center" prop="dbAddr" />
      <el-table-column label="数据库端口号" align="center" prop="dbPort" />
      <el-table-column label="文件地址" align="center" prop="fileAddr" />
      <el-table-column label="备注信息" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-detil"
            @click="handleDetil(scope.row)"
            v-hasPermi="['governance:source:detil']"
          >详情</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['governance:source:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['governance:source:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改数据源列对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="数据源名称" prop="sourceName">
          <el-input v-model="form.sourceName" placeholder="请输入数据源名称" />
        </el-form-item>
        <el-form-item label="数据采集方式" prop="accessMode">
          <el-select
              v-model="form.accessMode"
              placeholder="数据采集方式"
              clearable
              style="width: 240px"
            >
              <el-option
                v-for="dict in dict.type.data_access_type"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
        </el-form-item>
        <el-form-item v-if="form.accessMode==='db'" label="数据库类型" prop="dbType">
          <el-select
              v-model="form.dbType"
              placeholder="数据库类型"
              clearable
              style="width: 240px"
            >
              <el-option
                v-for="dict in dict.type.source_db_type"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
        </el-form-item>
        <el-form-item v-if="form.accessMode==='db'" label="数据库地址" prop="dbAddr">
          <el-input v-model="form.dbAddr" placeholder="请输入数据库地址" />
        </el-form-item>
        <el-form-item v-if="form.accessMode==='db'" label="数据库端口号" prop="dbPort">
          <el-input v-model="form.dbPort" placeholder="请输入数据库端口号" />
        </el-form-item>
        <el-form-item v-if="form.accessMode==='file'" label="文件地址" prop="fileAddr">
          <el-input v-model="form.fileAddr" placeholder="请输入文件地址" />
        </el-form-item>
        <el-form-item label="备注信息" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listSource, getSource, delSource, addSource, updateSource } from "@/api/governance/source";

export default {
  name: "Source",
  dicts: ['data_access_type', 'source_db_type'],
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 数据源列表格数据
      sourceList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        sourceName: null,
        accessMode: null,
        dbType: null,
        dbAddr: null,
        dbPort: null,
        fileAddr: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询数据源列列表 */
    getList() {
      this.loading = true;
      listSource(this.queryParams).then(response => {
        this.sourceList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        sourceId: null,
        sourceName: null,
        accessMode: null,
        dbType: null,
        dbAddr: null,
        dbPort: null,
        fileAddr: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.sourceId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 数据源表列表查询 */
    handleDetil(row) {
      const sourceId = row.sourceId || 0;
      this.$router.push('/governance/source/detail/' + sourceId)
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加数据源列";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const sourceId = row.sourceId || this.ids
      getSource(sourceId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改数据源列";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.sourceId != null) {
            updateSource(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSource(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const sourceIds = row.sourceId || this.ids;
      this.$modal.confirm('是否确认删除数据源列编号为"' + sourceIds + '"的数据项？').then(function() {
        return delSource(sourceIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('governance/source/export', {
        ...this.queryParams
      }, `source_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
