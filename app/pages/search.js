import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import SearchBar from '../components/searchBar'

export default class Search extends Component {
  static navigationOptions = {
    title: 'Search'
  }

  render () {
    return (
      <View>
        <SearchBar></SearchBar>
        <Text style={styles.text}>Search</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    color: 'red'
  }
})
