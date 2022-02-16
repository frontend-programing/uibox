import { App, DefineComponent, ExtractPropTypes } from 'vue'

declare module '*.vue' {
  const Component: { install(app: App): void } & DefineComponent
  export default Component
}
declare module '@vue/runtime-core' {
  export type ResolveProps<T> = T extends DefineComponent<infer E, any, any>
    ? ExtractPropTypes<E>
    : never
}
