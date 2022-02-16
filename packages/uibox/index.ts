import { App } from 'vue'
import Icon from '@uibox/icon'

const components = [Icon]

export default function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
