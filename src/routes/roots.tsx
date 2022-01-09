import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/SignIn';
import { Courses } from '../pages/Courses';

const Stack = createNativeStackNavigator();

export function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signin"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="courses" component={Courses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
