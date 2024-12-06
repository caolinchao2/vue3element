# Table 组件

## 基本用法

配置 json，生成 table 表格，本示例展示了 xTable 的各种用法：数据字典、过滤器、生成搜索框 等

```vue preview
<template>
  <x-form
    style="width: 100%"
    ref="xFormRef"
    v-model:propData="formData"
    :config="formConfig"
  ></x-form>
  <x-table ref="xTable" :config="configTable" :data="tableData" :load="getTableList" :page="page">
    <template #status="scope">
      <span v-if="scope.row.status === 1" style="color: #2e5ef6">未复审</span>
      <span v-if="scope.row.status === 2">复审中</span>
      <span v-if="scope.row.status === 3" style="color: #00c989">复审通过</span>
      <span v-if="scope.row.status === 4" style="color: #f56c6c">复审不通过</span>
    </template>
  </x-table>
</template>
<script setup>
import { ref, computed } from 'vue'
let formData = ref({})
let xFormRef = ref()
const formConfig = computed(() => {
  return {
    inline: false,
    isElRow: true,
    elColSize: {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      but: {
        xs: 24,
        sm: 12,
        md: 8,
        lg: 8,
        xl: 8,
      },
    },
    item: [
      {
        xType: 'input',
        name: 'batchNumber',
        label: '批次号:',
        placeholder: '请输入',
      },

      {
        xType: 'input',
        name: 'phoneNumber',
        label: '手机号:',
        placeholder: '请输入',
      },
    ],
    labelWidth: '80px',
    itemStyle: 'width:100%;height:36px',
    operate: [
      {
        text: '查询',
        show: true,
        type: 'primary',
        loading: false,
        click: () => {},
      },
      {
        text: '重置',
        show: true,
        type: 'default',
        click: () => {},
      },
    ],
  }
})
let page = ref({
  pageSizes: [5, 10, 20, 50, 100],
  pageSize: 10,
  pageNum: 1,
  total: 12,
  background: true,
})
let tableData = ref([
  {
    id: '12',
    num: '1',
    type: '个人',
    accountnumber: 'admin12',
    companyname: '北京xxxx互联网科技有限公司',
    industry: '互联网',
    contacts: '张三',
    phone: '18888888888',
    submissiontime: '2022-03-14 12:00:00',
    status: 1,
    approver: '李四',
    approvertime: '2022-03-14 12:00:00',
  },
  {
    id: '112',
    num: '2',
    type: '个人',
    accountnumber: 'admin12',
    companyname: '北京xxxx互联网科技有限公司',
    industry: '互联网',
    contacts: '张三',
    phone: '18888888888',
    submissiontime: '2022-03-14 12:00:00',
    status: 2,
    approver: '李四',
    approvertime: '2022-03-14 12:00:00',
  },
  {
    id: '21231',
    num: '3',
    type: '个人',
    accountnumber: 'admin12',
    companyname: '北京xxxx互联网科技有限公司',
    industry: '互联网',
    contacts: '张三',
    phone: '18888888888',
    submissiontime: '2022-03-14 12:00:00',
    status: 3,
    approver: '李四',
    approvertime: '2022-03-14 12:00:00',
  },
  {
    id: '1123',
    num: '4',
    type: '个人',
    accountnumber: 'admin12',
    companyname: '北京xxxx互联网科技有限公司',
    industry: '互联网',
    contacts: '张三',
    phone: '18888888888',
    submissiontime: '2022-03-14 12:00:00',
    status: 4,
    approver: '李四',
    approvertime: '2022-03-14 12:00:00',
  },
])
let configTable = ref({
  stripe: false,
  labelWidth: 'auto',
  resetBtn: false,
  loading: false,
  selectionChange: (selection) => console.log(selection),
  column: [
    {
      type: 'selection',
      width: '40px',
      align: 'center',
    },
    {
      label: '序号',
      align: 'center',
      name: 'num',
      width: '60px',
    },
    {
      label: 'ID',
      align: 'center',
      name: 'id',
      minWidth: '80px',
    },
    {
      label: '供应商类型',
      align: 'center',
      name: 'type',
      minWidth: '100px',
    },
    {
      label: '主账号',
      align: 'center',
      name: 'accountnumber',
      minWidth: '120px',
    },
    {
      label: '公司名称',
      align: 'center',
      name: 'companyname',
      minWidth: '220px',
    },

    {
      label: '行业',
      align: 'center',
      name: 'industry',
      minWidth: '100px',
    },
    {
      label: '联系人',
      align: 'center',
      name: 'contacts',
      minWidth: '80px',
    },
    {
      label: '联系电话',
      align: 'center',
      name: 'phone',
      minWidth: '140px',
    },

    {
      label: '提交时间',
      align: 'center',
      name: 'submissiontime',
      minWidth: '180px',
    },
    {
      label: '审批状态',
      align: 'center',
      name: 'status',
      slot: true,
      minWidth: '100px',
    },
    {
      label: '审批人',
      align: 'center',
      name: 'approver',
      minWidth: '80px',
    },
    {
      label: '审批时间',
      align: 'center',
      name: 'approvertime',
      minWidth: '180px',
    },
  ],
  operationWidth: '180px', // 操作按钮宽度
  operationFixed: 'right',
  operate: [
    {
      text: '查看',
      type: 'text ',
      style: { color: '#165BFF' },
      show: true,
      click: (row) => {},
    },
    {
      text: '去审批',
      dropdown: false,
      type: 'text',
      show: true,
      style: { color: 'red', marginLeft: '16px' },
      click: (row) => {},
    },
  ],
})
</script>
```

## Attributes

| 参数    | 说明                          | 类型     | 可选项 | 默认值 |
| ------- | ----------------------------- | -------- | ------ | ------ |
| v-model | 绑定值                        | object   | -      | -      |
| config  | 表格的配置，具体看下表 config | object   |        |        |
| data    | 表格的数据                    | array    |        |        |
| page    | 表格的页码，具体看下表 page   | object   |        |        |
| load    | 获取表格数据的方法函数        | function |        |        |

## Config

| 参数      | 说明                                                                                             | 类型          | 可选项 | 默认值 |
| --------- | ------------------------------------------------------------------------------------------------ | ------------- | ------ | ------ |
| ......    | 绑定值所有 el-table 的属性及方法，参见[文档](https://element-plus.org/zh-CN/component/form.html) | ...           | —      | —      |
| search    | 搜索框及按钮的配置，此配置会覆盖全局的配置，结构参见全局配置 xtable.search                       | object        | —      | —      |
| searchBtn | 是否显示搜索按钮                                                                                 | boolean       |        |        |
| resetBtn  | 是否显示重置按钮                                                                                 | boolean       |        |        |
| btn       | 自定义搜索框后的按钮                                                                             | object        |        |        |
| column    | 表格的列，具体看下表 column                                                                      | array(object) |        |        |
| operate   | 表格右侧的操作按钮                                                                               | array(object) |        |        |

## Page

| 参数      | 说明           | 类型          | 可选项 | 默认值 |
| --------- | -------------- | ------------- | ------ | ------ |
| pageNum   | 当前页码       | number        |        |        |
| pageSize  | 默认每页数量   | number        |        |        |
| pageSizes | 可选的每页数量 | array(number) |        |        |
| total     | 总数           | number        |        |        |

## Column

| 参数     | 说明                                                    | 类型    | 可选项      | 默认值 |
| -------- | ------------------------------------------------------- | ------- | ----------- | ------ |
| label    | 列头部的文字                                            | string  |             |        |
| name     | 与表格数据对应的 key                                    | string  |             |        |
| children | 用于多级表头，可见上述示例                              | array   |             |        |
| search   | 是否需要搜索框                                          | boolean | 'true/false |        |
| show     | 是否需要显示 column                                     | boolean | 'true/false |        |
| slot     | 通过插槽插入，可见上述示例                              | boolean | 'true/false | false  |
| ...      | search=true 时，配置搜索框的参数，实际内置的 xForm 表单 |         |             |        |
