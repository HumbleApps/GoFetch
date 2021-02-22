import { RouteProps } from 'react-router-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import pathNames from './pathNames';

import ShopView from 'views/ShopScreen';
import HomeView from 'views/HomeView';

interface RouteType extends RouteProps {
  isPrivate: boolean;
  key?: string;
}

const config: RouteType[] = [
  {
    path: pathNames.home,
    component: gestureHandlerRootHOC(HomeView),
    exact: true,
    isPrivate: true,
  },
  {
    path: pathNames.shops,
    component: gestureHandlerRootHOC(ShopView),
    exact: true,
    isPrivate: false,
  },
];

export default config;
