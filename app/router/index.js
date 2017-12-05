import { StackNavigator } from 'react-navigation'

import Home from '../pages/home'
import List from '../pages/list'
import Search from '../pages/search'
import User from '../pages/user'

const IndexRouter = StackNavigator({
  Home: {screen: Home}
})

const ListRouter = StackNavigator({
  List: {screen: List}
})

const SearchRouter = StackNavigator({
  Search: {screen: Search}
})

const UserRouter = StackNavigator({
  User: {screen: User}
})

export {
  IndexRouter,
  ListRouter,
  SearchRouter,
  UserRouter
} 
