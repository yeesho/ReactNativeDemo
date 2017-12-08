import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'

import Swiper from '../components/swiper'
// import Swiper from 'react-native-swiper'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    return (
      <View>
        <Swiper>
          <View style={styles.slide}>
            <Image source={{uri: 'https://qncdn-live.tinfinite.com/56a1b447-91ee-4e52-b7c9-16ffc5a78282.png?imageMogr2/thumbnail/690x280'}} style={styles.image}></Image>
          </View>
          <View style={styles.slide}>
            <Image source={{uri: 'https://qncdn-live.tinfinite.com/50ab940a-0303-42b1-a7da-2088a9e64049.png?imageMogr2/thumbnail/690x280'}} style={styles.image}></Image>
          </View>
          <View style={styles.slide}>
            <Image source={{uri: 'https://qncdn-live.tinfinite.com/ad2d4582-3f38-4089-9b14-5773ee5665b9.png?imageMogr2/thumbnail/690x280'}} style={styles.image}></Image>
          </View>
          <View style={styles.slide}>
            <Image source={{uri: 'https://qncdn-live.tinfinite.com/c0ae77df-7934-4068-a158-8f09eecbe347.png?imageMogr2/thumbnail/690x280'}} style={styles.image}></Image>
          </View>
          <View style={styles.slide}>
            <Image source={{uri: 'https://qncdn-live.tinfinite.com/70452013-146b-478f-85fc-9a27d2b028c8.png?imageMogr2/thumbnail/690x280'}} style={styles.image}></Image>
          </View>
        </Swiper>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    height: 155
  },
  image: {
    height: '100%'
  }
})
