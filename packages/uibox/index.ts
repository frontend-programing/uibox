import { App } from 'vue'
import Icon from '@uibox/icon'
import Button from '@uibox/button'

const components = [Icon, Button]

export default function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
