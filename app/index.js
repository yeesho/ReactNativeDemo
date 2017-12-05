import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
  IndexRouter,
  ListRouter,
  SearchRouter,
  UserRouter 
} from './router'

import { deviceH, px2dp } from './utils/getDeviceInfo'

export default class Root extends Component {
  state = {
    selectedTab: 'home'
  }

  render () {
    return (
      <View style={styles.container}>
        <TabNavigator 
          tabBarStyle={{ height: 50, paddingBottom: 5 }}
          sceneStyle={{ paddingBottom: 50 }}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="精品"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="home" size={px2dp(24)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(24)} color="#3496f0"/>}
            badgeText="1"
            onPress={() => this.setState({selectedTab: 'home'})}>
            <IndexRouter/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'list'}
            title="分类"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="list" size={px2dp(24)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="list" size={px2dp(24)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'list'})}>
            <ListRouter/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="搜索"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="search" size={px2dp(24)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="search" size={px2dp(24)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'search'})}>
            <SearchRouter/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我的"
            selectedTitleStyle={{color: "#3496f0"}}
            renderIcon={() => <Icon name="user" size={px2dp(24)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="user" size={px2dp(24)} color="#3496f0"/>}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <UserRouter/>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceH,
    backgroundColor: '#F5FCFF'
  }
})
