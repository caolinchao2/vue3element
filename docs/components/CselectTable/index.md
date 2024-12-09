# CSelectTable 下拉选择表格组件

`Element-plus`版本`v2.6`以上

### 单选

`table` 数据源及表头信息;`keywords` 选项中的 value（选项的值）,label(选项的标签);`@radioChange` 选中事件，传出当前选中对象

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item style="display: flex">
      <c-select-table
        ref="selectTable"
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :keywords="{ label: 'name', value: 'id' }"
        @radioChange="(...args)=>radioChange(args,'单选')"
      ></c-select-table>
      <el-button style="margin-left: 15px" type="primary" @click="clear">清空选中</el-button>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const selectTable = ref()
const table = ref({
  data: [
    { id: 1, code: 1, name: "物料名称1", spec: "物料规格1", unitName: "吨" },
    { id: 2, code: 2, name: "物料名称2", spec: "物料规格2", unitName: "吨" },
    { id: 3, code: 3, name: "物料名称3", spec: "物料规格3", unitName: "吨" },
    { id: 4, code: 4, name: "物料名称4", spec: "物料规格4", unitName: "吨" },
    { id: 5, code: 5, name: "物料名称5", spec: "物料规格5", unitName: "吨" },
    { id: 6, code: 6, name: "物料名称6", spec: "物料规格6", unitName: "吨" },
    { id: 7, code: 7, name: "物料名称7", spec: "物料规格7", unitName: "吨" },
    { id: 8, code: 8, name: "物料名称8", spec: "物料规格8", unitName: "吨" },
    { id: 9, code: 9, name: "物料名称9", spec: "物料规格9", unitName: "吨" }
  ],
  columns: [
    { label: "物料编号", width: "100px", prop: "code" },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" },
    { label: "物料编号1", width: "149px", prop: "code" },
    { label: "物料名称1", width: "149px", prop: "name" },
    { label: "规格1", width: "149px", prop: "spec" },
    { label: "单位1", width: "110px", prop: "unitName" },
    { label: "物料编号11", width: "149px", prop: "code" },
    { label: "物料名称11", width: "149px", prop: "name" },
    { label: "规格11", width: "149px", prop: "spec" },
    { label: "单位11", width: "110px", prop: "unitName" },
    { label: "物料编号111", width: "149px", prop: "code" },
    { label: "物料名称111", width: "149px", prop: "name" },
    { label: "规格111", width: "149px", prop: "spec" },
    { label: "单位111", width: "110px", prop: "unitName" }
  ]
})
const radioChange = (args, type) => {
  console.log("单选--传给后台的值", args, type)
}
const clear = () => {
  console.log("selectTable.value", selectTable.value)
  selectTable.value.clear()
}
</script>


```

### 单选--禁用

`table`的`data` 数据源满足某条件时，新增`isRadioDisabled`属性为`true`，禁用单选。

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item style="display: flex">
      <c-select-table
        ref="selectTable"
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :keywords="{ label: 'name', value: 'id' }"
        @radioChange="(...args)=>radioChange(args,'单选')"
      ></c-select-table>
      <el-button style="margin-left: 15px" type="primary" @click="clear">清空选中</el-button>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const selectTable = ref()
const table = ref({
  data: [
    { id: 1, code: 1, name: "物料名称1", spec: "物料规格1", unitName: "吨", isRadioDisabled: true },
    { id: 2, code: 2, name: "物料名称2", spec: "物料规格2", unitName: "吨" },
    { id: 3, code: 3, name: "物料名称3", spec: "物料规格3", unitName: "吨" },
    { id: 4, code: 4, name: "物料名称4", spec: "物料规格4", unitName: "吨" },
    { id: 5, code: 5, name: "物料名称5", spec: "物料规格5", unitName: "吨" },
    { id: 6, code: 6, name: "物料名称6", spec: "物料规格6", unitName: "吨" },
    { id: 7, code: 7, name: "物料名称7", spec: "物料规格7", unitName: "吨" },
    { id: 8, code: 8, name: "物料名称8", spec: "物料规格8", unitName: "吨" },
    { id: 9, code: 9, name: "物料名称9", spec: "物料规格9", unitName: "吨" }
  ],
  columns: [
    { label: "物料编号", width: "100px", prop: "code" },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" },
    { label: "物料编号1", width: "149px", prop: "code" },
    { label: "物料名称1", width: "149px", prop: "name" },
    { label: "规格1", width: "149px", prop: "spec" },
    { label: "单位1", width: "110px", prop: "unitName" },
    { label: "物料编号11", width: "149px", prop: "code" },
    { label: "物料名称11", width: "149px", prop: "name" },
    { label: "规格11", width: "149px", prop: "spec" },
    { label: "单位11", width: "110px", prop: "unitName" },
    { label: "物料编号111", width: "149px", prop: "code" },
    { label: "物料名称111", width: "149px", prop: "name" },
    { label: "规格111", width: "149px", prop: "spec" },
    { label: "单位111", width: "110px", prop: "unitName" }
  ]
})
const radioChange = (args, type) => {
  console.log("单选--传给后台的值", args, type)
}
const clear = () => {
  console.log("selectTable.value", selectTable.value)
  selectTable.value.clear()
}
</script>

```

### 多选--禁用复选框

`multiple` 开启多选；设置`selectable`属性其类型：`Function(row: any, index: number)` 可根据返回值来决定 `CheckBox` 是否可以勾选.

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item style="display: flex">
      <c-select-table
        ref="selectTable"
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :keywords="{ label: 'name', value: 'id' }"
        multiple
        :selectable="selectable"
        @selectionChange="selectionChange"
      />
      <el-button style="margin-left: 15px" type="primary" @click="clear">清空选中</el-button>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const selectTable = ref()
let table = ref({
  total: 100,
  data: [
    { id: 1, code: 1, name: "物料名称1", spec: "物料规格1", unitName: "吨" },
    { id: 2, code: 2, name: "物料名称2", spec: "物料规格2", unitName: "吨" },
    { id: 3, code: 3, name: "物料名称3", spec: "物料规格3", unitName: "吨" },
    { id: 4, code: 4, name: "物料名称4", spec: "物料规格4", unitName: "吨" },
    { id: 5, code: 5, name: "物料名称5", spec: "物料规格5", unitName: "吨" },
    { id: 6, code: 6, name: "物料名称6", spec: "物料规格6", unitName: "吨" },
    { id: 7, code: 7, name: "物料名称7", spec: "物料规格7", unitName: "吨" },
    { id: 8, code: 8, name: "物料名称8", spec: "物料规格8", unitName: "吨" },
    { id: 9, code: 9, name: "物料名称9", spec: "物料规格9", unitName: "吨" },
    {
      id: 10,
      code: 10,
      name: "物料名称10",
      spec: "物料规格10",
      unitName: "吨"
    },
    {
      id: 11,
      code: 11,
      name: "物料名称11",
      spec: "物料规格11",
      unitName: "吨"
    },
    {
      id: 12,
      code: 12,
      name: "物料名称12",
      spec: "物料规格12",
      unitName: "吨"
    },
    {
      id: 13,
      code: 13,
      name: "物料名称13",
      spec: "物料规格13",
      unitName: "吨"
    }
  ],
  columns: [
    { label: "物料编号", width: "100px", prop: "code", fixed: true },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" },
    { label: "物料编号1", width: "149px", prop: "code" },
    { label: "物料名称1", width: "149px", prop: "name" },
    { label: "规格1", width: "149px", prop: "spec" },
    { label: "单位1", width: "110px", prop: "unitName" },
    { label: "物料编号11", width: "149px", prop: "code" },
    { label: "物料名称11", width: "149px", prop: "name" },
    { label: "规格11", width: "149px", prop: "spec" },
    { label: "单位11", width: "110px", prop: "unitName" },
    { label: "物料编号111", width: "149px", prop: "code" },
    { label: "物料名称111", width: "149px", prop: "name" },
    { label: "规格111", width: "149px", prop: "spec" },
    { label: "单位111", width: "110px", prop: "unitName" }
  ]
})
const selectionChange = (val: any, ids: any) => {
  console.log("复选框", val)
  console.log("复选框--id", ids)
}
const selectable = row => {
  // console.log("selectable--row.code===2禁用复选框")
  return row.code !== 2
}
const clear = () => {
  console.log("selectTable.value", selectTable.value)
  selectTable.value.clear()
}
</script>

```

### 是否显示下拉框

若设置`selfExpanded`为`true`，下拉框将始终不会关闭；另一种方式： 设置`isExpanded` 为`true`;

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item style="display: flex">
      <c-select-table
        ref="selectTable"
        :table="table"
        :columns="table.columns"
        :max-height="400"
        :isExpanded="true"
        isKeyup
        :keywords="{ label: 'name', value: 'id' }"
        @radioChange="radioChange"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { nextTick, ref } from "vue"
const selectTable = ref()
const table = ref({
  data: [
    { id: 1, code: 1, name: "物料名称1", spec: "物料规格1", unitName: "吨" },
    { id: 2, code: 2, name: "物料名称2", spec: "物料规格2", unitName: "吨" },
    { id: 3, code: 3, name: "物料名称3", spec: "物料规格3", unitName: "吨" },
    { id: 4, code: 4, name: "物料名称4", spec: "物料规格4", unitName: "吨" },
    { id: 5, code: 5, name: "物料名称5", spec: "物料规格5", unitName: "吨" },
    { id: 6, code: 6, name: "物料名称6", spec: "物料规格6", unitName: "吨" },
    { id: 7, code: 7, name: "物料名称7", spec: "物料规格7", unitName: "吨" },
    { id: 8, code: 8, name: "物料名称8", spec: "物料规格8", unitName: "吨" },
    { id: 9, code: 9, name: "物料名称9", spec: "物料规格9", unitName: "吨" }
  ],
  columns: [
    { label: "物料编号", width: "100px", prop: "code" },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" },
    { label: "物料编号1", width: "149px", prop: "code" },
    { label: "物料名称1", width: "149px", prop: "name" },
    { label: "规格1", width: "149px", prop: "spec" },
    { label: "单位1", width: "110px", prop: "unitName" },
    { label: "物料编号11", width: "149px", prop: "code" },
    { label: "物料名称11", width: "149px", prop: "name" },
    { label: "规格11", width: "149px", prop: "spec" },
    { label: "单位11", width: "110px", prop: "unitName" },
    { label: "物料编号111", width: "149px", prop: "code" },
    { label: "物料名称111", width: "149px", prop: "name" },
    { label: "规格111", width: "149px", prop: "spec" },
    { label: "单位111", width: "110px", prop: "unitName" }
  ]
})
const radioChange = row => {
  console.log("单选--传给后台的值", row)
}
</script>

```

### 单选 -- 开启键盘事件（上下选择高亮，回车选中）

`table` 数据源及表头信息;`keywords` 选项中的 value（选项的值）,label(选项的标签);`@radioChange` 选中事件，传出当前选中对象；`isKeyup` 是否开启键盘事件（默认不开启）上下选择高亮，回车选中；键盘向上/下滚动条根据移动的选择区域而滚动必须设置`max-height`。

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-table
        :table="table"
        :columns="table.columns"
        :maxHeight="400"
        :keywords="{ label: 'name', value: 'id' }"
        @radioChange="radioChange"
        isKeyup
      ></c-select-table>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const table = ref({
  data: [
    { id: 1, code: 1, name: "物料名称1", spec: "物料规格1", unitName: "吨" },
    { id: 2, code: 2, name: "物料名称2", spec: "物料规格2", unitName: "吨" },
    { id: 3, code: 3, name: "物料名称3", spec: "物料规格3", unitName: "吨" },
    { id: 4, code: 4, name: "物料名称4", spec: "物料规格4", unitName: "吨" },
    { id: 5, code: 5, name: "物料名称5", spec: "物料规格5", unitName: "吨" },
    { id: 6, code: 6, name: "物料名称6", spec: "物料规格6", unitName: "吨" },
    { id: 7, code: 7, name: "物料名称7", spec: "物料规格7", unitName: "吨" },
    { id: 8, code: 8, name: "物料名称8", spec: "物料规格8", unitName: "吨" },
    { id: 9, code: 9, name: "物料名称9", spec: "物料规格9", unitName: "吨" },
    {
      id: 10,
      code: 10,
      name: "物料名称10",
      spec: "物料规格10",
      unitName: "吨"
    },
    {
      id: 11,
      code: 11,
      name: "物料名称11",
      spec: "物料规格11",
      unitName: "吨"
    },
    {
      id: 12,
      code: 12,
      name: "物料名称12",
      spec: "物料规格12",
      unitName: "吨"
    },
    {
      id: 13,
      code: 13,
      name: "物料名称13",
      spec: "物料规格13",
      unitName: "吨"
    }
  ],
  columns: [
    { label: "物料编号", width: "100px", prop: "code" },
    { label: "物料名称", width: "149px", prop: "name" },
    { label: "规格", width: "149px", prop: "spec" },
    { label: "单位", width: "110px", prop: "unitName" },
    { label: "物料编号1", width: "149px", prop: "code" },
    { label: "物料名称1", width: "149px", prop: "name" },
    { label: "规格1", width: "149px", prop: "spec" },
    { label: "单位1", width: "110px", prop: "unitName" },
    { label: "物料编号11", width: "149px", prop: "code" },
    { label: "物料名称11", width: "149px", prop: "name" },
    { label: "规格11", width: "149px", prop: "spec" },
    { label: "单位11", width: "110px", prop: "unitName" },
    { label: "物料编号111", width: "149px", prop: "code" },
    { label: "物料名称111", width: "149px", prop: "name" },
    { label: "规格111", width: "149px", prop: "spec" },
    { label: "单位111", width: "110px", prop: "unitName" }
  ]
})
const radioChange = row => {
  console.log("单选--传给后台的值", row)
}
</script>

```

### 配置参数（Attributes）继承 el-table 及 el-select 属性

| 参数                              | 说明                                                         | 类型                                | 默认值     |
| --------------------------------- | ------------------------------------------------------------ | ----------------------------------- | ---------- |
| v-model:input-value               | 输入框回显值（isShowInput为true时生效）                      | Array/ String/Number/Boolean/Object | -          |
| isShowInput                       | 是否输入框显示                                               | Boolean                             | false      |
| table                             | 表格数据对象                                                 | Object                              | {}         |
| ---data                           | 展示下拉数据源                                               | Array                               | []         |
| ---total                          | 数据总条数                                                   | Number                              | -          |
| ---pageSize                       | 每页显示条目个数                                             | Number                              | -          |
| ---currentPage                    | 当前页数                                                     | Number                              | -          |
| columns                           | 表头信息                                                     | Array                               | []         |
| ----bind                          | el-table-column Attributes                                   | Object                              | -          |
| ----fixed                         | 列是否固定( left, right)                                     | string, boolean                     | -          |
| ----align                         | 对齐方式(left/center/right)                                  | String                              | center     |
| ----render                        | 返回三个参数(text：当前值,row：当前整条数据 ,index：当前行)  | function                            | -          |
| ----slotName                      | 插槽显示此列数据（其值是具名作用域插槽）                     | String                              | -          |
| ------scope                       | 具名插槽获取此行数据必须用解构接收{scope}                    | Object                              | 当前行数据 |
| keywords                          | 关键字配置（value-key 配置）                                 | Object                              | 无         |
| ------label                       | 选项的标签                                                   | String                              | ‘label’    |
| ------value                       | 选项的值                                                     | String / number                     | ‘value’    |
| radioTxt                          | 单选文案                                                     | String                              | 单选       |
| multiple                          | 是否开启多选                                                 | Boolean                             | false      |
| filterMethod                      | 自定义过滤                                                   | function                            | -          |
| rowClickRadio                     | 是否开启整行选中(单选)                                       | boolean                             | true       |
| isShowFirstColumn                 | 是否显示首列(单选)                                           | boolean                             | true       |
| defaultSelectVal                  | 设置第一页默认选中项--keywords.value 值                      | Array                               | []         |
| filterable                        | 是否开启过滤(根据 keywords 的 label 值进行过滤)              | Boolean                             | true       |
| reserveSelection                  | 是否支持翻页选中                                             | Boolean                             | true       |
| isShowPagination                  | 开启分页                                                     | Boolean                             | false      |
| tableWidth                        | table 宽度(单位：px) 若设置 0，宽度 100%                     | Number/String                       | 550        |
| selectWidth                       | select 宽度(单位：px) 若设置 0，宽度 100%                    | Number/String                       | 550        |
| inputWidth                        | input 输入框的宽度(单位：px) 若设置 0，宽度 100%             | Number/String                       | 550        |
| inputAttr                         | 继承所有 el-input 的属性                                     | Object                              | -          |
| isKeyup                           | 单选是否开启键盘事件                                         | Boolean                             | false      |
| isShowQuery                       | 是否允许配置查询条件(继承 TQueryCondition 的所有属性、事件、插槽) | Boolean                             | false      |
| isShowBlurBtn                     | 条件查询组件是否显示隐藏下拉框按钮                           | Boolean                             | false      |
| btnBind                           | 显示下拉框按钮配置，继承`el-button`所有属性;`默认值{type:'danger',btnTxt:'关闭下拉框'}` | Object                              | -          |
| isClearQuery                      | 关闭下拉框是否清空搜索条件                                   | Boolean                             | false      |
| selfExpanded                      | 是否始终显示下拉框                                           | Boolean                             | false      |
| isExpanded                        | 是否显示下拉框                                               | Boolean                             | false      |
| toolbar                           | el-table 头部插槽（位置：查询条件下面）                      | slot                                | -          |
| footer                            | el-table 底部插槽（位置：分页器上面）                        | slot                                | -          |
| multipleFixed1.4.13               | table 是否固定多选                                           | Boolean                             | false      |
| radioFixed1.4.13                  | table 是否固定单选                                           | Boolean                             | false      |
| useVirtual1.4.13                  | table 是否开启虚拟滚动                                       | Boolean                             | false      |
| virtualShowSize1.4.13             | 虚拟列表的渲染行数                                           | Number                              | 30         |
| multipleDisableDelete1.4.14       | 多选--之前选中的数据不在新数据源下，是否隐藏`tag`删除icon    | Boolean                             | false      |
| defaultValIsOpenRadioChange1.4.14 | 默认赋值--是否开启单选事件                                   | Boolean                             | false      |
| radioSameIsCancel1.4.15           | 单选选中同一条数据，是否取消选中                             | Boolean                             | true       |
| border1.4.15                      | 下拉表格是否显示边框                                         | Boolean                             | true       |
| tableSize1.4.15                   | 下拉表格大小可选值：`large`、`default`、`small`              | String                              | ''         |

### 事件（events）继承 el-table 及 el-select 属性

| 事件名          | 说明                                                     | 回调参数                                       |
| --------------- | -------------------------------------------------------- | ---------------------------------------------- |
| page-change     | 页码改变事件(避免与 el-table 的 current-change 事件冲突) | 返回选中的页码                                 |
| selectionChange | 多选事件                                                 | 返回选中的项数据及选中项的 keywords.value 集合 |
| radioChange     | 单选                                                     | 返回当前项所有数据                             |
| input-focus     | 输入框聚焦                                               | -                                              |
| input-blur      | 输入框失焦                                               | -                                              |
| input-click     | 输入框点击                                               | -                                              |
| input-clear     | 输入框清空                                               | -                                              |

### Expose 方法（Methods）



| 方法名             | 说明                            | 回调参数 |
| ------------------ | ------------------------------- | -------- |
| clear              | 清空选中项                      |          |
| focus              | 使 input 获取焦点               |          |
| blur               | 使 input 失去焦点，并隐藏下拉框 |          |
| tQueryConditionRef | 条件查询组件实例                |          |
| selectRef          | 下拉选择实例                    |          |
| selectTable        | el-table 实例                   |          |
