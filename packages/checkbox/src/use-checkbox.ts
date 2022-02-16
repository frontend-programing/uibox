import { computed, getCurrentInstance } from 'vue'
import { ICheckboxProps } from './checkbox.type'

function useModel(props: ICheckboxProps) {
  const { emit } = getCurrentInstance()
  const model = computed({
    get() {
      return props.modelValue
    },

    set(val) {
      emit('update:modelValue', val)
    }
  })

  return model
}

export default function useCheckbox(props: ICheckboxProps) {
  const model = useModel(props)

  return {
    model
  }
}
