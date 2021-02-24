import { RouteProps } from 'react-router-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import pathNames from './pathNames';

import ShopView from 'views/ShopScreen';
import HomeView from 'views/HomeView';
import LoginView from 'views/LoginView';
import StoreView from 'views/StoreView';

interface RouteType extends RouteProps {
  isPrivate: boolean;
  key?: string;
}

const config: RouteType[] = [
  {
    path: pathNames.home,
    component: gestureHandlerRootHOC(ShopView),
    exact: true,
    isPrivate: true,
  },
  {
    path: pathNames.shops,
    component: gestureHandlerRootHOC(ShopView),
    exact: true,
    isPrivate: true,
  },
  {
    path: pathNames.store,
    component: gestureHandlerRootHOC(StoreView),
    exact: true,
    isPrivate: true,
  },
  {
    path: pathNames.login,
    component: gestureHandlerRootHOC(LoginView),
    exact: true,
    isPrivate: false,
  },
];

export default config;
