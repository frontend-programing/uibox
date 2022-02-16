export interface ICheckboxProps {
  // TODO: 用interface定义是为了扩展接口方便。。。。
  indeterminate?: boolean // 是否半选
  checked?: boolean // 是否选中
  name?: string // 原生的name
  disabled?: boolean // 是否禁用
  label?: boolean | number | string
  modelValue?: boolean | number | string // 绑定checkbox的值
}
