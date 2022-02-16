import { DefineComponent, ExtractPropTypes } from 'vue'

declare module '@vue/runtime-core' {
  export type ResolveProps<T> = T extends DefineComponent<infer E, any, any>
    ? ExtractPropTypes<E>
    : never
}
