import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movies Catalog',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'movie' : 'movie-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="to-watch"
        options={{
          title: 'To Watch',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'clipboard-list' : 'clipboard-list-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
