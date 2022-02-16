import { App } from 'vue'
import Icon from '@uibox/icon'
import Button from '@uibox/button'
import ButtonGroup from '@uibox/button-group'

const components = [Icon, Button, ButtonGroup]

export default function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
