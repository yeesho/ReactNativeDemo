import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
