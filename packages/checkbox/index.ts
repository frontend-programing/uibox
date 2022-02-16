import { App } from 'vue'
import CheckBox from './src/checkbox.vue'

CheckBox.install = (app: App) => {
  app.component(CheckBox.name, CheckBox)
}

type IWithInstall<T> = T & { install(app: App): void }

const _CheckBox: IWithInstall<typeof CheckBox> = CheckBox

export default _CheckBox
