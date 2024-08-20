# Table 组件

## 基本用法

配置 json，生成 table 表格，本示例展示了 xTable 的各种用法：数据字典、过滤器、生成搜索框 等

```vue preview
<template>
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
      click: (row) => {
        this.$router.push({
          name: 'Particulars',
        })
        sessionStorage.setItem(
          'routeparams',
          JSON.stringify({ id: row.id, isView: true, status: 5 }),
        )
      },
    },
    {
      text: '去审批',
      dropdown: false,
      type: 'text',
      show: true,
      style: { color: '#165BFF', marginLeft: '16px' },
      click: (row) => {
        this.$router.push({
          name: 'Particulars',
        })
        sessionStorage.setItem(
          'routeparams',
          JSON.stringify({ id: row.id, isView: false, status: 5 }),
        )
      },
    },
  ],
})
</script>
```
