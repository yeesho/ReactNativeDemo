import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class List extends Component {
  static navigationOptions = {
    title: 'List'
  }

  render () {
    return (
      <View>
        <Text>List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
