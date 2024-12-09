# detail详情组件

### 基本使用

基本使用

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### 加边框

设置border可加边框

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" border />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### 每行展示多少项

每行展示多少项

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <el-radio-group v-model="descColumn" size="small" style="margin-bottom: 15px">
        <el-radio-button :value="1">一行展示</el-radio-button>
        <el-radio-button :value="2">一行展示2项</el-radio-button>
        <el-radio-button :value="3">一行展示3项</el-radio-button>
        <el-radio-button :value="4">一行展示4项</el-radio-button>
      </el-radio-group>
    </c-layout-page-item>
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" :descColumn="descColumn" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const descColumn = ref(1)
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      bind: { "label-class-name": "custom_name" },
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### 垂直布局

设置direction="vertical"

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" direction="vertical" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### 插槽显示

插槽显示

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" :descColumn="2">
        <template #slotName>
          {{
            `${DataSource.dataList.stocktakePlanNo}--${DataSource.dataList.planStocktakeUserName}`
          }}
        </template>
      </c-detail>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "插槽显示编号+负责人",
      slotName: "slotName",
      span: 4,
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### 字典回显

需要配置：`listTypeInfo`和`dataList`

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail
        :listTypeInfo="DataSource.listTypeInfo"
        :dataList="DataSource.dataList"
        :descData="DataSource.descData"
        :descColumn="2"
      >
        <template #slotName>
          <span>{{ DataSource.dataList.stocktakePlanNo }}</span>
          <span>--</span>
          <span>{{ DataSource.dataList.planStocktakeUserName }}</span>
        </template>
      </c-detail>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  listTypeInfo: {
    stockTakeTypeList: [
      {
        label: "在制品",
        value: 1
      },
      {
        label: "待检品",
        value: 2
      },
      {
        label: "合格品",
        value: 3
      },
      {
        label: "报废品",
        value: 4
      }
    ]
  },
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: "",
      tooltip: "tooltip字符串显示"
    },
    {
      label: "插槽显示编号+负责人",
      slotName: "slotName",
      span: 4,
      value: ""
    },
    {
      label: "字典回显",
      fieldName: "stocktakeJobStatus",
      value: "",
      filters: {
        list: "stockTakeTypeList"
      }
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### tooltip 显示

tooltip 显示

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" :descColumn="2">
        <template #slotName>
          <span>{{ DataSource.dataList.stocktakePlanNo }}</span>
          <span>--</span>
          <span>{{ DataSource.dataList.planStocktakeUserName }}</span>
        </template>
      </c-detail>
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="tsx">
import { reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: "",
      tooltip: () => {
        return <div>tooltip 函数显示</div>
      }
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: "",
      tooltip: "tooltip字符串显示"
    },
    {
      label: "插槽显示编号+负责人",
      slotName: "slotName",
      span: 4,
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### label不显示冒号

label不显示冒号

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" :isColon="false" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```

### label文字不加粗

label文字不加粗

```vue preview
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" :isLabelBold="false" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    workshopId: 301,
    workshopLabel: "压型车型",
    planStocktakeDate: "2022-03-03",
    warehouseId: 1,
    warehouseName: "压型电极仓",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    stocktakeType: 2,
    stocktakeTypeLabel: "临时盘点",
    originTypeList: "[1, 3]",
    originTypeListLabel: "在制品,合格品",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      fieldName: "planStocktakeDate",
      value: ""
    },
    {
      label: "车型",
      fieldName: "workshopLabel",
      value: ""
    },
    {
      label: "嘻嘻",
      fieldName: "warehouseName",
      value: ""
    },
    {
      label: "哎",
      fieldName: "originTypeListLabel",
      value: ""
    },
    {
      label: "备注",
      fieldName: "createRemark",
      value: "",
      span: 4
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>
```

### label render显示

```
<template>
  <c-layout-page class="t_detail_demo">
    <c-layout-page-item>
      <c-detail :descData="DataSource.descData" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="tsx">
import { ref, reactive, onMounted } from "vue"
const DataSource: any = reactive({
  dataList: {
    id: "1498904492217241602",
    stocktakePlanNo: "PD-YX-20220302002",
    planStocktakeDate: "2022-03-03",
    stocktakeJobStatus: 4,
    stocktakeJobStatusLabel: "待盘点录入",
    planStocktakeUserName: "张三",
    planStocktakeUserId: 0,
    createRemark: "测试"
  },
  descData: [
    {
      label: "电压",
      labelRender: () => {
        return <span style="color:red;">电压</span>
      },
      fieldName: "stocktakePlanNo",
      value: ""
    },
    {
      label: "状态",
      labelRender: () => {
        return <span style="color:blue;">状态</span>
      },
      fieldName: "stocktakeJobStatusLabel",
      value: ""
    },
    {
      label: "负责人",
      labelRender: () => {
        return <span style="color:green;">负责人</span>
      },
      fieldName: "planStocktakeUserName",
      value: ""
    },
    {
      label: "日期",
      labelRender: () => {
        return <span style="color:orange;">日期</span>
      },
      fieldName: "planStocktakeDate",
      value: ""
    }
  ]
})
onMounted(() => {
  DataSource.descData.map(item => {
    item.value = DataSource.dataList[item.fieldName]
  })
})
</script>

```



### 配置参数（Attributes）继承 el-descriptions el-descriptions-item Attributes

| 参数          | 说明                                               | 类型            | 默认值       |
| ------------- | -------------------------------------------------- | --------------- | ------------ |
| descData      | 详情页面数据源                                     | Array           | -            |
| ----label     | 详情字段说明标题                                   | String          | -            |
| ----value     | 详情字段返回值                                     | String          | -            |
| ----fieldName | value 返回值的字段                                 | String          | -            |
| ----slotName  | 插槽（自定义 value）                               | slot            | -            |
| ----bind      | 继承 el-descriptions-item 属性                     | Object          | -            |
| ----span      | 占用的列宽，默认占用 1 列，最多 4 列               | Number          | 1            |
| ----unit      | value值后面占位（通常:单位）                       | String          | -            |
| ----tooltip   | value 值的提示语                                   | String/function | -            |
| ----iconSize  | tooltip 提示语的 icon 大小                         | String/Number   | 继承字体大小 |
| ----iconColor | tooltip 提示语的 icon 颜色                         | String          | 继承颜色     |
| ----filters   | 字典类型（即后台返回的是数字类型）过滤转成中文     | Object          | -            |
| -------list   | 字典 list 定义的数据名即 listTypeInfo 里面对应的值 | String          | -            |
| -------key    | 下拉数据源的 key 字段                              | String          | 'value'      |
| -------label  | 下拉数据源的 label 字段                            | String          | 'label'      |
| descColumn    | 布局一行显示几列（默认：一行显示 4 列）            | Number          | 4            |
| isColon       | 是否显示冒号                                       | Boolean         | true         |
| isLabelBold   | label是否加粗显示                                  | Boolean         | true         |
| labelRender   | 自定义label                                        | function        | -            |
| dataList      | 开启 filters 时详情接口返回的数据                  | Object          | {}           |
| listTypeInfo  | 开启 filters 时下拉数据源                          | Object          | {}           |

### 继承 el-descriptions events
