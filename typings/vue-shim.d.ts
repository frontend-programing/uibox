declare module '*.vue' {
  import { App, DefineComponent } from 'vue'
  const Component: { install(app: App): void } & DefineComponent
  export default Component
}
