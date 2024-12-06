<template>
  <div>
    <x-form v-if="formConfig" ref="xForm" v-model="formData" :config="formConfig" />
    <slot name="middle" />
    <el-row v-if="tableBtn" style="margin: 5px">
      <template v-for="(tableBtnItem, tableBtnIndex) in tableBtn">
        <el-button
          v-if="computeBoolen(tableBtnItem.show, true)"
          :key="tableBtnIndex"
          :size="tableBtnItem.size"
          :type="tableBtnItem.type"
          :plain="tableBtnItem.plain"
          :round="tableBtnItem.round"
          :circle="tableBtnItem.circle"
          :loading="tableBtnItem.loading"
          :disabled="tableBtnItem.disabled"
          :icon="tableBtnItem.icon"
          :autofocus="tableBtnItem.autofocus"
          :native-type="tableBtnItem.nativeType"
          @click="tableBtnItem.click()"
          :style="tableBtnItem.style"
        >
          {{ tableBtnItem.text }}
        </el-button>
      </template>
    </el-row>
    <el-table
      class="no-border-table"
      ref="table"
      :data="data"
      v-loading="computedConfig.loading"
      :height="computedConfig.height"
      :max-height="computedConfig.maxHeight"
      :stripe="computedConfig.stripe"
      :border="computedConfig.border"
      :size="computedConfig.size"
      :fit="computedConfig.fit"
      :show-header="computedConfig.showHeader"
      :highlight-current-row="computedConfig.highlightCurrentRow"
      :current-row-key="computedConfig.currentRowKey"
      :row-class-name="computedConfig.rowClassName"
      :row-style="computedConfig.rowStyle"
      :cell-class-name="computedConfig.cellClassName"
      :cell-style="computedConfig.cellStyle"
      :header-row-class-name="computedConfig.headerRowClassName"
      :header-row-style="computedConfig.headerRowStyle"
      :header-cell-class-name="computedConfig.headerCellClassName"
      :header-cell-style="computedConfig.headerCellStyle"
      :row-key="computedConfig.rowKey"
      :empty-text="computedConfig.emptyText"
      :default-expand-all="computedConfig.defaultExpandAll"
      :expand-row-keys="computedConfig.expandRowKeys"
      :default-sort="computedConfig.defaultSort"
      :tooltip-effect="computedConfig.tooltipEffect"
      :show-summary="computedConfig.showSummary"
      :sum-text="computedConfig.sumText"
      :summary-method="computedConfig.summaryMethod"
      :span-method="computedConfig.spanMethod"
      :select-on-indeterminate="computedConfig.selectOnIndeterminate"
      :indent="computedConfig.indent"
      :lazy="computedConfig.lazy"
      :load="computedConfig.load"
      :tree-props="computedConfig.treeProps"
      @select="(a, b) => computeFunction(computedConfig.select, a, b)"
      @select-all="(a) => computeFunction(computedConfig.selectAll, a)"
      @selection-change="(a) => computeFunction(computedConfig.selectionChange, a)"
      @cell-mouse-enter="(a, b, c, d) => computeFunction(computedConfig.cellMouseEnter, a, b, c, d)"
      @cell-mouse-leave="(a, b, c, d) => computeFunction(computedConfig.cellMouseLeave, a, b, c, d)"
      @cell-click="(a, b, c, d) => computeFunction(computedConfig.cellClick, a, b, c, d)"
      @cell-dblclick="(a, b, c, d) => computeFunction(computedConfig.cellDblclick, a, b, c, d)"
      @row-click="(a, b, c) => computeFunction(computedConfig.rowClick, a, b, c)"
      @row-contextmenu="(a, b, c) => computeFunction(computedConfig.rowContextmenu, a, b, c)"
      @row-dblclick="(a, b, c) => computeFunction(computedConfig.rowDblclick, a, b, c)"
      @header-click="(a, b) => computeFunction(computedConfig.headerClick, a, b)"
      @header-contextmenu="(a, b) => computeFunction(computedConfig.headerContextmenu, a, b)"
      @sort-change="(a) => computeFunction(computedConfig.sortChange, a)"
      @filter-change="(a) => computeFunction(computedConfig.filterChange, a)"
      @current-change="(a, b) => computeFunction(computedConfig.currentChange, a, b)"
      @header-dragend="(a, b, c, d) => computeFunction(computedConfig.headerDragend, a, b, c, d)"
      @expand-change="(a, b) => computeFunction(computedConfig.expandChange, a, b)"
    >
      <!-- 生成动态列 -->
      <template v-for="(configItem, configIndex) in computedConfig.column" :key="configIndex">
        <xColumn :config="configItem">
          <!-- slot 传递 -->
          <template v-if="configItem.slot" #[configItem.name]="scope">
            <slot :name="configItem.name" v-bind="scope" />
          </template>
        </xColumn>
      </template>

      <!-- 表格的操作按钮 -->
      <el-table-column
        v-if="operateConfig"
        :label="operateConfig.label"
        :width="config.operationWidth"
        :min-width="operateConfig.minWidth"
        :fixed="config.operationFixed"
        :render-header="operateConfig.renderHeader"
        :resizable="operateConfig.resizable"
        :align="operateConfig.align"
        :header-align="operateConfig.headerAlign"
        :class-name="operateConfig.className"
        :label-class-name="operateConfig.labelClassName"
      >
        <template #default="scope">
          <template v-for="(operateItem, operateIndex) in operateConfig.btn">
            <template v-if="operateIsRenderer(operateItem, scope.row)">
              <el-button
                v-if="operateShow(operateItem, scope.row)"
                :key="operateIndex"
                :size="operateItem.size"
                :type="operateItem.type"
                :plain="operateItem.plain"
                :round="operateItem.round"
                :circle="operateItem.circle"
                :loading="operateItem.loading"
                :disabled="operateItem.disabled"
                :icon="operateItem.icon"
                :autofocus="operateItem.autofocus"
                :native-type="operateItem.nativeType"
                @click="operateItem.click(scope.row, scope.$index)"
                :style="operateItemStyle(operateItem, scope.row)"
              >
                {{ operateItemText(operateItem, scope.row) }}
                <!-- {{ operateItem.text }} -->
              </el-button>
              <svg-icon
                v-else
                :style="{
                  marginLeft: '16px',
                  fontSize: '30px',
                  paddingTop: '8px',
                  ...operateItem.ganggangstyle,
                }"
                icon-class="gangganggang"
              ></svg-icon>
            </template>
          </template>
          <template v-if="operateDropdownShow(scope.row)">
            <el-dropdown
              :class="operateConfig.dropdown.config.className"
              :placement="operateConfig.dropdown.config.placement"
              :trigger="operateConfig.dropdown.config.trigger"
              :hide-on-click="operateConfig.dropdown.config.hideOnClick"
              :show-timeout="operateConfig.dropdown.config.showTimeout"
              :hide-timeout="operateConfig.dropdown.config.hideTimeout"
              :tabindex="operateConfig.dropdown.config.tabindex"
              @command="(index) => handleDropdownCommand(index, scope.row)"
            >
              <span class="el-dropdown-link">
                {{ operateConfig.dropdown.config.text }}
                <el-icon class="el-icon--right">
                  <ArrowDown />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu slot="dropdown">
                  <template
                    v-for="(dropdownBtnItem, dropdownBtnItemIndex) in operateConfig.dropdown.btn"
                  >
                    <el-dropdown-item
                      v-if="operateShow(dropdownBtnItem, scope.row)"
                      :key="dropdownBtnItemIndex"
                      :divided="operateConfig.dropdown.config.divided"
                      :disabled="dropdownBtnItem.disabled"
                      :icon="dropdownBtnItem.icon"
                      :command="dropdownBtnItemIndex"
                      :style="{
                        color: '#165BFF',
                        ...dropdownBtnItem.dropdownBtnColor,
                      }"
                    >
                      {{ dropdownBtnItem.text }}
                    </el-dropdown-item>
                  </template>
                </el-dropdown-menu>
              </template>
              <el-dropdown-menu slot="dropdown">
                <template
                  v-for="(dropdownBtnItem, dropdownBtnItemIndex) in operateConfig.dropdown.btn"
                >
                  <el-dropdown-item
                    v-if="operateShow(dropdownBtnItem, scope.row)"
                    :key="dropdownBtnItemIndex"
                    :divided="operateConfig.dropdown.config.divided"
                    :disabled="dropdownBtnItem.disabled"
                    :icon="dropdownBtnItem.icon"
                    :command="dropdownBtnItemIndex"
                    :style="{
                      color: '#165BFF',
                      ...dropdownBtnItem.dropdownBtnColor,
                    }"
                  >
                    {{ dropdownBtnItem.text }}
                  </el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div v-if="page && page.total">
      <el-pagination
        class="pagination-container"
        :current-page="page.pageNum"
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        :background="page.background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        prev-text="上一页"
        next-text="下一页"
      />
    </div>
  </div>
</template>

<script>
import xForm from '../../xForm/src/xForm.vue'
import xColumn from './xColumn'
import merge from 'lodash.merge'
import cloneDeep from 'lodash.clonedeep'
import mixinComponent from '../../common/xMixin'
export default {
  name: 'XTable',
  components: { xForm, xColumn },
  mixins: [mixinComponent()],
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Object,
      default: null,
    },
    load: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    // 根据表格配置中 search 为true的字段生成搜索框的配置
    formConfig() {
      const _this = this
      const formConfigTemp = {
        item: [],
        operate: [],
      }

      const searchConfig = merge({}, this.globalConfig.xtable.search, this.config.search)
      merge(formConfigTemp, searchConfig.form)
      if (this.config.searchBtn !== false) {
        const searchBtn = merge({}, searchConfig.btn, searchConfig.btn.searchBtn, {
          click: _this.search,
        })
        formConfigTemp.operate.push(searchBtn)
      }
      if (this.config.resetBtn !== false) {
        const resetBtn = merge({}, searchConfig.btn, searchConfig.btn.resetBtn, {
          click: _this.reset,
        })
        formConfigTemp.operate.push(resetBtn)
      }
      if (this.config.btn) {
        this.config.btn.forEach((btn) => {
          const customBtn = merge({}, searchConfig.btn, btn)
          formConfigTemp.operate.push(customBtn)
        })
      }
      this.config.column.forEach((item) => {
        if (item.search) {
          const tmp = cloneDeep(item)
          delete tmp.show
          formConfigTemp.item.push(tmp)
        }
      })
      return formConfigTemp.item.length ? formConfigTemp : false
    },
    tableBtn() {
      if (this.config.tableBtn && this.config.tableBtn.length > 0) {
        return this.config.tableBtn.map((btn) => {
          return merge({}, this.globalConfig.xtable.btn, btn)
        })
      } else {
        return false
      }
    },
    computedConfig() {
      const c = {}
      merge(c, this.globalConfig.xtable.table, this.config)
      return c
    },
    operateConfig() {
      if (!this.config.operate || !this.config.operate.length) return null
      const c = {}
      merge(c, this.globalConfig.xtable.column, this.globalConfig.xtable.operate.column)
      c.btn = []
      c.dropdown = {
        config: this.globalConfig.xtable.operate.dropdown,
        btn: [],
      }
      if (this.config.operate) {
        for (const operateItem of this.config.operate) {
          const b = merge({}, this.globalConfig.xtable.operate.btn, operateItem)
          if (b.dropdown === true) {
            c.dropdown.btn.push(b)
          } else {
            c.btn.push(b)
          }
        }
      }
      return c
    },
  },
  methods: {
    // 重置
    reset() {
      if (this.page) {
        this.page.pageNum = 1
      }
      this.$refs['xForm'].resetFields()
      this.getList()
    },
    // 表格的操作按钮显隐
    operateShow(operateItem, row) {
      if (typeof operateItem.show === 'boolean') {
        return operateItem.show
      } else if (typeof operateItem.show === 'function') {
        return operateItem.show(row)
      } else {
        return this.globalConfig.xtable.operate.btn.show
      }
    },
    operateIsRenderer(operateItem, row) {
      if (typeof operateItem.isRenderer === 'boolean') {
        return operateItem.isRenderer
      } else if (typeof operateItem.isRenderer === 'function') {
        return operateItem.isRenderer(row)
      } else {
        return this.globalConfig.xtable.operate.btn.isRenderer
      }
    },

    operateItemText(operateItem, row) {
      if (typeof operateItem.text === 'function') {
        return operateItem.text(row)
      } else {
        return operateItem.text
      }
    },
    operateItemStyle(operateItem, row) {
      if (typeof operateItem.style === 'function') {
        return operateItem.style(row)
      } else {
        return operateItem.style
      }
    },
    tableBtnItemStyle(operateItem, row) {
      if (typeof operateItem.type === 'function') {
        return operateItem.type(row)
      } else {
        return operateItem.type
      }
    },
    operateDropdownShow(row) {
      const trueDrop = this.operateConfig.dropdown.btn.filter((e) => {
        if (typeof e.show === 'boolean') {
          return e.show
        } else if (typeof e.show === 'function') {
          return e.show(row)
        } else {
          return this.globalConfig.xtable.operate.dropdown.show
        }
      })
      return trueDrop.length > 0
    },
    // 下拉菜单的点击事件
    handleDropdownCommand(index, row) {
      this.operateConfig.dropdown.btn[index].click(row)
    },
    // 点击搜索
    search() {
      if (this.page) {
        this.page.pageNum = 1
      }
      this.getList()
    },
    // 发送绑定的api
    getList() {
      this.load()
    },
    handleSizeChange(val) {
      // 每页显示几条
      this.page.pageSize = val
      this.$emit('update:page', this.page)
      this.getList()
    },
    handleCurrentChange(val) {
      // 当前页显示几条
      this.page.pageNum = val
      this.$emit('update:page', this.page)
      this.getList()
    },
    // 重写 table methods
    clearSelection() {
      this.$refs.table.clearSelection()
    },
    toggleRowSelection(row, selected) {
      this.$refs.table.toggleRowSelection(row, selected)
    },
    toggleAllSelection() {
      this.$refs.table.toggleAllSelection()
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.table.toggleRowExpansion(row, expanded)
    },
    setCurrentRow(row) {
      this.$refs.table.setCurrentRow(row)
    },
    clearSort() {
      this.$refs.table.clearSort()
    },
    clearFilter(columnKey) {
      this.$refs.table.clearFilter(columnKey)
    },
    doLayout() {
      this.$refs.table.doLayout()
    },
    sort(prop, order) {
      this.$refs.table.sort(prop, order)
    },
  },
}
</script>

<style scoped lang="scss">
.el-dropdown-link {
  cursor: pointer;
  color: #165bff;
  margin-left: 16px;
  font-size: 14px;
}
.el-dropdown-link-icon {
  font-size: 16px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
::v-deep .pagination-container {
  display: flex;
  justify-content: end;
  margin-top: 24px;
  .btn-prev {
    padding: 0 14px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btn-next {
    padding: 0 14px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .el-pager li {
    font-weight: 400;
  }
}
::v-deep .no-border-table {
  td {
    border: none !important;
  }
  th {
    border: none !important;
  }
  &::before {
    height: 0 !important;
  }
  .el-table__header {
    .el-table__cell {
      background-color: #e8efff !important;
    }
  }

  .el-table__header-wrapper {
    .has-gutter {
      th {
        background-color: #e8efff;
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
      }
    }
    .el-checkbox {
      display: none;
    }
  }
  .el-table__row {
    .el-table__cell {
      .cell {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #949bbe;
      }
    }
  }
}
</style>
