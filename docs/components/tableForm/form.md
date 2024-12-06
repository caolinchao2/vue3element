# form

## 综合示例

配置 json，生成 form 表单，本示例展示了 xForm 的各种用法：设置初始值、树形选择器、表单校验 等

```vue preview
<template>
  <x-form style="width: 100%" ref="xFormRef" v-model:propData="formData" :config="formConfig" />
</template>
<script setup>
import { ref, computed } from 'vue'
let formData = ref({})
let xFormRef = ref()
let treeData = ref([
  {
    id: '1',
    name: 'xx公司',
    children: [
      {
        id: '2',
        name: '技术部',
        children: [
          { id: '4', name: 'Java 组' },
          { id: '5', name: 'Web 组' },
          { id: '6', name: 'PHP 组' },
          { id: '7', name: 'Python 组' },
        ],
      },
      { id: '3', name: '售后部' },
    ],
  },
])
const formConfig = computed(() => {
  return {
    inline: false,
    item: [
      {
        xType: 'input',
        name: 'username',
        label: '登录名',
        rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }],
      },
      {
        xType: 'datePicker',
        type: 'date',
        name: 'birthday',
        label: '生日',
        rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }],
      },
      {
        xType: 'select',
        type: 'tree',
        name: 'deptId',
        label: '部门',
        dic: { data: treeData.value, label: 'name', value: 'id' },
        rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }],
      },
      {
        xType: 'select',
        type: 'tree',
        name: 'deptId2',
        label: '部门多选',
        multiple: true,
        dic: { data: treeData.value, label: 'name', value: 'id' },
        rules: [{ required: true, message: '请输入', trigger: ['blur', 'change'] }],
      },
      {
        xType: 'input',
        name: 'phone',
        label: '手机号',
        rules: [
          {
            required: true,
            pattern: /^1[3-9][0-9]{9}$/,
            message: '请输入正确的手机号',
            trigger: ['blur', 'change'],
          },
        ],
      },
      {
        xType: 'input',
        name: 'email',
        label: '邮箱',
        rules: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
      },
      {
        xType: 'select',
        name: 'sex',
        label: '性别',
        dic: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
        ],
      },
      {
        xType: 'select',
        name: 'sex2',
        label: '自定义下拉',
        dic: { data: [{ id: 1, name: '男男' }], label: 'name', value: 'id' },
      },
      {
        xType: 'radio',
        name: 'status',
        label: '状态',
        dic: [
          { label: '激活', value: 'enable' },
          { label: '锁定', value: 'disable' },
        ],
      },
      {
        xType: 'checkbox',
        name: 'hobby',
        label: '爱好',
        dic: [
          { label: '篮球', value: 'basketball' },
          { label: '足球', value: 'football' },
        ],
      },
      {
        xType: 'input',
        type: 'password',
        name: 'password',
        label: '密码',
      },
      {
        xType: 'input',
        type: 'textarea',
        name: 'remark',
        label: '备注',
      },
    ],
    operate: [
      {
        text: '保存',
        show: true,
        click: async () => {
          if (!xFormRef) return
          console.log(xFormRef)
          await xFormRef.value.validate((valid, fields) => {
            if (valid) {
              console.log('submit!')
            } else {
              console.log('error submit!', fields)
            }
          })
        },
      },
      { text: '取消', show: true, click: () => console.log('取消') },
    ],
  }
})
</script>
<style lang="scss">
// ::v-deep .el-form-item__content {
//   width: calc(100% - 105px) !important;
// }
</style>
```

## 自定义横向展示

可以自定义横向展示的个数，默认四个

```vue preview
<template>
  <x-form
    style="width: 100%"
    ref="xFormRef"
    v-model:propData="formData"
    :config="formConfig"
  ></x-form>
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
  }
})
</script>
<style lang="scss"></style>
```

## slot 插入

在 form 表单之间插入任意信息，满足自定义需求，支持两种不同的插入方式，设置 xType=slot 时，表示保留 form 原有的 itemLabel，插入 label 后的内容；当设置 slot='slotName' 时表示插入一段和 form 完全无关的代码

```vue preview
<template>
  <x-form style="width: 100%" ref="xFormRef" v-model:propData="formData" :config="formConfig">
    <template #titleSlot1>
      <div
        style="
              font-weight: 600;
              font-size: 16px;
              color: red;
            "
      >
        这是插入的文字
      </div>
    </template>
    <template #attachment>
      <div style="display: flex; align-items: center">
        <el-button type="primary" icon="el-icon-upload2" @click="fsyqhdialog.Visible = true">
          点击上传
        </el-button>
        <div
          style="
                font-family: PingFang SC, PingFang SC;
                font-weight: 400;
                font-size: 12px;
                color: #999999;
                margin-left: 8px;
              "
        >
          只能上传pdf、word、ppt格式文件，不能超过500kb
        </div>
      </div>
    </template>
  </x-form>
</template>
<script setup>
import { ref, computed } from 'vue'
let formData = ref({})
let xFormRef = ref()

const formConfig = computed(() => {
  return {
    inline: false,
    item: [
      { slot: 'titleSlot1' },
      {
        xType: 'slot',
        name: 'attachment',
        label: '附件:',
      },
    ],
    itemStyle: 'width:100%;height:36px',
  }
})
</script>
<style lang="scss"></style>
```

## 远程搜索

在 form 表单之间插入任意信息，满足自定义需求

```vue preview
<template>
  <x-form style="width: 100%" ref="xFormRef" v-model:propData="formData" :config="formConfig">
    <template #titleSlot1>
      <div
        style="
              font-weight: 600;
              font-size: 16px;
              color: red;
            "
      >
        这是插入的文字
      </div>
    </template>
  </x-form>
</template>
<script setup>
import { ref, computed } from 'vue'
let formData = ref({})
let xFormRef = ref()

const formConfig = computed(() => {
  return {
    inline: false,
    item: [
      {
        xType: 'autocomplete',
        fetchSuggestions: querySearchAsync,
        name: 'username',
        label: '登录名',
        rules: [
          {
            required: true,
            message: '请输入',
            trigger: ['blur', 'change'],
          },
        ],
      },
    ],
  }
})
let restaurants = ref([])
let timeout = ref(0)
function querySearchAsync(queryString, cb) {
  let restaurantss = restaurants.value
  let results = queryString ? restaurantss.filter(createStateFilter(queryString)) : restaurantss

  clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
function createFilter(queryString) {
  return (restaurant) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
function loadAll() {
  return [
    { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
    {
      value: 'Hot honey 首尔炸鸡（仙霞路）',
      address: '上海市长宁区淞虹路661号',
    },
    {
      value: '新旺角茶餐厅',
      address: '上海市普陀区真北路988号创邑金沙谷6号楼113',
    },
    { value: '泷千家(天山西路店)', address: '天山西路438号' },
    {
      value: '胖仙女纸杯蛋糕（上海凌空店）',
      address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101',
    },
    { value: '贡茶', address: '上海市长宁区金钟路633号' },
    {
      value: '豪大大香鸡排超级奶爸',
      address: '上海市嘉定区曹安公路曹安路1685号',
    },
    {
      value: '茶芝兰（奶茶，手抓饼）',
      address: '上海市普陀区同普路1435号',
    },
    { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
    { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
    { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
    { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
    {
      value: 'Monica摩托主题咖啡店',
      address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F',
    },
    {
      value: '浮生若茶（凌空soho店）',
      address: '上海长宁区金钟路968号9号楼地下一层',
    },
    { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
    { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
    {
      value: '快乐柠檬（神州智慧店）',
      address: '上海市长宁区天山西路567号1层R117号店铺',
    },
    {
      value: 'Merci Paul cafe',
      address: '上海市普陀区光复西路丹巴路28弄6号楼819',
    },
    {
      value: '猫山王（西郊百联店）',
      address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306',
    },
    { value: '枪会山', address: '上海市普陀区棕榈路' },
    { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
    { value: '钱记', address: '上海市长宁区天山西路' },
    { value: '壹杯加', address: '上海市长宁区通协路' },
    {
      value: '唦哇嘀咖',
      address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元',
    },
    { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
    {
      value: '爱茜茜里(近铁广场)',
      address: '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺',
    },
    {
      value: '鲜果榨汁（金沙江路和美广店）',
      address: '普陀区金沙江路2239号金沙和美广场B1-10-6',
    },
    {
      value: '开心丽果（缤谷店）',
      address: '上海市长宁区威宁路天山路341号',
    },
    { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
    { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
    { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
    {
      value: '凡仔汉堡（老真北路店）',
      address: '上海市普陀区老真北路160号',
    },
    { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
    { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
    { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
    {
      value: '饭典*新简餐（凌空SOHO店）',
      address: '上海市长宁区金钟路968号9号楼地下一层9-83室',
    },
    {
      value: '焦耳·川式快餐（金钟路店）',
      address: '上海市金钟路633号地下一层甲部',
    },
    { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
    { value: '浏阳蒸菜', address: '天山西路430号' },
    { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
    {
      value: '樱花食堂（凌空店）',
      address: '上海市长宁区金钟路968号15楼15-105室',
    },
    { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
    {
      value: '福荣祥烧腊（平溪路店）',
      address: '上海市长宁区协和路福泉路255弄57-73号',
    },
    {
      value: '速记黄焖鸡米饭',
      address: '上海市长宁区北新泾街道金钟路180号1层01号摊位',
    },
    { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
    {
      value: '(小杨生煎)西郊百联餐厅',
      address: '长宁区仙霞西路88号百联2楼',
    },
    { value: '阳阳麻辣烫', address: '天山西路389号' },
    {
      value: '南拳妈妈龙虾盖浇饭',
      address: '普陀区金沙江路1699号鑫乐惠美食广场A13',
    },
  ]
}
</script>
<style lang="scss"></style>
```

## Attributes

| 参数    | 说明                          | 类型   | 可选项 | 默认值 |
| ------- | ----------------------------- | ------ | ------ | ------ |
| v-model | 绑定值                        | object | -      | -      |
| config  | 表单的配置，具体看下表 config | object |        |        |

## Config

| 参数       | 说明                                                                                            | 类型          | 可选项 | 默认值 |
| ---------- | ----------------------------------------------------------------------------------------------- | ------------- | ------ | ------ |
| ......     | 绑定值所有 el-form 的属性及方法，参见[文档](https://element-plus.org/zh-CN/component/form.html) | ...           | —      | —      |
| itemStyle  | 全部输入框的样式                                                                                | string        | —      | —      |
| item       | 表单的 Item，具体看下表 item                                                                    | array(object) | —      | —      |
| operate    | 表单底部的操作按钮，                                                                            | array(object) | —      | —      |
| labelWidth | label 的宽度                                                                                    | string        | —      | —      |
| isElRow    | 是否使用 row 展示                                                                               | boolean       |        | true   |
| elColSize  | 可以自定义 Row 属性，可见实例                                                                   | object        |        | {}     |
|            |                                                                                                 |               |        |        |

## Item

| 参数    | 说明                                                                                                                                                                                                                                       | 类型          | 可选项     | 默认值 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ---------- | ------ |
| ......  | 所有 element-ui 表单组件的属性及方法，例如需要一个输入框，就可以配置 el-input 的所有参数，参见不同表单组件的 element-ui 文档（有些表单进行了增强，参考本文档左侧目录中的详细配置[文档](https://element-plus.org/zh-CN/component/form.html) | ...           | —          | —      |
| xType   | 表示当前这项表单是什么组件，驼峰写法，与 element-ui 标签完全对应，例如时间选择器的标签为 el-time-select ，则 xType 配置为 timeSelect，除了 element-ui 的标签，还可以是 slot，用法见上面示例，增强了一对多的写法，参加上述示例              | string        | —          | —      |
| show    | 是否展示                                                                                                                                                                                                                                   | boolean       | true/false | true   |
| operate | 表单底部的操作按钮，                                                                                                                                                                                                                       | array(object) |            |        |
| style   | 输入框的 css 样式                                                                                                                                                                                                                          | string        |            |        |
| slot    | 插槽，自定义插入一段 html，值为插槽的名称，用法见上面示例                                                                                                                                                                                  | string        |            |        |
