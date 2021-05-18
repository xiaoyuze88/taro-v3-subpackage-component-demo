import { View, Text } from '@tarojs/components'
import './Component.less'

export function Component() {
  return (
    <View className='component'>
      find me. component，编译后可以看到该组件在主包common中
    </View>
  )
}
