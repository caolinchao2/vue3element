# button按钮组件(内置防抖功能)

### 基础用法

`继承el-button所有属性` 新增`time`属性（防抖间隔时间；默认 1 秒）

```vue preview
<template>
  <c-layout-page class="t_button_demo">
    <c-layout-page-item>
      <div style="display: flex; align-items: center">
        <div style="width: 140px; font-weight: 700">输入防抖时间：</div>
        <el-input-number
          style="width: 240px"
          v-model="time"
          placeholder="请输入防抖时间（毫秒）"
          :min="1000"
          :max="10000"
          :controls="false"
          @change="handleChange"
        />
      </div>
      <c-button style="margin-top: 15px" color="#626aef" :time="time" @click="exportExcel"
        >导出</c-button
      >
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from "vue"
const time = ref(1000)
const handleChange = val => {
  console.log("输入框的值：", val)
}
const exportExcel = () => {
  console.log("点击事件")
  ElMessage({
    message: "点击事件",
    type: "success"
  })
}
</script>

```

### 提示文字

使用 `type、size、tip、icon`和`placement`属性来定义 Button 的样式；

```vue preview
<template>
  <c-layout-page class="t_button_demo">
    <c-layout-page-item>
      <c-button text style="font-size: 28px" tip="编辑" icon="Edit" />
      <c-button text tip="删除" icon="Delete" />
      <c-button link tip="primary" icon="Search" />
      <c-button text tip="primary" icon="Search" />
      <c-button text type="primary" tip="primary" icon="Edit" />
      <c-button text type="success" tip="success" icon="Check" />
      <c-button text type="info" tip="info" icon="Message" />
      <c-button text type="warning" tip="warning" icon="Star" />
      <c-button
        text
        type="danger"
        tip="danger"
        icon="Delete"
        :tipProps="{
          effect: 'light',
          placement: 'bottom'
        }"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>

```

### 是否需要防抖

通过设置 `isDebounce` ，可以选择是否开启防抖，默认为true

```vue preview
<template>
  <c-layout-page class="t_button_demo">
    <c-layout-page-item>
      <el-switch
        v-model="isDebounce"
        size="large"
        active-text="开启防抖"
        inactive-text="关闭防抖"
      />
      <div style="display: flex; align-items: center">
        <div style="width: 140px; font-weight: 700">输入防抖时间：</div>
        <el-input-number
          style="width: 240px"
          v-model="time"
          placeholder="请输入防抖时间（毫秒）"
          :min="1000"
          :max="10000"
          :controls="false"
          @change="handleChange"
        />
      </div>
      <c-button
        style="margin-top: 15px"
        :isDebounce="isDebounce"
        :time="time"
        type="primary"
        @click="exportExcel"
        >点击事件</c-button
      >
    </c-layout-page-item>
  </c-layout-page>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from "vue"
const time = ref(1000)
const isDebounce = ref(false)
const handleChange = val => {
  console.log("输入框的值：", val)
}
const exportExcel = () => {
  console.log("点击事件")
  ElMessage({
    message: "点击事件",
    type: "success"
  })
}
</script>

```

### 配置参数（Attributes）继承 el-button Attributes

| 参数       | 说明                                                         | 类型                                                 | 默认值 |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------- | ------ |
| size       | 尺寸                                                         | 'large' / 'default' / 'small'                        | -      |
| type       | 类型                                                         | 'default / 'primary / 'success / 'warning / 'danger' | -      |
| plain      | 是否朴素按钮                                                 | boolean                                              | false  |
| round      | 是否圆角按钮                                                 | boolean                                              | false  |
| circle     | 是否圆形按钮                                                 | boolean                                              | false  |
| time       | 防抖的时间                                                   | number                                               | 1000   |
| isDebounce | 是否开启防抖                                                 | boolean                                              | true   |
| tip        | 提示文字，常用于 type="text" 或拥有 text，link 属性的 button | string                                               | -      |
| placement  | Tooltip 组件出现的位置                                       | 继承 el-tooltip                                      | top    |
| tipProps   | Tooltip 组件的配置参数，详情可看 element-plus 官网           | object                                               | -      |

### placement 类型

> 'top' / 'top-start' / 'top-end' / 'bottom' / 'bottom-start' / 'bottom-end' / 'left' / 'left-start' / 'left-end' / 'right' / 'right-start' / 'right-end'
