import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class User extends Component {
  static navigationOptions = {
    title: 'User'
  }

  render () {
    return (
      <View>
        <Text>User</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
