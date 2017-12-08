import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native'

import { deviceW } from '../utils/getDeviceInfo'

export default class Swiper extends Component {
  state = {
    width: deviceW,
    index: 0,
    total: this.props.children.length || 0
  }

  scrollTo (index, animated = true) {
    if (index < 0 || index >= this.state.total ) return
    const x = index * this.state.width
    this.scrollView && this.scrollView.scrollTo({ x, y: 0, animated })
    this.setState({ index })
  }

  renderButtons () {
    return (
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          onPress={() => this.scrollTo(this.state.index - 1)}>
          <Text style={styles.pageBtn}>‹</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.scrollTo(this.state.index + 1)}>
          <Text style={styles.pageBtn}>›</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderScrollView (slides) {
    return (
      <ScrollView
        ref={view => this.scrollView = view}
        scrollEnabled={false}
        horizontal>
        {slides}
      </ScrollView>
    )
  }

  render () {
    const { children, showsButtons = true } = this.props
    const slides = Object.keys(children).map((item, i) => {
      return <View style={styles.slideItem} key={i}>{ children[item] }</View>
    })

    return (
      <View style={[ styles.SwiperContainer]}>
        {this.renderScrollView(slides)}
        {showsButtons && this.renderButtons()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  SwiperContainer: {
    position: 'relative'
  },
  slideItem: {
    width: deviceW,
    height: '100%'
  },
  BtnContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageBtn: {
    fontSize: 45,
    color: '#333'
  }
})
