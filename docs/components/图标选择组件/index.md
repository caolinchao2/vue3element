# CSelectIcon elemnt-plus图标选择组件

### 基本使用

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-icon v-model="iconValue" @select="changeSelect" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const iconValue = ref("")
const changeSelect = (val: string) => {
  console.log(`选择的值:${val};v-model值：${iconValue.value}`)
}
</script>

```

### 是否显示弹窗搜索框

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-icon v-model="iconValue" @select="changeSelect" :isShowSearch="false" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const iconValue = ref("")
const changeSelect = (val: string) => {
  console.log(`选择的值:${val};v-model值：${iconValue.value}`)
}
</script>

```

### 是否显示选中后的图标

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-icon v-model="iconValue" @select="changeSelect" :isShowIcon="false" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const iconValue = ref("")
const changeSelect = (val: string) => {
  console.log(`选择的值:${val};v-model值：${iconValue.value}`)
}
</script>


```

### selectBind属性配置

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <c-select-icon v-model="iconValue" @select="changeSelect" :selectBind="selectBind" />
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ref } from "vue"
const iconValue = ref("")
const selectBind = ref({
  "prefix-icon": "Warning",
  placeholder: "自定义搜索框提示语", // 搜索框提示语
  dialogTitle: "自定义弹窗标题", // 弹窗标题
  searchPlaceholder: "搜索框提示语", // 搜索框提示语
  emptyDescription: "搜索为空提示语", // 搜索为空提示语
  width: "40%" // 弹窗宽度
})
const changeSelect = (val: string) => {
  console.log(`选择的值:${val};v-model值：${iconValue.value}`)
}
</script>
```

### 配置参数（Attributes）继承 el-input Attributes

| 参数         | 说明                 | 类型       | 默认值                                                       |
| ------------ | -------------------- | ---------- | ------------------------------------------------------------ |
| v-model      | 绑定值               | string     | -                                                            |
| prefixIcon   | 输入框前缀icon       | string     | Search                                                       |
| isShowSearch | 是否显示搜索图标     | Boolean    | true                                                         |
| isShowIcon   | 是否显示选中后的图标 | Boolean    | true                                                         |
| selectBind   | Attributes           | selectBind | `"prefix-icon": props.prefixIcon, placeholder: "请选择图标",dialogTitle:'请选择图标',clearable: true,width: "50%"` |

### 3、事件（events）继承 el-input 属事件

| 事件名 | 说明       | 回调参数           |
| ------ | ---------- | ------------------ |
| select | 选择完图标 | 返回选中的图标name |
