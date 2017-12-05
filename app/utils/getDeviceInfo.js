import { Dimensions } from 'react-native'

const deviceW = Dimensions.get('window').width
const deviceH = Dimensions.get('window').height
const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

export {
  deviceW,
  deviceH,
  px2dp
}
