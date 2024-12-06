# CInput 输入框组件

### 基本使用

基本使用

```vue preview
<template>
    <c-input placeholder="请输入内容" v-model="vlaue" @change="change" />
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 输入金额

设置`inputType=amount`；若开启千分号显示`showThousands`，则必须`type=text`，默认2位小数点，可设置`decimalLimit`来调整小数点位数。

```vue preview
<template>
    <c-input
        placeholder="请输入金额"
        inputType="amount"
        showThousands
        v-model="vlaue"
        @change="change"
      >
    </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 金额鼠标移入提示中文

设置`inputType=amount`；标签添加`isTip`开启中文提示则不允许开启千分号显示`showThousands`。

```vue preview
<template>
      <c-input
        placeholder="请输入金额"
        inputType="amount"
        isTip
        v-model="vlaue"
        @change="change"
      >
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>(1245354568.25)
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 输入手机号

设置`inputType=phone`

```vue preview
<template>
      <c-input
        placeholder="请输入手机号"
        maxlength="11"
        inputType="phone"
        v-model="vlaue"
        @change="change"
      >
        <template #prepend>手机号</template>
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
```

### 输入整数

设置`inputType=integer`

```vue preview
<template>
      <c-input placeholder="请输入整数" inputType="integer" v-model="vlaue" @change="change">
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
```

### 输入数字（含小数点）

设置`inputType=decimal`，默认2位小数点，可设置`decimalLimit`来调整小数点位数。

```vue preview
<template>
      <c-input
        placeholder="请输入数字（含小数点）"
        inputType="decimal"
        :decimalLimit="4"
        v-model="vlaue"
        @change="change"
      >
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>
```

### 输入身份证号

设置`inputType=idCard`

```vue preview
<template>
      <c-input placeholder="请输入身份证号" inputType="idCard" v-model="vlaue" @change="change">
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 格式化输入内容

在 `formatter`的情况下显示值，我们通常同时使用 `parser`

```vue preview
<template>
      <c-input
        v-model="vlaue"
        @change="change"
        :formatter="value => `￥${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
      >
      </c-input>
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 文本域

设置 `type="textarea"`，并可通过 `rows` 属性控制文本域高度

```vue preview
<template>
  <c-layout-page>
    <c-layout-page-item>
      <el-button type="danger" @click="showWordLimit = !showWordLimit">{{
        `${!showWordLimit ? "显示" : "不显示"}剩余字数`
      }}</el-button>
    </c-layout-page-item>
    <c-layout-page-item>
      <c-input
        v-model="textarea1"
        style="width: 240px"
        autosize
        :show-word-limit="showWordLimit"
        type="textarea"
        maxlength="10"
        placeholder="Please input"
      />
    </c-layout-page-item>
    <c-layout-page-item>
      <c-input
        v-model="textarea2"
        style="width: 240px"
        :autosize="{ minRows: 2, maxRows: 4 }"
        :show-word-limit="showWordLimit"
        maxlength="30"
        type="textarea"
        placeholder="Please input"
      />
    </c-layout-page-item>
  </c-layout-page>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const textarea1 = ref("")
const textarea2 = ref("")
const showWordLimit = ref(false)
</script>


```

### 复合型输入框

可通过 slot = prepend 和 slot = append 来增加前置和后置的元素

```vue preview
<template>

      <c-input v-model="input1" style="max-width: 600px" placeholder="Please input">
        <template #prepend>Http://</template>
      </c-input>

      <c-input v-model="input2" style="max-width: 600px" placeholder="Please input">
        <template #append>.com</template>
      </c-input>


      <c-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </c-input>
      <c-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </c-input>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
const input1 = ref("")
const input2 = ref("")
const input3 = ref("")
const select = ref("")
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>

```

### 尺寸

可通过 `size` 属性指定输入框的尺寸，该属性可接受 `medium`, `small`, `mini` 三个值

```vue preview
<template>
      <el-radio-group v-model="size" aria-label="size control" size="small">
        <el-radio-button value="large">large</el-radio-button>
        <el-radio-button value="default">default</el-radio-button>
        <el-radio-button value="small">small</el-radio-button>
      </el-radio-group>
      <c-input placeholder="请输入内容" :size="size" v-model="vlaue" @change="change" />
</template>
<script setup lang="ts">
import { ref } from "vue"
const vlaue = ref<any>()
const size = ref("default")
const change = (e: any) => {
  console.log("输出的值", e)
  console.log("v-model的值", vlaue.value)
}
</script>

```

### 插槽使用

按照 `el-input` 方式来使用插槽

```vue preview
<template>
  
      <c-input v-model="input1" style="max-width: 600px" placeholder="Please input">
        <template #prepend>Http://</template>
      </c-input>
  
      <c-input v-model="input2" style="max-width: 600px" placeholder="Please input">
        <template #append>.com</template>
      </c-input>
   
      <c-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </c-input>
 
      <c-input
        v-model="input3"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
        <template #append>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
      </c-input>
 
</template>
<script setup lang="ts">
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
const input1 = ref("")
const input2 = ref("")
const input3 = ref("")
const select = ref("")
</script>

```

