# select选择器

### 单选

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择工序"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        @change="selectChange"
        width="200px"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Single">
import { ref } from "vue"
const selectVlaue = ref<any>()
const stepList = [
  { label: "开始" },
  { label: "POSUI" },
  { label: "11" },
  { label: "GX123" },
  { label: "烘干破碎" },
  { label: "车间仓库" },
  { label: "ui3333" },
  { label: "hhh333" }
]
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 自定义显示下拉项 label

设置 customLabel 字符串表达式：`${_item.label}（${_item.id}）`;注意：表达式必须以`_item`开头，且后面的属性必须存在`optionSource`中

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="自定义显示下拉项label"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        customLabel="`${_item.label}（${_item.id}）`"
        @change="selectChange"
      ></c-select>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const selectVlaue = ref<any>()
const stepList = ref([
  { label: "开始", id: 1 },
  { label: "POSUI", id: 2 },
  { label: "11", id: 3 },
  { label: "GX123", id: 4 },
  { label: "烘干破碎", id: 5 },
  { label: "车间仓库", id: 6 },
  { label: "ui3333", id: 7 },
  { label: "hhh333", id: 8 }
])
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 单选分页

在组件中配置：`isShowPagination` 及 `paginationOption`

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择工序（单选分页）"
        v-model="selectVlaue"
        :optionSource="stepList"
        labelCustom="materialName"
        valueCustom="id"
        @current-change="currentChange"
        @change="selectChange"
        @input="selectinput"
        @select-input="selectinput1"
        isShowPagination
        :paginationOption="paginationOption"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Pagination">
import { onMounted, ref } from "vue"
import data from "./data.json"
import data1 from "./data1.json"
const selectVlaue = ref<any>()
const stepList = ref([])
const paginationOption = ref({
  pageSize: 6, // 每页显示条数
  currentPage: 1, // 当前页
  pagerCount: 7, // 按钮数，超过时会折叠
  total: 0 // 总条数
})
const selectinput = (val: any) => {
  console.log("分页器-input", val)
}
const selectinput1 = (val: any) => {
  console.log("select-input", val)
}
onMounted(() => {
  getList(1)
})
const getList = async pageNum => {
  let res
  if (pageNum === 1) {
    res = await data
  } else {
    res = await data1
  }
  if (res.success) {
    stepList.value = res.data.records
    paginationOption.value.total = res.data.total
    // console.log('获取数据', paginationOption.value)
  }
}
// 切换分页
const currentChange = (val: any) => {
  console.log("切换分页current-change事件", val)
  getList(val)
}
const selectChange = (val: any) => {
  console.log(`change返回值${val};v-model值${selectVlaue.value}`)
}
</script>
```

### 单选禁用

在组件中数据源：`optionSource` 不满足条件时，新增`disabled`属性，设置为`true`即可

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="单选禁用"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        @change="selectChange"
        width="200px"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="singleDisabled">
import { onMounted, ref } from "vue"
const selectVlaue = ref<any>()
const stepList: any = ref([])
onMounted(() => {
  getData()
})
const getData = () => {
  let list = [
    { label: "开始", id: 1 },
    { label: "POSUI", id: 2 },
    { label: "11", id: 3 },
    { label: "GX123", id: 4 },
    { label: "烘干破碎", id: 5 },
    { label: "单选禁用项", id: undefined },
    { label: "车间仓库", id: 6 },
    { label: "ui3333", id: 7 },
    { label: "hhh333", id: 8 }
  ]
  list.map((item: any) => {
    if (item.id === undefined) {
      item.disabled = true
    }
  })
  stepList.value = list
}
// 选中值发生变化时触发
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 多选禁用

在组件中数据源：`optiN onSource` 不满足条件时，新增`disabled`属性，设置为`true`即可

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="多选禁用"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        @change="selectChange"
        multiple
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Multiple">
import { ref, onMounted } from "vue"
const selectVlaue = ref<any>()
const stepList: any = ref([])
onMounted(() => {
  getData()
})
const getData = () => {
  let list = [
    { label: "开始", id: 1 },
    { label: "POSUI", id: 2 },
    { label: "11", id: 3 },
    { label: "GX123", id: 4 },
    { label: "烘干破碎", id: 5 },
    { label: "单选禁用项1", id: undefined },
    { label: "单选禁用项2", id: undefined },
    { label: "车间仓库", id: 6 },
    { label: "ui3333", id: 7 },
    { label: "hhh333", id: 8 }
  ]
  list.map((item: any) => {
    if (item.id === undefined) {
      item.disabled = true
    }
  })
  stepList.value = list
}
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>
```

### 多选/全选

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择工序"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueCustom="label"
        @change="selectChange"
        multiple
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Multiple">
import { ref } from "vue"
const selectVlaue = ref<any>()
const stepList = [
  { label: "开始" },
  { label: "POSUI" },
  { label: "11" },
  { label: "GX123" },
  { label: "烘干破碎" },
  { label: "车间仓库" },
  { label: "ui3333" },
  { label: "hhh333" }
]
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>
```

### 多选--隐藏多余标签的多选

多选时隐藏掉多余数量的tag

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <div>use collapse-tags</div>
      <c-select
        placeholder="请选择(多选)"
        v-model="selectVlaue1"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        multiple
        @change="selectChange($event, '1')"
      />
    </c-layout-page-item>
    <c-layout-page-item>
      <div>use collapse-tags-tooltip</div>
      <c-select
        placeholder="请选择(多选)"
        v-model="selectVlaue2"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        collapse-tags-tooltip
        multiple
        @change="selectChange($event, '2')"
      />
    </c-layout-page-item>
    <c-layout-page-item>
      <div>use max-collapse-tags</div>
      <c-select
        placeholder="请选择(多选)"
        v-model="selectVlaue3"
        :optionSource="stepList"
        valueCustom="label"
        collapse-tags
        collapse-tags-tooltip
        :max-collapse-tags="3"
        multiple
        @change="selectChange($event, '3')"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="multipleCollapseTags">
import { ref } from "vue"
const selectVlaue1 = ref<any>()
const selectVlaue2 = ref<any>()
const selectVlaue3 = ref<any>()
const stepList = [
  { label: "开始" },
  { label: "POSUI" },
  { label: "11" },
  { label: "GX123" },
  { label: "烘干破碎" },
  { label: "车间仓库" },
  { label: "ui3333" },
  { label: "hhh333" }
]
const selectChange = (val: any, type) => {
  console.log(`selectChange--selectVlaue${type}`, val)
}
</script>

```

### 多选分页

在组件中配置：`isShowPagination` 及 `paginationOption`；**`多选不支持翻页选中功能`**

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择工序（多选分页）"
        v-model="selectVlaue"
        :optionSource="stepList"
        labelCustom="materialName"
        valueCustom="id"
        @current-change="currentChange"
        @change="selectChange"
        isShowPagination
        multiple
        :paginationOption="paginationOption"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Pagination">
import { onMounted, ref } from "vue"
import data from "./data.json"
import data1 from "./data1.json"
const selectVlaue = ref<any>()
const stepList = ref([])
const paginationOption = ref({
  pageSize: 6, // 每页显示条数
  currentPage: 1, // 当前页
  pagerCount: 7, // 按钮数，超过时会折叠
  total: 0 // 总条数
})
onMounted(() => {
  getList(1)
})
const getList = async pageNum => {
  let res
  if (pageNum === 1) {
    res = await data
  } else {
    res = await data1
  }
  if (res.success) {
    stepList.value = res.data.records
    paginationOption.value.total = res.data.total
    // console.log('获取数据', paginationOption.value)
  }
}
// 切换分页
const currentChange = (val: any) => {
  console.log("切换分页current-change事件", val)
  getList(val)
}
const selectChange = (val: any) => {
  console.log(`change返回值${val};v-model值${selectVlaue.value}`)
}
</script>


```

### 虚拟列表--单选

在组件中配置：`use-virtual` 即可

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择(虚拟列表--单选)"
        v-model="selectVlaue"
        :optionSource="stepList"
        useVirtual
        @change="selectChange"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="useVirtual">
import { ref } from "vue"
const selectVlaue = ref<any>()
const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
const stepList = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`
}))
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 虚拟列表--多选

在组件中配置：use-virtual 即可

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="请选择(虚拟列表--单选)"
        v-model="selectVlaue"
        :optionSource="stepList"
        useVirtual
        multiple
        @change="selectChange"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="useVirtual">
import { ref } from "vue"
const selectVlaue = ref<any>()
const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
const stepList = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`
}))
const selectChange = (val: any) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 虚拟列表--隐藏多余标签的多选



```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <div>use collapse-tags</div>
      <c-select
        placeholder="请选择(虚拟列表--多选选)"
        v-model="selectVlaue1"
        :optionSource="stepList"
        useVirtual
        collapse-tags
        multiple
        @change="selectChange($event, '1')"
      />
    </c-layout-page-item>
    <c-layout-page-item>
      <div>use collapse-tags-tooltip</div>
      <c-select
        placeholder="请选择(虚拟列表--多选选)"
        v-model="selectVlaue2"
        :optionSource="stepList"
        useVirtual
        collapse-tags
        collapse-tags-tooltip
        multiple
        @change="selectChange($event, '2')"
      />
    </c-layout-page-item>
    <c-layout-page-item>
      <div>use max-collapse-tags</div>
      <c-select
        placeholder="请选择(虚拟列表--多选选)"
        v-model="selectVlaue3"
        :optionSource="stepList"
        useVirtual
        collapse-tags
        collapse-tags-tooltip
        :max-collapse-tags="3"
        multiple
        @change="selectChange($event, '3')"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="useVirtual">
import { ref } from "vue"
const selectVlaue1 = ref<any>()
const selectVlaue2 = ref<any>()
const selectVlaue3 = ref<any>()
const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
const stepList = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`
}))
const selectChange = (val: any, type) => {
  console.log(`selectChange--selectVlaue${type}`, val)
}
</script>

```

### 选中值返回对象

在组件中配置：`returnObject` ；必须设置 `value-key` 属性且具有唯一性。支持多选

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select
        placeholder="选中值将以对象形式返回"
        v-model="selectVlaue"
        :optionSource="stepList"
        value-key="id"
        returnObject
        valueCustom="id"
        @change="selectChange"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts" name="Single">
import { ref } from "vue"
type Option = {
  id: number
  label: string
}
const selectVlaue = ref<Option>()
const stepList = [
  { label: "开始", id: 1 },
  { label: "POSUI", id: 2 },
  { label: "11", id: 3 },
  { label: "GX123", id: 4 },
  { label: "烘干破碎", id: 5 },
  { label: "车间仓库", id: 6 },
  { label: "ui3333", id: 7 },
  { label: "hhh333", id: 8 }
]
const selectChange = (val: Option) => {
  console.log("selectChange", val, selectVlaue.value)
}
</script>

```

### 配置参数（Attributes）继承 el-select Attributes

| 参数               | 说明                                             | 类型                            | 默认值  |
| ------------------ | ------------------------------------------------ | ------------------------------- | ------- |
| v-model            | 绑定值                                           | boolean / string / number/Array | 无      |
| multiple           | 是否多选                                         | Boolean                         | false   |
| optionSource       | 下拉数据源                                       | Array                           | 无      |
| customLabel        | 是否自定义设置下拉 label                         | String                          | -       |
| valueCustom        | 传入的 option 数组中，要作为最终选择项的键值 key | String                          | 'key'   |
| labelCustom        | 传入的 option 数组中，要作为显示项的键值名称     | String                          | 'label' |
| useVirtual         | 是否开启虚拟列表(继承 el-select-v2 属性)         | Boolean                         | false   |
| isShowPagination   | 是否开启分页                                     | Boolean                         | false   |
| paginationOption   | 分页配置                                         | Object                          | -       |
| returnObject1.4.14 | 选中值是否返回对象必须设置`value-key`            | Boolean                         | false   |

### paginationOption 配置参数（Attributes）继承 el-pagination Attributes

| 参数        | 说明                                                         | 类型   | 默认值                             |
| ----------- | ------------------------------------------------------------ | ------ | ---------------------------------- |
| currentPage | 当前页数                                                     | number | 1                                  |
| pageSize    | 每页显示条目个数                                             | number | 6                                  |
| pagerCount  | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 | number | 5                                  |
| total       | 总条目数                                                     | number | 0                                  |
| layout      | 组件布局，子组件名用逗号分隔                                 | string | 'total, prev, pager, next, jumper' |
| bind        | el-pagination 属性                                           | Object | -                                  |

### 继承 el-select&el-pagination events

| 事件名       | 说明                 | 回调参数     |
| ------------ | -------------------- | ------------ |
| change       | 选中值发生变化时触发 | 返回选中的值 |
| input        | 分页器输入框触发     | 返回输入的值 |
| select-input | 选择输入框触发       | 返回输入的值 |
