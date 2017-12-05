import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { px2dp } from '../utils/getDeviceInfo'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    return (
      <View style={styles.searchBar}>
        <View style={styles.textInputContainer}>
          <TextInput 
            style={styles.textInput}
            underlineColorAndroid="transparent"
            returnKeyType="search"
            placeholder="搜索"
            onChangeText={(text) => this.setState({text})}/>

          <Icon name="search" size={px2dp(22)} color="#666"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff'
  },
  textInputContainer: {
    height: 24,
    borderRadius: 24,
    backgroundColor: '#eaeaea',
    overflow: 'hidden'
  },
  textInput: {
    height: '100%',
    textAlign: 'center',
    padding: 0
  }
})
