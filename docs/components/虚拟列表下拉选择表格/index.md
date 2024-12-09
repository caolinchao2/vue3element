# 虚拟列表下拉选择表格

默认显示`30`条数据,可以设置`virtualShowSize`属性来控制显示条数

### 单选--虚拟滚动Table1.4.13

`TSelectTable组件`标签添加属性`useVirtual`--开启虚拟滚动;`columns`中的项宽度需要使用`minWidth`;`单选`开启虚拟滚动`将自动隐藏单选项首列`。

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-table
        :table="table"
        :columns="table.columns"
        :max-height="400"
        useVirtual
        :virtualShowSize="20"
        placeholder="请选择（虚拟滚动--单选）"
        :keywords="{ label: 'name', value: 'id' }"
        @radioChange="(...args) => radioChange(args, '单选')"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
const table = ref({
  data: [] as any[],
  columns: [
    { label: "物料编号", minWidth: "100px", prop: "code" },
    { label: "物料名称", minWidth: "149px", prop: "name" },
    { label: "规格", minWidth: "149px", prop: "spec" },
    { label: "单位", minWidth: "110px", prop: "unitName" }
  ]
})
onMounted(() => {
  initDate()
})
const initDate = () => {
  table.value.data = []
  const tableData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    code: i + 1,
    name: `物料名称${i + 1}`,
    spec: `物料规格 ${i + 1}`,
    unitName: `吨 ${i + 1}`
  }))
  table.value.data = tableData
}
const radioChange = (args, type) => {
  console.log("单选--传给后台的值", args, type)
}
</script>


```

### 多选--虚拟滚动Table1.4.13

`TSelectTable组件`标签添加属性`useVirtual`--开启虚拟滚动。

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-table
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :keywords="{ label: 'name', value: 'id' }"
        multiple
        :virtualShowSize="50"
        placeholder="请选择（虚拟滚动--多选）"
        useVirtual
        @selectionChange="selectionChange"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
let table = ref({
  data: [] as any,
  columns: [
    { label: "物料编号", width: "100px", prop: "code" },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" }
  ]
})
onMounted(() => {
  initDate()
})
const initDate = () => {
  table.value.data = []
  const tableData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    code: i + 1,
    name: `物料名称${i}`,
    spec: `物料规格 ${i}`,
    unitName: `吨 ${i}`
  }))
  table.value.data = tableData
}
const selectionChange = (val, ids) => {
  console.log("复选框", val)
  console.log("复选框--id", ids)
}
</script>


```
