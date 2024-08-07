import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { appColors } from '../utils/appColors';
import SearchBottomIcon from '../assets/svg/SearchBottomIcon';
import HeartBottomIcon from '../assets/svg/HeartBottomIcon';
import PropertyBottomIcon from '../assets/svg/PropertyBottomIcon';
import NotificationBottomIcon from '../assets/svg/NotificationBottomIcon';
import ProfileBottomIcon from '../assets/svg/ProfileBottomIcon';
import Home from '../screens/Home/Home';
import Collection from '../screens/BottomBar/Collections/Collection';
import Property from '../screens/BottomBar/Property/Property';
import Notification from '../screens/BottomBar/Notification/Notification';
import Profile from '../screens/BottomBar/Profile/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: appColors.white,
          height: 66,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: appColors.red,
        tabBarInactiveTintColor: appColors.grey,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchBottomIcon stroke={focused ? appColors.red : appColors.grey} />
          ),
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="Collection"
        component={Collection}
        options={{
          tabBarIcon: ({ focused }) => (
            <HeartBottomIcon stroke={focused ? appColors.red : appColors.grey} />
          ),
          tabBarLabel: 'Collections',
        }}
      />
      <Tab.Screen
        name="Property"
        component={Property}
        options={{
          tabBarIcon: ({ focused }) => (
            <PropertyBottomIcon stroke={focused ? appColors.red : appColors.grey} />
          ),
          tabBarLabel: 'My Property',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <NotificationBottomIcon stroke={focused ? appColors.red : appColors.grey} />
          ),
          tabBarLabel: 'Notifications',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileBottomIcon stroke={focused ? appColors.red : appColors.grey} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

const styles = StyleSheet.create({});
